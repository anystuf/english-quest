import {unit} from './unit4-full';
export type WordTarget={word:string;meaning:string;lesson:number;spoken:string;ipa?:string;tipEn:string;tipVi:string};
const details:Record<string,{ipa?:string;spoken?:string;tipEn?:string;tipVi?:string}>={
 'art gallery':{ipa:'/ɑrt ˈɡæləri/',tipEn:'Stress GAL in gallery. Say ART GAL-luh-ree.',tipVi:'Nhấn âm GAL trong gallery; tách từ chậm rồi nối lại.'},
 'musical instrument':{ipa:'/ˈmjuːzɪkəl ˈɪnstrəmənt/',tipEn:'Listen for the first stressed syllable in both words.',tipVi:'Chú ý trọng âm đầu của musical và instrument.'},
 'landscape':{ipa:'/ˈlændskeɪp/',tipEn:'Begin with the clear /l/ sound and stress LAND.',tipVi:'Đầu lưỡi chạm phía sau răng trên khi phát /l/; nhấn LAND.'},
 'prefer':{ipa:'/prɪˈfɝː/',tipEn:'Stress the second syllable: pre-FER.',tipVi:'Nhấn âm tiết thứ hai, kéo âm /ɝ/.'},
 'portrait':{ipa:'/ˈpɔrtrət/',tipEn:'Stress the first syllable. Avoid adding a vowel at the end.',tipVi:'Nhấn âm tiết đầu; không thêm nguyên âm cuối.'},
 'exhibition':{ipa:'/ˌɛksəˈbɪʃən/',tipEn:'Stress BI; the sh sound /ʃ/ appears near the end.',tipVi:'Nhấn âm BI, chú ý âm /ʃ/ gần cuối từ.'},
 'perform':{ipa:'/pərˈfɔrm/',tipEn:'Stress FORM, not PER.',tipVi:'Nhấn âm FORM thay vì PER.'},
 'sculpture':{ipa:'/ˈskʌlptʃər/',tipEn:'Combine /sk/ smoothly; finish with the /tʃ/ sound.',tipVi:'Nối /s/ và /k/; giữa từ có âm /tʃ/ như ch.'},
 'musician':{ipa:'/mjuˈzɪʃən/',tipEn:'Stress the second syllable and practice /ʃ/ at the end.',tipVi:'Nhấn âm thứ hai, luyện âm /ʃ/ trước -ən.'},
 'composer':{ipa:'/kəmˈpoʊzər/',tipEn:'Stress PO; say /z/ with vocal-cord vibration.',tipVi:'Nhấn PO và rung dây thanh khi phát /z/.'},
 'concert hall':{ipa:'/ˈkɑnsərt hɔl/',tipEn:'Stress CON in concert; make the /h/ in hall audible.',tipVi:'Nhấn CON ở concert, bật hơi /h/ trong hall.'},
 'puppet theatre':{ipa:'/ˈpʌpɪt ˈθiətər/',tipEn:'Say /θ/ with your tongue gently between your teeth.',tipVi:'Đặt đầu lưỡi nhẹ giữa hai răng khi phát /θ/.'},
 'actress':{ipa:'/ˈæktrəs/',tipEn:'Stress AC; do not drop the /tr/ consonant group.',tipVi:'Nhấn AC, chú ý cụm phụ âm /tr/.'},
 'like':{ipa:'/laɪk/',tipEn:'End with a clear /k/, without an extra vowel.',tipVi:'Kết thúc bằng âm /k/, không thêm âm ơ.'},
 'different from':{ipa:'/ˈdɪfərənt frəm/',tipEn:'Stress DIF and connect naturally into FROM.',tipVi:'Nhấn DIF và nối âm tự nhiên với from.'},
 'as ... as':{spoken:'as colorful as',ipa:'/əz ˈkʌlərfəl əz/',tipEn:'Read the complete example “as colorful as”. The weak /əz/ is short.',tipVi:'Đọc ví dụ “as colorful as”; hai từ as đọc nhẹ.'},
 'not as ... as':{spoken:'not as loud as',ipa:'/nɑt əz laʊd əz/',tipEn:'Read the complete phrase “not as loud as”.',tipVi:'Đọc cả cụm “not as loud as” để luyện nối âm.'},
 'because':{ipa:'/bɪˈkɔz/',tipEn:'Stress CAUSE, the second syllable.',tipVi:'Nhấn âm tiết thứ hai, CAUSE.'},
 'in my opinion':{ipa:'/ɪn maɪ əˈpɪnjən/',tipEn:'Stress PIN in opinion.',tipVi:'Nhấn PIN trong từ opinion.'},
 'water puppetry':{ipa:'/ˈwɔtər ˈpʌpɪtri/',tipEn:'Stress WA in water and PUP in puppetry.',tipVi:'Nhấn WA ở water và PUP ở puppetry.'},
 'performance':{ipa:'/pərˈfɔrməns/',tipEn:'Stress FORM in performance.',tipVi:'Nhấn FORM ở performance.'},
 'audience':{ipa:'/ˈɔdiəns/',tipEn:'Stress AU; say the vowel smoothly.',tipVi:'Nhấn AU và nối các âm liền mạch.'},
 'street painting':{ipa:'/strit ˈpeɪntɪŋ/',tipEn:'Make the initial consonant group /str/ clear.',tipVi:'Chú ý cụm /str/ ở đầu street.'},
 'invitation':{ipa:'/ˌɪnvɪˈteɪʃən/',tipEn:'Stress TAY, finish with /ʃən/.',tipVi:'Nhấn TAY và kết thúc bằng /ʃən/.'},
 'event':{ipa:'/ɪˈvɛnt/',tipEn:'Stress the second syllable: VENT.',tipVi:'Nhấn âm tiết VENT.'},
 'poster':{ipa:'/ˈpoʊstər/',tipEn:'Stress PO and end in a gentle /ər/.',tipVi:'Nhấn PO và đọc nhẹ âm /ər/ cuối.'},
 'creative':{ipa:'/kriˈeɪtɪv/',tipEn:'Stress AY, the second syllable.',tipVi:'Nhấn AY ở âm tiết thứ hai.'},
 'review':{ipa:'/rɪˈvju/',tipEn:'Stress VIEW, not RE.',tipVi:'Nhấn VIEW thay vì RE.'}
};
const unique=new Set<string>();
export const pronunciationTargets:WordTarget[]=unit.flatMap((lesson,index)=>lesson.terms.flatMap(([word,meaning])=>{
 if(unique.has(word))return [];
 unique.add(word);
 const detail=details[word]??{};
 return [{word,meaning,lesson:index,spoken:detail.spoken??word,ipa:detail.ipa,tipEn:detail.tipEn??'Listen first, say the word slowly, then repeat at natural speed.',tipVi:detail.tipVi??'Nghe mẫu, đọc chậm từng âm rồi đọc ở tốc độ tự nhiên.'}];
}));
