/**
 * Guest-mode visual regression and WCAG smoke suite.
 * Run against local Vite: npm run dev -- --host 127.0.0.1; node scripts/qa-preview.mjs
 * Uses demo content only. No child accounts, microphone, or secret values.
 */
import {chromium} from 'playwright';
import {createRequire} from 'node:module';
import {mkdirSync,writeFileSync} from 'node:fs';
const require=createRequire(import.meta.url);
const axePath=require.resolve('axe-core/axe.min.js');
const base=process.env.BASE_URL||'http://127.0.0.1:5173/';
const viewports=[
 {id:'phone-360',width:360,height:800},
 {id:'phone-390',width:390,height:844},
 {id:'ipad-820',width:820,height:1180},
 {id:'desktop-1280',width:1280,height:800},
];
const report=[];const errors=[];const directory='qa-artifacts';
mkdirSync(directory,{recursive:true});
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const inspect=async(page,device,screen)=>{
  await page.waitForTimeout(150);
  const dimensions=await page.evaluate(()=>({content:document.documentElement.scrollWidth,viewport:document.documentElement.clientWidth}));
  const axe=await page.evaluate(async()=>{const r=await window.axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']}});return r.violations.map(v=>({id:v.id,impact:v.impact,targets:v.nodes.map(n=>n.target).slice(0,8)}))});
  report.push({device,screen,dimensions,axe});
  if(dimensions.content>dimensions.viewport)errors.push(device+' '+screen+': horizontal overflow '+dimensions.content+' > '+dimensions.viewport);
  if(axe.length)errors.push(device+' '+screen+': '+JSON.stringify(axe));
  if(screen==='Learn'||axe.length)await page.screenshot({path:directory+'/'+device+'-'+screen.replace(/\W/g,'-')+'.png',fullPage:true});
};
try{
 for(const v of viewports){
   const context=await browser.newContext({viewport:{width:v.width,height:v.height},reducedMotion:'reduce'});
   const page=await context.newPage();
   page.on('pageerror',e=>errors.push(v.id+': browser error '+e.message));
   await page.goto(base,{waitUntil:'domcontentloaded'});
   await page.getByRole('heading',{name:/Chọn bài|Choose a lesson/}).waitFor();
   await page.addScriptTag({path:axePath});
   await inspect(page,v.id,'Learn');

   const sectionCards=page.getByTestId('unit-section-card');
   const count=await sectionCards.count();
   if(count!==8)errors.push(v.id+': expected 8 section cards, got '+count);
   const expectedUnit5Videos=['zUl8CAI2BtI','p4iYlraEzd8','ckQvCLv1hlI','xuUDmNv-CII','UdTrA1OReAQ','_x5sP6pbVyI','lhpaieamu0c','-XboSEuNJLw'];
   if(v.id==='phone-360'||v.id==='desktop-1280'){
    await page.route('**/www.youtube-nocookie.com/**',r=>r.fulfill({status:200,contentType:'text/html',body:'<html><body>QA video placeholder</body></html>'}));
    for(const [i,video] of expectedUnit5Videos.entries()){
     await sectionCards.nth(i).click();
     await page.getByRole('button',{name:/Mở video|Load video/}).click();
     const src=await page.getByTestId('unit-section-video').getAttribute('src');
     if(!src?.includes(video))errors.push(v.id+': wrong video on Unit 5 lesson '+(i+1));
     await inspect(page,v.id,'Unit5Section'+(i+1));
     if(i===0||i===7)await page.screenshot({path:directory+'/'+v.id+'-lesson-'+(i+1)+'.png',fullPage:true});
    }
    await sectionCards.nth(0).click();
   }

   // Video belongs to the main Learn journey, not to the separate Textbook Path.
   // Verify the matched Unit 5 video without sending data to YouTube in CI.
   await page.route('**/www.youtube-nocookie.com/**',r=>r.fulfill({status:200,contentType:'text/html',body:'<html><body>Video placeholder for visual QA</body></html>'}));
   if(!(await page.getByTestId('unit-section-video').count()))await page.getByRole('button',{name:/Mở video|Load video/}).click();
   const videoSrc=await page.locator('iframe[title*="Unit 5"]').getAttribute('src');
   if(!videoSrc?.includes('zUl8CAI2BtI'))errors.push(v.id+': wrong Unit 5 video '+videoSrc);

   await page.getByRole('button',{name:/Unit 5/}).first().click();
   await inspect(page,v.id,'Unit5');
   await page.getByRole('button',{name:/Học ngay|Learn/}).first().click();

   // More menu must close after selection and never cover the lesson content.
   await page.locator('header details summary').click();
   await page.locator('header details').getByRole('button',{name:/Pronunciation/}).click();
   const menuOpen=await page.locator('header details').evaluate(el=>el.open);
   if(menuOpen)errors.push(v.id+': More menu stayed open after navigation');
   await inspect(page,v.id,'Pronunciation');

   // Explore older curriculum screens at smallest handset size.
   if(v.id==='phone-360'){
    for(const entry of [
      ['Foundations',/Foundations/],['Unit4',/Unit 4/],['Home',/Home/],
      ['DailyGame',/Daily Game/],['Studio',/Studio/],['Teacher',/Teacher guide/],['Account',/Account/]
    ]){
      await page.locator('header details summary').click();
      await page.locator('header details').getByRole('button',{name:entry[1]}).first().click();
      await inspect(page,v.id,entry[0]);
    }
   }
   if(v.id==='phone-390'){
     await page.getByRole('button',{name:/Học ngay|Learn/}).first().click();
     await page.locator('label').filter({hasText:/học xong phần này|I studied this section/i}).locator('input[type=checkbox]').check();
     await page.getByRole('button',{name:/Làm thử thách|Start knowledge check/i}).click();
     for(const [i,n] of [0,1,2,0].entries())await page.locator('fieldset').nth(i).locator('input[type=radio]').nth(n).check();
     await page.getByRole('button',{name:/Xem kết quả|Check answers/}).click();
     await page.getByRole('button',{name:/Shadowing/}).last().click();
     for(let i=0;i<4;i++){
       await page.getByRole('button',{name:/Em đã nhại|I repeated/}).click();
       if(i<3)await page.getByRole('button',{name:/Câu tiếp|Next/}).click();
     }
     await page.getByRole('button',{name:/Hoàn thành|Finish/}).click();
     await page.getByText(/Hoàn thành một bài học|Mission completed/).waitFor();
     await page.screenshot({path:directory+'/'+v.id+'-finished.png',fullPage:true});
   }
   await context.close();
 }
}finally{await browser.close();}
writeFileSync(directory+'/summary.json',JSON.stringify({screens:report.length,issues:errors,report},null,2));
console.log('QA screens:',report.length,'issues:',errors.length);
for(const err of errors)console.error(err);
if(errors.length)process.exitCode=1;
