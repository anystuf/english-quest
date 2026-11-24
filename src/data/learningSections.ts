import {journeyMissions,type JourneyQuiz} from './learningJourney.ts';
export type UnitNo=1|2|3|4|5;
export type SectionIndex=0|1|2|3|4|5|6|7;
export const sectionNames=['Getting Started','A Closer Look 1','A Closer Look 2','Communication','Skills 1','Skills 2','Looking Back','Project'] as const;
export const sectionPageByUnit:Partial<Record<UnitNo,readonly string[]>>={
 4:['40–41','42','43–44','45','46','47','48','49'],
 5:['50–51','52','53–54','55','56','57','58','59'],
};
/** IDs verified against the actual parent-provided Ms Kathy playlist page.
 * Unit 3 Skills 1/2 are absent from the playlist, and its apparent Unit 3 slot #22
 * is explicitly a Grade 3 video: do not embed a misleading clip. */
export const verifiedPlaylistVideos:Record<UnitNo,readonly (string|null)[]>={
 1:['wH3IDKbP9Yg','CVQL19Cy14E','hUpAFSfH5Eo','Rxdfvnk6orw','c4XfoN7TSfk','cDrDDVMQ84I','Q8ohe5qZK_4','uxmW_D6LkfQ'],
 2:['nytLSrBNVQk','yHDPNWv5Jis','hW6QKqig2e8','CXnIr-eJDMk','0ikD0N1fdpY','iBa9-VRvTrU','_MOIwuzm6Mk','cQap5k3ZflQ'],
 3:['IXEQKclDDcs','QDDuPfKvpdc','XakUR99LqVs','JlfLaSlWSEQ',null,null,'AeIcZaeLKGM','MBd3XP03f0A'],
 4:['R4l5mvN49zo','1RRGiRqO5co','hjNuE5Yax2w','foaeB3HzdtY','GC8AtaVduoU','ZnQTDHjsODI','v3M9JU7j_V8','lEE4rXaDeRw'],
 5:['zUl8CAI2BtI','p4iYlraEzd8','ckQvCLv1hlI','xuUDmNv-CII','UdTrA1OReAQ','_x5sP6pbVyI','lhpaieamu0c','-XboSEuNJLw'],
};
export const supplementaryVideoNotes:Partial<Record<UnitNo,string>>={5:'Getting Started: video cùng chủ đề được bổ sung ngoài playlist vì playlist không có mục này.'};
export const sectionFocusByUnit:Record<UnitNo,readonly string[]>={
 1:['Giới thiệu sở thích','Từ vựng và phát âm sở thích','Hiện tại đơn','Hỏi và nói về sở thích','Đọc và nói về một sở thích','Nghe và viết về sở thích','Ôn kiến thức Unit 1','Dự án về sở thích'],
 2:['Nói về sức khỏe','Từ vựng và phát âm sức khỏe','Câu đơn và lời khuyên','Giao tiếp về thói quen tốt','Đọc và nói về cuộc sống khỏe','Nghe và viết về thói quen','Ôn kiến thức Unit 2','Dự án sống khỏe'],
 3:['Giới thiệu hoạt động tình nguyện','Từ vựng và phát âm cộng đồng','Quá khứ đơn','Giao tiếp về tình nguyện','Đọc và nói về dự án cộng đồng','Nghe và viết về dự án cộng đồng','Ôn kiến thức Unit 3','Dự án cộng đồng'],
 4:['Sở thích nghệ thuật','Người, địa điểm và phát âm /ʃ/, /ʒ/','So sánh like, different from, as ... as','Trao đổi về âm nhạc, nghệ thuật','Đọc và nói về nghệ thuật','Nghe và viết về nghệ thuật','Ôn Unit 4','Dự án về âm nhạc và nghệ thuật'],
 5:['Gọi món và phân loại Food / Drink','Nguyên liệu, đơn vị đo và phát âm','Some, any, how much, how many','Hỏi giá và món ăn yêu thích','Đọc và giới thiệu món phở','Nghe, viết về thói quen ăn uống','Ôn từ vựng và ngữ pháp','Thiết kế poster thói quen ăn uống'],
};
export type JourneySection={id:string;unit:UnitNo;index:SectionIndex;name:string;focus:string;page?:string;videoId:string|null;source:'playlist'|'supplementary'|'unavailable';quiz:JourneyQuiz[];lines:{en:string;vi:string}[];specific:boolean};
type QuizRow=[string,[string,string,string],0|1|2,string];
const skills=['meaning','use','grammar','sentence'] as const;
const unit5Rows:QuizRow[][]=[
 [
  ['“Fish sauce” là gì?',['Nước mắm','Sữa','Súp'],0,'Fish sauce nghĩa là nước mắm.'],
  ['Cách gọi món lịch sự?',['I food please.','I would like some rice, please.','Some would me rice.'],1,'I would like ... , please để gọi món lịch sự.'],
  ['There ___ some soup on the table.',['are','am','is'],2,'Soup không đếm được nên dùng is.'],
  ['Chọn câu đúng.',['She likes spring rolls.','She like spring rolls.','She are like spring rolls.'],0,'She + likes, vì chủ ngữ số ít trong hiện tại đơn.']
 ],
 [
  ['“A teaspoon” là gì?',['Một chai','Một thìa cà phê','Một cái bát'],1,'Teaspoon là thìa cà phê.'],
  ['Chọn cụm từ đúng.',['make a photo','play a photo','take a photo'],2,'Ta dùng take a photo.'],
  ['We need two ___ of sugar.',['tablespoons','tablespoon','tablespooning'],0,'Sau two dùng danh từ số nhiều.'],
  ['Chọn câu đúng về nguyên liệu.',['We need an water.','We need a litre of water.','We needs a water.'],1,'A litre of water là một lít nước.']
 ],
 [
  ['“How many” dùng với gì?',['Danh từ không đếm được','Tính từ','Danh từ đếm được số nhiều'],2,'How many eggs? — eggs đếm được.'],
  ['Chọn câu dùng any tự nhiên.',['There isn’t any milk.','There isn’t some milks.','There are any milks.'],0,'Any thường dùng trong câu phủ định.'],
  ['___ rice do you need?',['How many','How much','How often'],1,'Rice không đếm được, hỏi How much.'],
  ['Chọn câu đúng.',['How much apples?','How many sugar?','How many eggs do we need?'],2,'Eggs đếm được số nhiều.']
 ],
 [
  ['“Menu” nghĩa là gì?',['Thực đơn','Hóa đơn','Nhà bếp'],0,'Menu là thực đơn.'],
  ['Cách hỏi giá một tô phở?',['How many is the soup?','How much is a bowl of pho?','How often soup?'],1,'How much is ...? dùng hỏi giá.'],
  ['How much ___ two glasses of juice?',['is','am','are'],2,'Two glasses là số nhiều: are.'],
  ['Chọn câu hỏi món yêu thích đúng.',['What is your favourite drink?','What your drink favourite?','Which drink are like?'],0,'What is your favourite drink? là câu hỏi tự nhiên.']
 ],
 [
  ['“Broth” trong món phở là gì?',['Bánh phở','Nước dùng','Thìa'],1,'Broth là nước dùng.'],
  ['Chọn cách giới thiệu món ăn.',['Pho has water breads.','Pho be noodles.','Pho is a popular Vietnamese dish.'],2,'Pho is a popular Vietnamese dish là câu giới thiệu đúng.'],
  ['Pho ___ rice noodles and meat.',['has','have','having'],0,'Pho là chủ ngữ số ít, dùng has.'],
  ['Chọn câu nói về nguyên liệu.',['Pho are made with beef.','Pho is made with rice noodles.','Pho is make noodles.'],1,'Be made with dùng nói nguyên liệu.']
 ],
 [
  ['“Eating habits” nghĩa là gì?',['Thực đơn','Nhà hàng','Thói quen ăn uống'],2,'Eating habits là thói quen ăn uống.'],
  ['Chọn trạng từ tần suất.',['usually','delicious','bottle'],0,'Usually diễn tả thói quen thường xuyên.'],
  ['She usually ___ breakfast at seven.',['have','has','having'],1,'She has breakfast trong hiện tại đơn.'],
  ['Câu viết về giờ ăn đúng?',['We dinner at seven.','We eats dinner at seven.','We have dinner at seven.'],2,'We have dinner at seven.']
 ],
 [
  ['“Ingredients” nghĩa là gì?',['Nguyên liệu','Thìa','Đồ uống'],0,'Ingredients là nguyên liệu.'],
  ['Chọn lượng từ trong câu khẳng định.',['I have any rice.','I have some rice.','I have much rices.'],1,'Some dùng với rice trong câu khẳng định.'],
  ['How ___ oranges do you need?',['much','manys','many'],2,'Oranges đếm được: many.'],
  ['Câu nào đúng?',['There is some soup.','There are some soup.','There am soup.'],0,'Soup không đếm được nên is.']
 ],
 [
  ['“Poster” nghĩa là gì?',['Thực đơn','Áp phích','Bát súp'],1,'Poster là áp phích.'],
  ['Câu giới thiệu poster đúng?',['This poster about foods.','Poster mine foods.','This poster shows eating habits.'],2,'This poster shows eating habits là câu giới thiệu hoàn chỉnh.'],
  ['People in my town ___ rice for lunch.',['eat','eats','eating'],0,'People là chủ ngữ số nhiều nên eat.'],
  ['Chọn câu mô tả lịch ăn đúng.',['We are breakfast at six.','We have breakfast at six.','We breakfast has six.'],1,'We have breakfast at six.']
 ],
];
const unit5Lines:{en:string;vi:string}[][]=[
 [{en:'What would you like to eat?',vi:'Bạn muốn ăn gì?'},{en:'I would like some fried tofu, please.',vi:'Mình muốn đậu phụ chiên.'},{en:'Would you like a drink?',vi:'Bạn có muốn uống gì không?'},{en:'A glass of lemonade, please.',vi:'Một ly nước chanh nhé.'}],
 [{en:'We need a kilo of beef.',vi:'Chúng ta cần một ki-lô-gam thịt bò.'},{en:'How much water do we need?',vi:'Chúng ta cần bao nhiêu nước?'},{en:'We need a litre of water.',vi:'Chúng ta cần một lít nước.'},{en:'Please add a teaspoon of salt.',vi:'Hãy thêm một thìa cà phê muối.'}],
 [{en:'Do we have any eggs?',vi:'Chúng ta còn trứng không?'},{en:'Yes, we have some eggs.',vi:'Có, chúng ta còn một ít trứng.'},{en:'How many eggs do we need?',vi:'Chúng ta cần bao nhiêu trứng?'},{en:'We need three eggs.',vi:'Chúng ta cần ba quả trứng.'}],
 [{en:'How much is a bowl of soup?',vi:'Một bát súp giá bao nhiêu?'},{en:'It is twenty thousand dong.',vi:'Giá hai mươi nghìn đồng.'},{en:'What is your favourite drink?',vi:'Đồ uống yêu thích của bạn là gì?'},{en:'I like green tea.',vi:'Mình thích trà xanh.'}],
 [{en:'Have you tried chicken pho?',vi:'Bạn đã thử phở gà chưa?'},{en:'Yes, it is very delicious.',vi:'Rồi, món đó rất ngon.'},{en:'What are the main ingredients?',vi:'Nguyên liệu chính là gì?'},{en:'It has rice noodles and chicken.',vi:'Món có bánh phở và gà.'}],
 [{en:'What time do you have breakfast?',vi:'Bạn ăn sáng lúc mấy giờ?'},{en:'I usually eat at six thirty.',vi:'Mình thường ăn lúc sáu giờ rưỡi.'},{en:'What do you eat for lunch?',vi:'Bạn ăn trưa món gì?'},{en:'I have rice, vegetables and fish.',vi:'Mình ăn cơm, rau và cá.'}],
 [{en:'Do we have any milk?',vi:'Chúng ta còn sữa không?'},{en:'No, we do not have any milk.',vi:'Không, chúng ta hết sữa rồi.'},{en:'How many oranges do we need?',vi:'Chúng ta cần bao nhiêu quả cam?'},{en:'We need four oranges.',vi:'Chúng ta cần bốn quả cam.'}],
 [{en:'Welcome to my food poster!',vi:'Chào mừng đến với áp phích ẩm thực của mình!'},{en:'People eat noodles for breakfast.',vi:'Mọi người ăn phở vào bữa sáng.'},{en:'They often have rice for lunch.',vi:'Họ thường ăn cơm vào bữa trưa.'},{en:'Thank you for listening!',vi:'Cảm ơn đã lắng nghe!'}],
];
export function sectionsForUnit(unit:UnitNo):JourneySection[]{
 const base=journeyMissions.find(m=>m.unit===unit)!;
 return sectionNames.map((name,i)=>{
  const index=i as SectionIndex;
  const videoId=verifiedPlaylistVideos[unit][i];
  const source=videoId===null?'unavailable':(unit===5&&i===0?'supplementary':'playlist');
  const specific=unit===5||i===0;
  const quiz=unit===5?unit5Rows[i].map(([prompt,options,answer,why],k)=>({id:'u5-'+i+'-'+k,skill:skills[k],prompt,options,answer,why})):base.quiz.map(q=>({...q,id:base.id+'-'+i+'-'+q.id}));
  return {id:'u'+unit+'-s'+i,unit,index,name,focus:sectionFocusByUnit[unit][i],page:sectionPageByUnit[unit]?.[i],videoId,source,quiz,lines:unit===5?unit5Lines[i]:base.lines,specific};
 });
}
export function sectionKey(unit:UnitNo,index:SectionIndex):string{return 'u'+unit+'-s'+index;}
