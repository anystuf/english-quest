export type JourneyQuiz={id:string;skill:'meaning'|'use'|'grammar'|'sentence';prompt:string;options:[string,string,string];answer:0|1|2;why:string};
export type JourneyMission={id:string;unit:1|2|3|4|5;topic:string;vi:string;target:string;description:string;quiz:JourneyQuiz[];lines:{en:string;vi:string}[]};
export const PLAYLIST_ID='PLrf9nvyFUs3Q5BjjrZW_KsFE0L4BY_4i0';
export const START_VIDEO_ID='wH3IDKbP9Yg';
/** Verified individual Ms Kathy Grade 7 Global Success Getting Started lessons. Do not reuse a video from another Unit. */
export const lessonVideos={
  1:{id:'wH3IDKbP9Yg',title:'Unit 1 – Hobbies · Getting Started'},
  2:{id:'nytLSrBNVQk',title:'Unit 2 – Healthy Living · Getting Started'},
  3:{id:'IXEQKclDDcs',title:'Unit 3 – Community Service · Getting Started'},
  4:{id:'R4l5mvN49zo',title:'Unit 4 – Music and Arts · Getting Started'},
  5:{id:'zUl8CAI2BtI',title:'Unit 5 – Food and Drink · Getting Started'},
} as const;

