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
        "teacher": "Người dạy hỏi: 'Em thích nghe nhạc, vẽ hay chụp ảnh?'. Cho em chỉ biểu tượng 🎹 🎨 📷. Nói mẫu 'I like music.' rồi hỏi 'What do you like?'. Chỉ sửa 1 lỗi quan trọng, không ngắt lời liên tục.",
        "student": "Chỉ tranh phù hợp và trả lời ít nhất một câu đầy đủ.",
        "check": "Em nói được 'I like ...' mà không cần đọc lại lời giáo viên."
      },
      {
        "minutes": 8,
        "phase": "Nghe/đọc hiểu",
        "teacher": "Chỉ trang 40: 'Nhìn hai bạn Trang và Nick. Em đoán họ đang bàn điều gì?'. Cho em nghe bài chính thức nếu gia đình có bản audio; nếu không, đọc diễn cảm 2 lượt từ PDF cá nhân. Lượt 1 hỏi ý chính; lượt 2 yêu cầu gạch chân các hoạt động nghệ thuật được nhắc đến.",
        "student": "Nêu chủ đề chung; nhận ra nhạc, hội họa và chụp ảnh; giải thích bằng tiếng Việt trước.",
        "check": "Trả lời được: câu chuyện nói về âm nhạc và nghệ thuật."
      },
      {
        "minutes": 10,
        "phase": "Học từ vựng có ngữ cảnh",
        "teacher": "Chuyển sang trang 41: 'Hãy tìm nhóm từ liên quan nghệ thuật.' Minh họa art gallery bằng phòng tranh; paintbrush bằng cọ; taking photos bằng động tác chụp ảnh. Người dạy đọc mẫu một lần rồi em tự nói 2 câu mới với từ vừa học.",
        "student": "Đặt 2 câu, chẳng hạn 'I take photos.' và 'She paints pictures.'",
        "check": "Nhận diện đúng ít nhất 4 trong 6 từ, không chỉ đọc chép."
      },
      {
        "minutes": 10,
        "phase": "Luyện cùng",
        "teacher": "Anh/chị đóng vai bạn A: 'Do you prefer music or painting?'. Em đáp 'I prefer ... because ...' (nếu chưa quen because, cho dùng 'I like ...'). Đổi vai. Sau đó cho em làm hoạt động Getting Started tương ứng trên English Quest.",
        "student": "Nói theo cặp và làm các hoạt động luyện tập 1–4 trên web.",
        "check": "Trả lời đầy đủ câu chủ ngữ + động từ + tân ngữ."
      },
      {
        "minutes": 7,
        "phase": "Tự vận dụng",
        "teacher": "Yêu cầu: 'Không nhìn ví dụ, hãy nói 3 câu: một điều em thích, một điều em không thích, một điều em muốn thử.' Đợi tối đa 10 giây rồi mới gợi ý 'I like ... / I don't like ... / I want to ...'.",
        "student": "Tự nói ba câu bằng tiếng Anh.",
        "check": "Ít nhất 2/3 câu rõ nghĩa, không phụ thuộc người nhắc từng từ."
      },
      {
        "minutes": 5,
        "phase": "Kiểm tra ra lớp",
        "teacher": "Kiểm tra nhanh: 'What does art gallery mean?' 'Name an art activity.' 'Tell me one thing you like.' Đánh dấu câu nào em nói độc lập và chốt một điểm cần ôn buổi sau.",
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
        "teacher": "Nhắc lại: 'Hôm trước em học những từ nào về nghệ thuật?'. Cho em chỉ 3 biểu tượng và nói 1 câu 'I like ...'. Tránh đọc đáp án trước.",
        "student": "Nhắc lại 3 từ và tự đặt câu.",
        "check": "Ít nhất 2 từ nhớ độc lập."
      },
      {
        "minutes": 10,
        "phase": "Nhận diện từ: người hay nơi?",
        "teacher": "Chỉ bảng ở trang 42, vẽ PEOPLE / PLACES. Hỏi: 'Composer là người hay nơi?' Nêu lý do. Lần lượt dẫn em tự xếp artist, painter, musician, concert hall, art gallery, puppet theatre; mỗi câu đúng mới mở nghĩa tiếng Việt.",
        "student": "Phân loại từ vào 2 cột; giải thích vì sao một từ là người hay nơi.",
        "check": "Phân loại ít nhất 5/7 mục đúng."
      },
      {
        "minutes": 8,
        "phase": "Ghép động từ với danh từ",
        "teacher": "Viết bảng 4 động từ compose, paint, take, play và 4 cụm music, a portrait, a photo, the guitar. Hỏi em ghép tự nhiên, rồi nói rõ 'take a photo' không dùng make a photo trong ngữ cảnh này. Cho tự đặt 2 câu.",
        "student": "Ghép 4 cặp và đặt 2 câu với cụm từ.",
        "check": "Nói được 3 cụm từ đúng và tạo 1 câu mới."
      },
      {
        "minutes": 10,
        "phase": "Luyện phát âm /ʃ/ và /ʒ/",
        "teacher": "Đặt tay nhẹ lên cổ, phát âm 'show' (/ʃ/ — không rung) và 'vision' (/ʒ/ — rung). Cho em cảm nhận, nghe lại 4 từ show, share, television, decision rồi phân loại. Chuyển sang bài 4–5 trang 42 và cho em tự đọc một câu mới.",
        "student": "Nghe, phân biệt 4 từ và đọc 2 câu ngắn.",
        "check": "Phân loại đúng ít nhất 3/4 ví dụ trong bài luyện, không chấm âm chính xác tuyệt đối chỉ bằng công cụ nhận diện từ."
      },
      {
        "minutes": 7,
        "phase": "Tự luyện",
        "teacher": "Cất danh sách từ. Hỏi: 'Hãy nói một người trong âm nhạc, một nơi xem nghệ thuật, một hoạt động và đọc một từ có /ʒ/.' Chỉ gợi ý 'Who? Where? Do what?' khi em ngập ngừng.",
        "student": "Viết hoặc nói 3 câu, đọc to một từ chứa /ʒ/.",
        "check": "Tạo ≥2 câu đúng nghĩa, không sao chép nguyên mẫu."
      },
      {
        "minutes": 5,
        "phase": "Kiểm tra ra lớp",
        "teacher": "Chốt 4 mục: 'Is an artist a person or a place?', 'Where is a concert?', 'Which sound is in show?', 'Which sound is in vision?'. Cho em trả lời trong 30–60 giây.",
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
        "teacher": "Đặt hai đồ vật hoặc hai tranh cạnh nhau, hỏi: 'Chúng giống hay khác nhau?'. Anh/chị nói 'This picture is like that picture.' và 'The pictures are different.' rồi để em chọn câu phù hợp.",
        "student": "Nói 1 điểm giống và 1 điểm khác bằng tiếng Việt, sau đó thử bằng tiếng Anh.",
        "check": "Hiểu sự khác nhau giữa giống và khác."
      },
      {
        "minutes": 10,
        "phase": "Làm mẫu like/different from",
        "teacher": "Mở trang 43, đọc quy tắc trong phần Remember. Viết 'A guitar is different from a piano.' và 'This picture is like that one.' Hỏi: 'Giống dùng từ nào? Khác dùng từ nào? Sau different là từ gì?' Cho em tự sửa 'different with'.",
        "student": "Hoàn thành 3 câu điền like / different from; sửa lỗi 'different with'.",
        "check": "Làm đúng ít nhất 2/3 câu."
      },
      {
        "minutes": 10,
        "phase": "Làm mẫu (not) as ... as",
        "teacher": "Viết hai câu ví dụ: 'This bag is as expensive as that bag.' và 'My drawing is not as colourful as yours.' Khoanh 2 chữ as, gạch tính từ ở giữa; để em giải thích khác nhau giữa bằng và không bằng.",
        "student": "Khoanh tính từ; chọn as/as hoặc not as/as theo tình huống.",
        "check": "Viết đúng 'as + adjective + as' trong 2 ví dụ."
      },
      {
        "minutes": 10,
        "phase": "Luyện tập trong sách",
        "teacher": "Đưa bốn bài luyện ngắn từ nội dung so sánh trên trang 43–44: một câu điền like, một câu different from, một câu as ... as, một câu not as ... as. Giải mẫu một câu, sau đó yêu cầu em làm 3 câu còn lại và nêu quy tắc, không chỉ đoán.",
        "student": "Hoàn thành 4 câu luyện và giải thích tại sao chọn cấu trúc.",
        "check": "Đúng ít nhất 3/4 câu, không nhầm as với than."
      },
      {
        "minutes": 5,
        "phase": "Tự vận dụng",
        "teacher": "Cho xem hai bức tranh ở trang 44. Hỏi: 'Can you compare them?'. Không đưa sẵn câu mẫu: em tự tạo một câu giống, một câu khác và một câu không bằng. Nếu cần mới đưa khung 'A is ... B'.",
        "student": "Tự tạo 3 câu: giống, khác, không bằng.",
        "check": "Ít nhất 2/3 câu đúng cấu trúc."
      },
      {
        "minutes": 5,
        "phase": "Kiểm tra ra lớp",
        "teacher": "Kiểm tra bằng 3 câu mới về sở thích hoặc môn học. Hỏi 'Why like instead of different from?' và 'Where does the adjective go in as ... as?'. Yêu cầu ít nhất một câu tự sáng tạo.",
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
export function normalizeFoundationAnswer(value:string):string{return value.toLocaleLowerCase('en-US').trim().replace(/[.!?]+$/g,'').replace(/\s+/g,' ');}
