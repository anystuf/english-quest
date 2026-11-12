/** Teacher-authored plans aligned to Unit 4, Global Success Grade 7, textbook pp. 40–44. No publisher exercises or official audio are reproduced. */
export type TeachingStep={minutes:number;phase:string;teacher:string;student:string;check:string};
export type GuidedTeachingScript={id:string;lessonIndex:number;title:string;page:string;focus:string;objectives:string[];vocabulary:string[];stages:TeachingStep[];misconceptions:string[];homework:string;passCriteria:string};
export const guidedTeachingScripts:GuidedTeachingScript[]=[
  {
    "id": "getting-started",
    "lessonIndex": 0,
    "title": "Getting Started — A Talk at the School Gate",
    "page": "40–41",
    "focus": "Hội thoại Trang–Nick về âm nhạc, hội họa, chụp ảnh, sở thích",
    "objectives": [
      "Xác định chủ đề chính của hội thoại Trang–Nick",
      "Giải thích được ít nhất 4 từ/cụm từ: painting, taking photos, musical instruments, art gallery",
      "Nói 2–3 câu về hoạt động nghệ thuật em thích"
    ],
    "vocabulary": [
      "classical music — nhạc cổ điển",
      "painting — vẽ tranh / bức tranh",
      "take photos — chụp ảnh",
      "musical instruments — nhạc cụ",
      "art gallery — phòng trưng bày tranh",
      "paintbrush — cọ vẽ"
    ],
    "stages": [
      {
        "minutes": 5,
        "phase": "Khởi động",
        "teacher": "Hỏi: 'Do you like music?' và 'Do you like painting?' Cho em chọn tranh/biểu tượng 🎹 🎨 📷. Chấp nhận em trả lời ngắn, rồi làm mẫu 'I like music.'",
        "student": "Chỉ tranh phù hợp và trả lời ít nhất một câu đầy đủ.",
        "check": "Em nói được 'I like ...' mà không cần đọc lại lời giáo viên."
      },
      {
        "minutes": 8,
        "phase": "Nghe/đọc hiểu",
        "teacher": "Mở SGK trang 40 và chỉ hội thoại Trang–Nick; cho em dự đoán hai bạn đang nói về chủ đề gì. Em đọc lượt 1 để xác định ý chính; lượt 2 khoanh những hoạt động Nick và Trang nhắc tới. Nếu không có audio chính thức, người dạy đọc chậm theo sách; đừng gọi TTS của ứng dụng là audio SGK.",
        "student": "Nêu chủ đề chung; nhận ra nhạc, hội họa và chụp ảnh; giải thích bằng tiếng Việt trước.",
        "check": "Trả lời được: câu chuyện nói về âm nhạc và nghệ thuật."
      },
      {
        "minutes": 10,
        "phase": "Học từ vựng có ngữ cảnh",
        "teacher": "Dẫn vào các nhiệm vụ 2–4 ở trang 41: phân biệt chủ đề chính, hoàn thành từ/cụm từ, nhận diện đồ vật/tranh. Với mỗi từ: cho xem ảnh → hỏi nghĩa → đọc từ → đặt một câu mới.",
        "student": "Đặt 2 câu, chẳng hạn 'I take photos.' và 'She paints pictures.'",
        "check": "Nhận diện đúng ít nhất 4 trong 6 từ, không chỉ đọc chép."
      },
      {
        "minutes": 10,
        "phase": "Luyện cùng",
        "teacher": "Hỏi luân phiên 'What do you like?' và 'Do you like music or art?'. Làm mẫu cách trả lời rồi giảm gợi ý. Chuyển sang bài luyện trực tiếp của Getting Started trong English Quest.",
        "student": "Nói theo cặp và làm các hoạt động luyện tập 1–4 trên web.",
        "check": "Trả lời đầy đủ câu chủ ngữ + động từ + tân ngữ."
      },
      {
        "minutes": 7,
        "phase": "Tự vận dụng",
        "teacher": "Dựa vào bài khảo sát sở thích ở trang 41, yêu cầu em tạo ba câu KHÔNG nhìn mẫu: 1 điều thích, 1 điều không thích, 1 điều muốn thử.",
        "student": "Tự nói ba câu bằng tiếng Anh.",
        "check": "Ít nhất 2/3 câu rõ nghĩa, không phụ thuộc người nhắc từng từ."
      },
      {
        "minutes": 5,
        "phase": "Kiểm tra ra lớp",
        "teacher": "Hỏi từ mới qua tranh và yêu cầu một câu mới về sở thích nghệ thuật. Ghi lại một lỗi cần cải thiện ngày mai.",
        "student": "Nói 1 câu mới và giải thích 2 từ đã học.",
        "check": "Nhớ 2 từ và tự tạo câu mới."
      }
    ],
    "misconceptions": [
      "'Like' dùng như động từ thường: I like music, không phải I am like music.",
      "'Take photos' là cụm từ, không dịch từng từ máy móc.",
      "Nếu em chưa hiểu hội thoại, cho đọc ý chính trước khi phân tích từng câu."
    ],
    "homework": "Ghi âm 30–45 giây: My favourite art activity; dùng ít nhất 3 từ đã học.",
    "passCriteria": "Hiểu ý chính hội thoại, nhận diện ≥4/6 từ và tự nói ≥2 câu sở thích."
  },
  {
    "id": "closer-look-1",
    "lessonIndex": 1,
    "title": "A Closer Look 1 — Vocabulary & Pronunciation",
    "page": "42",
    "focus": "People/places, verb–noun collocations, /ʃ/ và /ʒ/",
    "objectives": [
      "Phân biệt tên người và địa điểm gắn với nghệ thuật",
      "Dùng đúng 3 cụm từ như compose music, paint a portrait, play the guitar",
      "Nhận biết sự khác nhau giữa /ʃ/ và /ʒ/ qua các từ quen thuộc"
    ],
    "vocabulary": [
      "composer — nhà soạn nhạc",
      "musician — nhạc công",
      "artist — nghệ sĩ",
      "painter — họa sĩ",
      "concert hall — phòng hòa nhạc",
      "art gallery — phòng tranh",
      "/ʃ/ — show, musician, share",
      "/ʒ/ — vision, television, decision"
    ],
    "stages": [
      {
        "minutes": 5,
        "phase": "Ôn đầu giờ",
        "teacher": "Cho xem tranh và hỏi 3 từ hôm trước. Yêu cầu em nói 'I like ...' một lần trước khi cho xem gợi ý.",
        "student": "Nhắc lại 3 từ và tự đặt câu.",
        "check": "Ít nhất 2 từ nhớ độc lập."
      },
      {
        "minutes": 10,
        "phase": "Nhận diện từ: người hay nơi?",
        "teacher": "Mở SGK trang 42, hoạt động 1. Vẽ 2 cột PEOPLE/PLACES. Nói nghĩa trước, cho em phân loại composer, painter, artist, musician, concert hall, art gallery, puppet theatre.",
        "student": "Phân loại từ vào 2 cột; giải thích vì sao một từ là người hay nơi.",
        "check": "Phân loại ít nhất 5/7 mục đúng."
      },
      {
        "minutes": 8,
        "phase": "Ghép động từ với danh từ",
        "teacher": "Dựa vào hoạt động 2–3 của SGK; làm mẫu 'compose music', 'paint a portrait', 'take a photo', 'play the guitar'. So sánh với tiếng Việt và nêu lỗi ghép sai thường gặp.",
        "student": "Ghép 4 cặp và đặt 2 câu với cụm từ.",
        "check": "Nói được 3 cụm từ đúng và tạo 1 câu mới."
      },
      {
        "minutes": 10,
        "phase": "Luyện phát âm /ʃ/ và /ʒ/",
        "teacher": "Dựa vào hoạt động 4–5 của SGK. Phát âm chậm cặp 'show' / 'vision'; với /ʃ/ không rung cổ, với /ʒ/ có rung. Cho nghe/nhắc lại 'musician', 'television', 'decision', 'share', rồi chọn nhóm âm.",
        "student": "Nghe, phân biệt 4 từ và đọc 2 câu ngắn.",
        "check": "Phân loại đúng ít nhất 3/4 ví dụ trong bài luyện, không chấm âm chính xác tuyệt đối chỉ bằng công cụ nhận diện từ."
      },
      {
        "minutes": 7,
        "phase": "Tự luyện",
        "teacher": "Tắt mẫu, yêu cầu dùng một từ chỉ người, một từ chỉ địa điểm, một collocation và một từ chứa /ʒ/ trong câu/cụm từ mới.",
        "student": "Viết hoặc nói 3 câu, đọc to một từ chứa /ʒ/.",
        "check": "Tạo ≥2 câu đúng nghĩa, không sao chép nguyên mẫu."
      },
      {
        "minutes": 5,
        "phase": "Kiểm tra ra lớp",
        "teacher": "Đọc một từ thuộc người/địa điểm và hai từ phân biệt âm; yêu cầu em trả lời ngay.",
        "student": "Phân nhóm người/nơi và /ʃ/ hay /ʒ/.",
        "check": "Đúng ít nhất 3/4 mục."
      }
    ],
    "misconceptions": [
      "Composer là người soạn nhạc; concert hall là địa điểm.",
      "Phân biệt collocation: take a photo (không phải make a photo).",
      "/ʒ/ hữu thanh ở giữa 'vision'; /ʃ/ vô thanh trong 'show'. Browser speech recognition chỉ phản ánh nhận dạng từ."
    ],
    "homework": "Vẽ bảng 2 cột PEOPLE/PLACES, viết 5 từ và ghi âm 4 từ thuộc /ʃ/ hoặc /ʒ/.",
    "passCriteria": "Phân loại ≥5/7 người/nơi, dùng 3 collocation và phân biệt ≥3/4 âm."
  },
  {
    "id": "closer-look-2",
    "lessonIndex": 2,
    "title": "A Closer Look 2 — Comparisons",
    "page": "43–44",
    "focus": "like, different from, (not) as ... as",
    "objectives": [
      "Dùng 'like' và 'different from' cho giống/khác",
      "Dùng '(not) as + adjective + as' đúng thứ tự",
      "Tự viết 3 câu so sánh về âm nhạc, môn học hoặc tranh ảnh"
    ],
    "vocabulary": [
      "A is like B — A giống B",
      "A is different from B — A khác B",
      "A is as + adjective + as B — A cũng ... như B",
      "A is not as + adjective + as B — A không ... bằng B",
      "expensive — đắt",
      "interesting — thú vị",
      "modern — hiện đại"
    ],
    "stages": [
      {
        "minutes": 5,
        "phase": "Khởi động bằng so sánh",
        "teacher": "Đặt 2 đồ vật có điểm giống/khác nhau cạnh nhau. Hỏi em 'Same or different?' rồi chuyển sang 'like' và 'different from'.",
        "student": "Nói 1 điểm giống và 1 điểm khác bằng tiếng Việt, sau đó thử bằng tiếng Anh.",
        "check": "Hiểu sự khác nhau giữa giống và khác."
      },
      {
        "minutes": 10,
        "phase": "Làm mẫu like/different from",
        "teacher": "Mở SGK trang 43, nhắc bảng ngữ pháp. Viết: 'This picture is like that picture.'; 'A guitar is different from a piano.' Hỏi nhận xét về nghĩa và vị trí 'from'.",
        "student": "Hoàn thành 3 câu điền like / different from; sửa lỗi 'different with'.",
        "check": "Làm đúng ít nhất 2/3 câu."
      },
      {
        "minutes": 10,
        "phase": "Làm mẫu (not) as ... as",
        "teacher": "Dùng 2 đồ vật giá tương tự và 2 vật không bằng nhau. Viết 'This bag is as expensive as that one.' và 'My drawing is not as colourful as yours.' Chỉ rõ adjective đứng giữa 2 chữ as.",
        "student": "Khoanh tính từ; chọn as/as hoặc not as/as theo tình huống.",
        "check": "Viết đúng 'as + adjective + as' trong 2 ví dụ."
      },
      {
        "minutes": 10,
        "phase": "Luyện tập trong sách",
        "teacher": "Dựa theo hoạt động 1–4 ở trang 43–44: điền cấu trúc, hoàn thiện câu, so sánh History/Science, viết lại câu phủ định tương đương. Giải 1 câu mẫu và để em tự làm các câu còn lại.",
        "student": "Hoàn thành 4 câu luyện và giải thích tại sao chọn cấu trúc.",
        "check": "Đúng ít nhất 3/4 câu, không nhầm as với than."
      },
      {
        "minutes": 5,
        "phase": "Tự vận dụng",
        "teacher": "Từ hoạt động so sánh hai tranh trang 44, yêu cầu em tự so sánh hai bức tranh, hai sở thích hoặc hai môn học.",
        "student": "Tự tạo 3 câu: giống, khác, không bằng.",
        "check": "Ít nhất 2/3 câu đúng cấu trúc."
      },
      {
        "minutes": 5,
        "phase": "Kiểm tra ra lớp",
        "teacher": "Đưa 3 câu mới; em chọn đúng like / different from / not as ... as và giải thích ngắn bằng tiếng Việt.",
        "student": "Điền 3 đáp án, nêu lý do.",
        "check": "Đúng ≥2/3 và đặt được một câu mới."
      }
    ],
    "misconceptions": [
      "Không nói 'different with' trong cấu trúc này; dùng different from.",
      "Không nói 'as beautiful than'; dùng as beautiful as.",
      "'Like' ở bài này là giới từ so sánh, khác 'like music' là động từ chỉ sở thích."
    ],
    "homework": "So sánh 2 môn học và 2 hoạt động nghệ thuật bằng 4 câu: like, different from, as ... as, not as ... as.",
    "passCriteria": "Dùng đúng ≥3/4 cấu trúc trong bài mới và tự nói được ≥2 câu."
  }
];
export const foundationCheckpoint=[
  {id:'f1',question:'My sister ___ music. (like / likes / is)',answer:'likes',hint:'My sister = she. In present simple, she/he/it + verb-s.',why:'My sister likes music.'},
  {id:'f2',question:'Rearrange: artist / an / is / She',answer:'she is an artist',hint:'Start with She; to be comes second.',why:'She + is + an artist.'},
  {id:'f3',question:'Correct: I am like music.',answer:'i like music',hint:'To express a hobby, like is the main verb. Remove am.',why:'I like music.'},
  {id:'f4',question:'Rearrange: the / plays / Nick / piano',answer:'nick plays the piano',hint:'Nick is the subject; plays is the main verb.',why:'Nick plays the piano.'},
  {id:'f5',question:'My friends ___ students. (am / is / are)',answer:'are',hint:'My friends = they. Which form of be belongs to they?',why:'My friends are students.'},
] as const;
export function normalizeFoundationAnswer(value:string):string{return value.toLocaleLowerCase('en-US').trim().replace(/[.!?]+$/g,'').replace(/\\s+/g,' ');}