export const journeyMissions:JourneyMission[]=[
 {id:'u5-food',unit:5,topic:'Food and Drink',vi:'Đồ ăn & thức uống',target:'Getting Started · trang 50–51',description:'Học tên món ăn, gọi món lịch sự và hỏi bạn thích đồ uống nào.',quiz:[
  {id:'m',skill:'meaning',prompt:'“Spring rolls” có nghĩa là gì?',options:['Nước ép','Nem rán / chả giò','Canh'],answer:1,why:'Spring rolls là nem rán hoặc chả giò.'},
  {id:'u',skill:'use',prompt:'Chọn cách gọi nước ép lịch sự.',options:['I would like some juice, please.','I juice please now.','A juice is I.'],answer:0,why:'I would like ... , please là mẫu gọi món lịch sự.'},
  {id:'g',skill:'grammar',prompt:'There ___ some rice on the plate.',options:['are','am','is'],answer:2,why:'Rice là danh từ không đếm được, dùng is.'},
  {id:'s',skill:'sentence',prompt:'Chọn câu đúng về sở thích.',options:['She like fish.','She likes fish.','She is like fish.'],answer:1,why:'Với she/he/it trong hiện tại đơn, thêm -s cho động từ like.'}
 ],lines:[{en:'What would you like to eat?',vi:'Bạn muốn ăn gì?'},{en:'I would like some rice and chicken, please.',vi:'Mình muốn cơm và gà, nhé.'},{en:'What would you like to drink?',vi:'Bạn muốn uống gì?'},{en:'A glass of lemonade, please.',vi:'Một ly nước chanh nhé.'}]},
 {id:'u4-arts',unit:4,topic:'Music and Arts',vi:'Âm nhạc và nghệ thuật',target:'Ôn Unit 4 · trang 40–44',description:'Ôn sở thích và các câu so sánh đơn giản.',quiz:[
  {id:'m',skill:'meaning',prompt:'“Art gallery” là gì?',options:['Thư viện','Phòng tranh','Nhà bếp'],answer:1,why:'Art gallery là nơi trưng bày nghệ thuật.'},
  {id:'u',skill:'use',prompt:'Chọn câu nói em thích vẽ.',options:['I like painting.','I am like painting.','I painting likes.'],answer:0,why:'Like + V-ing diễn tả sở thích.'},
  {id:'g',skill:'grammar',prompt:'A guitar is different ___ a piano.',options:['with','from','as'],answer:1,why:'Cấu trúc là different from.'},
  {id:'s',skill:'sentence',prompt:'Chọn câu so sánh đúng.',options:['This is as nice than that.','This as nice is that.','This is as nice as that.'],answer:2,why:'Cấu trúc as + adjective + as.'}
 ],lines:[{en:'Do you like music?',vi:'Bạn có thích âm nhạc không?'},{en:'Yes, I like classical music.',vi:'Có, mình thích nhạc cổ điển.'},{en:'Do you like painting, too?',vi:'Bạn cũng thích vẽ chứ?'},{en:'I like painting, but I prefer music.',vi:'Mình thích vẽ, nhưng thích âm nhạc hơn.'}]},
 {id:'u3-service',unit:3,topic:'Community Service',vi:'Hoạt động cộng đồng',target:'Ôn Unit 3',description:'Ôn từ vựng tình nguyện và câu hiện tại đơn.',quiz:[
  {id:'m',skill:'meaning',prompt:'“Volunteer” nghĩa là gì?',options:['Tình nguyện viên','Nhạc sĩ','Đầu bếp'],answer:0,why:'Volunteer là tình nguyện viên hoặc làm tình nguyện.'},
  {id:'u',skill:'use',prompt:'Chọn câu nói về hoạt động giúp đỡ.',options:['We food collect.','We collect old books.','We collecting is.'],answer:1,why:'We + collect + object.'},
  {id:'g',skill:'grammar',prompt:'She ___ the park every week.',options:['cleans','clean','cleaning'],answer:0,why:'She + V-s trong hiện tại đơn.'},
  {id:'s',skill:'sentence',prompt:'Chọn câu phủ định đúng.',options:['He not help.','He does not helps.','He does not help.'],answer:2,why:'Sau does not dùng động từ nguyên mẫu.'}
 ],lines:[{en:'What do you do on Sundays?',vi:'Bạn làm gì vào Chủ nhật?'},{en:'I help clean the park.',vi:'Mình giúp dọn công viên.'},{en:'Can I join you?',vi:'Mình tham gia cùng được không?'},{en:'Yes, we can work together.',vi:'Được, chúng mình cùng làm nhé.'}]},
 {id:'u2-health',unit:2,topic:'Healthy Living',vi:'Sống khỏe',target:'Ôn Unit 2',description:'Ôn thói quen tốt và cách đưa lời khuyên đơn giản.',quiz:[
  {id:'m',skill:'meaning',prompt:'“Healthy” nghĩa là gì?',options:['Vội vàng','Khỏe mạnh','Buồn ngủ'],answer:1,why:'Healthy nghĩa là khỏe mạnh.'},
  {id:'u',skill:'use',prompt:'Chọn lời khuyên phù hợp.',options:['You should drink water.','You should to drinks.','You drinking should.'],answer:0,why:'Should + động từ nguyên mẫu.'},
  {id:'g',skill:'grammar',prompt:'He ___ up early every day.',options:['get','gets','getting'],answer:1,why:'He + gets.'},
  {id:'s',skill:'sentence',prompt:'Chọn câu đúng.',options:['We should eats vegetables.','We should to eat vegetables.','We should eat vegetables.'],answer:2,why:'Sau should dùng động từ nguyên mẫu.'}
 ],lines:[{en:'Are you feeling well today?',vi:'Hôm nay bạn thấy khỏe chứ?'},{en:'I am a little tired.',vi:'Mình hơi mệt.'},{en:'You should get some rest.',vi:'Bạn nên nghỉ ngơi một chút.'},{en:'Thank you. I will rest.',vi:'Cảm ơn, mình sẽ nghỉ.'}]},
 {id:'u1-hobbies',unit:1,topic:'Hobbies',vi:'Sở thích',target:'Ôn Unit 1',description:'Ôn cách nói sở thích và thói quen.',quiz:[
  {id:'m',skill:'meaning',prompt:'“Hobby” nghĩa là gì?',options:['Sở thích','Bài kiểm tra','Thức ăn'],answer:0,why:'Hobby nghĩa là sở thích.'},
  {id:'u',skill:'use',prompt:'Chọn câu nói em thích đọc.',options:['I like read books.','I like reading books.','I likes reading books.'],answer:1,why:'Like + V-ing là cấu trúc tự nhiên để nói về hoạt động yêu thích.'},
  {id:'g',skill:'grammar',prompt:'My brother ___ stamps.',options:['collects','collect','collecting'],answer:0,why:'My brother = he, dùng collects.'},
  {id:'s',skill:'sentence',prompt:'Chọn câu đúng.',options:['She don’t play chess.','She doesn’t plays chess.','She doesn’t play chess.'],answer:2,why:'Sau doesn’t dùng động từ nguyên mẫu.'}
 ],lines:[{en:'What is your favourite hobby?',vi:'Sở thích yêu thích của bạn là gì?'},{en:'I enjoy reading books.',vi:'Mình thích đọc sách.'},{en:'How often do you read?',vi:'Bạn đọc sách thường xuyên thế nào?'},{en:'I read every evening.',vi:'Mình đọc mỗi tối.'}]},
];
export const missionById=(id:string)=>journeyMissions.find(m=>m.id===id);
export const normalizeJourney=(s:string)=>s.toLowerCase().normalize('NFKC').replace(/[’']/g,'').replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
export const REVIEW_DELAY_DAYS=[1,3,7] as const;
export function recommendedReview(scores:Record<string,number>,unit5Id='u5-food'){const weak=journeyMissions.filter(m=>m.id!==unit5Id&&scores[m.id]!==undefined&&scores[m.id]<3);return weak[0]?.id??unit5Id;}

/** Deterministic on-device tutoring. No network request, storage, or AI generation. */
export function localTutorReply(question:string,unit:1|2|3|4|5):string {
 const input=question.trim().slice(0,250);
 if(!input)return 'Em hãy hỏi một câu ngắn về từ vựng, cấu trúc câu hoặc phát âm nhé.';
 if(/(?:https?:\/\/|www\.|@|\b\d{7,}\b|địa chỉ nhà|số điện thoại|mật khẩu|password)/i.test(input))return 'Đừng chia sẻ thông tin riêng tư. Mình chỉ hỗ trợ bài tiếng Anh. Em có thể hỏi: “Cách dùng how many?”';
 const v=input.toLocaleLowerCase('vi-VN');
 if(/(phát âm|pronoun|đọc từ|speak|nhại|shadow)/i.test(v))return 'Cách luyện: ① Nghe mẫu chậm. ② Chia câu thành hai nhóm từ. ③ Nhại ngay sau mẫu. ④ Đọc lại ở tốc độ tự nhiên. Điểm nhận dạng không phải điểm phát âm chuẩn.';
 if(/(how much|how many|bao nhiêu)/i.test(v))return 'How many + danh từ đếm được số nhiều (How many eggs?). How much + danh từ không đếm được (How much rice?). Thử đặt một câu hỏi về món ăn của em.';
 if(/(some|any|một ít|lượng từ)/i.test(v))return 'Some thường dùng trong câu khẳng định: I have some rice. Any thường dùng trong câu hỏi và phủ định: Do you have any milk? Hãy thử thay rice bằng soup.';
 if(/(like|sở thích|present simple|hiện tại đơn)/i.test(v))return 'I like music, nhưng She likes music. Trong hiện tại đơn, he/she/it thường thêm -s/-es ở động từ. Thử viết một câu về người thân.';
 if(/(different|as\.?.*as|so sánh)/i.test(v))return 'So sánh: A is different from B (A khác B). A is as nice as B (đẹp như nhau). Hãy chọn hai đồ vật và thử nói một điểm khác.';
 if(unit===5)return 'Bài Food and Drink: Hãy chọn một món và nói “I would like some rice, please.”. Em chưa biết từ nào? Hỏi mình tên món hoặc cách đặt câu nhé.';
 if(unit===4)return 'Bài Music and Arts: Dùng “I like painting” để nói sở thích. Em có thể hỏi về /ʃ/, /ʒ/ hoặc “different from”.';
 if(unit===3)return 'Bài Community Service: Nói “I help clean the park.”. Hãy thử đổi chủ ngữ từ I sang She.';
 if(unit===2)return 'Bài Healthy Living: Đưa lời khuyên bằng “You should drink water.”. Sau should, dùng động từ nguyên mẫu.';
 return 'Bài Hobbies: Em có thể nói “I like reading books.”. Hãy thử hỏi “What do you like doing?”';
}
