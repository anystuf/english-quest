export type Localized={en:string;vi:string};
export type ActivityKind='choice'|'fill'|'write'|'listen';
export type TextbookActivity={id:string;exercise:string;source:Localized;title:Localized;kind:ActivityKind;prompt:Localized;options?:Localized[];correct?:number;accepted?:string[];sample?:Localized;explanation?:Localized;audio?:string;context?:Localized;note?:Localized};
export type TextbookLesson={lesson:string;page:string;url:string;goal:Localized;tasks:TextbookActivity[]};
export const textbookPaths:TextbookLesson[]=[
  {
    "lesson": "Getting Started",
    "page": "40–41",
    "url": "https://sachgiaokhoa.online/lop-7-10/global-success-bo-giao-duc-dao-tao-11/unit-4-music-and-arts-2011/getting-started-6681.html",
    "goal": {
      "en": "Understand the opening dialogue, identify art vocabulary, and express interests.",
      "vi": "Hiểu hội thoại mở đầu, nhận diện từ nghệ thuật và bày tỏ sở thích."
    },
    "tasks": [
      {
        "id": "u4-gs-1",
        "exercise": "1",
        "source": {
          "en": "Listen and read the Trang–Nick dialogue in the printed textbook.",
          "vi": "Nghe và đọc hội thoại Trang–Nick trong SGK giấy."
        },
        "title": {
          "en": "Listen and identify an art preference",
          "vi": "Nghe và nhận diện sở thích"
        },
        "kind": "listen",
        "prompt": {
          "en": "Why does Maya prefer painting in the original mini-dialogue?",
          "vi": "Vì sao Maya thích vẽ hơn trong hội thoại tự biên soạn?"
        },
        "options": [
          {
            "en": "It helps her relax.",
            "vi": "Giúp bạn ấy thư giãn."
          },
          {
            "en": "She dislikes colors.",
            "vi": "Bạn ấy không thích màu sắc."
          },
          {
            "en": "She has no time.",
            "vi": "Bạn ấy không có thời gian."
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "Because Maya says painting helps her relax.",
          "vi": "Vì Maya nói vẽ giúp bạn thư giãn."
        },
        "context": {
          "en": "Original English Quest dialogue; not the textbook recording.",
          "vi": "Hội thoại do English Quest biên soạn, không phải audio SGK."
        },
        "audio": "Maya: I like music, but I prefer painting. Painting helps me relax after school. Leo: That's interesting! I enjoy taking photos."
      },
      {
        "id": "u4-gs-2",
        "exercise": "2",
        "source": {
          "en": "Identify the main topic of the opening conversation.",
          "vi": "Xác định chủ đề chính của hội thoại mở đầu."
        },
        "title": {
          "en": "Find the main topic",
          "vi": "Tìm chủ đề chính"
        },
        "kind": "choice",
        "prompt": {
          "en": "A conversation about playing the piano, painting and taking photos is mainly about…",
          "vi": "Một cuộc nói chuyện về đàn piano, vẽ và chụp ảnh chủ yếu thuộc chủ đề…"
        },
        "options": [
          {
            "en": "Music and arts",
            "vi": "Âm nhạc và nghệ thuật"
          },
          {
            "en": "Road safety",
            "vi": "An toàn giao thông"
          },
          {
            "en": "Cooking",
            "vi": "Nấu ăn"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "All examples concern artistic activities.",
          "vi": "Tất cả ví dụ thuộc hoạt động nghệ thuật."
        }
      },
      {
        "id": "u4-gs-3",
        "exercise": "3",
        "source": {
          "en": "Complete sentences with music-and-art expressions.",
          "vi": "Điền từ và cụm từ về âm nhạc, nghệ thuật."
        },
        "title": {
          "en": "Complete a new sentence",
          "vi": "Điền câu luyện tập mới"
        },
        "kind": "fill",
        "prompt": {
          "en": "We saw colorful paintings at the ______ yesterday. (two words)",
          "vi": "Hôm qua chúng tôi xem các bức tranh nhiều màu ở ______. (hai từ)"
        },
        "accepted": [
          "art gallery"
        ],
        "explanation": {
          "en": "An art gallery displays paintings.",
          "vi": "Art gallery là phòng trưng bày tranh."
        }
      },
      {
        "id": "u4-gs-4",
        "exercise": "4",
        "source": {
          "en": "Label pictures of art materials and activities, then repeat.",
          "vi": "Gọi tên đồ dùng và hoạt động nghệ thuật theo tranh, sau đó đọc lại."
        },
        "title": {
          "en": "Recognize an object",
          "vi": "Nhận biết đồ vật"
        },
        "kind": "choice",
        "prompt": {
          "en": "Which object does an artist use to put paint on a canvas? 🎨",
          "vi": "Họa sĩ dùng vật gì để đưa màu lên vải vẽ?"
        },
        "options": [
          {
            "en": "A paintbrush",
            "vi": "Cọ vẽ"
          },
          {
            "en": "A camera",
            "vi": "Máy ảnh"
          },
          {
            "en": "A violin",
            "vi": "Đàn vĩ cầm"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "A paintbrush is used to paint.",
          "vi": "Cọ vẽ dùng để tô màu/vẽ tranh."
        }
      },
      {
        "id": "u4-gs-5",
        "exercise": "5",
        "source": {
          "en": "Reflect on personal artistic interests using the textbook's self-discovery quiz.",
          "vi": "Tự khám phá sở thích nghệ thuật dựa trên hoạt động khảo sát SGK."
        },
        "title": {
          "en": "Your interests are not a test",
          "vi": "Khám phá sở thích, không phải thi năng khiếu"
        },
        "kind": "write",
        "prompt": {
          "en": "Write 2 sentences: What is your favorite music or art activity? Why?",
          "vi": "Viết 2 câu: Em thích hoạt động âm nhạc/nghệ thuật nào nhất? Vì sao?"
        },
        "sample": {
          "en": "I prefer singing because I can share songs with my friends.",
          "vi": "Em thích hát vì có thể chia sẻ bài hát với bạn bè."
        },
        "note": {
          "en": "This reflection does not measure talent or determine artistic ability.",
          "vi": "Bài tự nhận xét này không đánh giá tài năng hay năng khiếu."
        }
      }
    ]
  },
  {
    "lesson": "A Closer Look 1",
    "page": "42",
    "url": "https://sachgiaokhoa.online/lop-7-10/global-success-bo-giao-duc-dao-tao-11/unit-4-music-and-arts-2011/a-closer-look-1-6682.html",
    "goal": {
      "en": "Classify artists and places, use common art collocations, and distinguish /ʃ/ and /ʒ/.",
      "vi": "Phân loại người và địa điểm nghệ thuật, dùng cụm từ thường gặp và phân biệt /ʃ/ với /ʒ/."
    },
    "tasks": [
      {
        "id": "u4-al1-1",
        "exercise": "1",
        "source": {
          "en": "Sort vocabulary into people and places.",
          "vi": "Phân từ vựng thành người và địa điểm."
        },
        "title": {
          "en": "People or places?",
          "vi": "Người hay địa điểm?"
        },
        "kind": "choice",
        "prompt": {
          "en": "A composer belongs in which category?",
          "vi": "Composer thuộc nhóm nào?"
        },
        "options": [
          {
            "en": "People",
            "vi": "Con người"
          },
          {
            "en": "Places",
            "vi": "Địa điểm"
          },
          {
            "en": "Instruments",
            "vi": "Nhạc cụ"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "A composer is a person who writes music.",
          "vi": "Composer là người sáng tác âm nhạc."
        }
      },
      {
        "id": "u4-al1-2",
        "exercise": "2",
        "source": {
          "en": "Match action verbs with art-related nouns.",
          "vi": "Ghép động từ hành động với danh từ nghệ thuật."
        },
        "title": {
          "en": "Build a collocation",
          "vi": "Ghép cụm từ"
        },
        "kind": "fill",
        "prompt": {
          "en": "Artists often ______ portraits. (verb)",
          "vi": "Các nghệ sĩ thường ______ chân dung. (động từ tiếng Anh)"
        },
        "accepted": [
          "paint"
        ],
        "explanation": {
          "en": "We say paint a portrait, take a photo and play the guitar.",
          "vi": "Ta dùng paint a portrait, take a photo, play the guitar."
        }
      },
      {
        "id": "u4-al1-3",
        "exercise": "3",
        "source": {
          "en": "Choose art vocabulary to complete sentences.",
          "vi": "Chọn từ vựng nghệ thuật hoàn thành câu."
        },
        "title": {
          "en": "Choose a word from context",
          "vi": "Chọn từ dựa vào ngữ cảnh"
        },
        "kind": "choice",
        "prompt": {
          "en": "The whole audience enjoyed the orchestra's final _____.",
          "vi": "Khán giả thưởng thức _____ cuối cùng của dàn nhạc."
        },
        "options": [
          {
            "en": "concert",
            "vi": "buổi hòa nhạc"
          },
          {
            "en": "camera",
            "vi": "máy ảnh"
          },
          {
            "en": "portrait",
            "vi": "tranh chân dung"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "An orchestra gives a concert.",
          "vi": "Dàn nhạc trình diễn buổi hòa nhạc."
        }
      },
      {
        "id": "u4-al1-4",
        "exercise": "4",
        "source": {
          "en": "Listen to and distinguish the sounds /ʃ/ and /ʒ/.",
          "vi": "Nghe và phân biệt âm /ʃ/ và /ʒ/."
        },
        "title": {
          "en": "Sound detective",
          "vi": "Thám tử âm thanh"
        },
        "kind": "choice",
        "prompt": {
          "en": "Which word contains voiced /ʒ/?",
          "vi": "Từ nào có âm /ʒ/ hữu thanh?"
        },
        "options": [
          {
            "en": "vision",
            "vi": "tầm nhìn"
          },
          {
            "en": "share",
            "vi": "chia sẻ"
          },
          {
            "en": "show",
            "vi": "buổi diễn"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "Vision contains /ʒ/; share and show contain /ʃ/.",
          "vi": "Vision có /ʒ/; share và show có /ʃ/."
        },
        "audio": "Show. Share. Vision. Pleasure."
      },
      {
        "id": "u4-al1-5",
        "exercise": "5",
        "source": {
          "en": "Identify the target sounds inside spoken sentences.",
          "vi": "Nhận diện âm mục tiêu trong câu nghe."
        },
        "title": {
          "en": "Listen in a sentence",
          "vi": "Nghe âm trong câu"
        },
        "kind": "listen",
        "prompt": {
          "en": "Which word in the short audio has the sound /ʒ/?",
          "vi": "Từ nào trong âm thanh có âm /ʒ/?"
        },
        "options": [
          {
            "en": "pleasure",
            "vi": "niềm vui"
          },
          {
            "en": "show",
            "vi": "buổi diễn"
          },
          {
            "en": "share",
            "vi": "chia sẻ"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "Pleasure contains /ʒ/.",
          "vi": "Pleasure chứa âm /ʒ/."
        },
        "context": {
          "en": "Original practice sentence, not the textbook track.",
          "vi": "Câu luyện nghe tự biên soạn, không phải bản thu SGK."
        },
        "audio": "It's a pleasure to watch the musician on stage."
      }
    ]
  },
  {
    "lesson": "A Closer Look 2",
    "page": "43–44",
    "url": "https://sachgiaokhoa.online/lop-7-10/global-success-bo-giao-duc-dao-tao-11/unit-4-music-and-arts-2011/a-closer-look-2-6684.html",
    "goal": {
      "en": "Compare artistic objects, performances and places accurately.",
      "vi": "So sánh đồ vật, buổi diễn và địa điểm nghệ thuật chính xác."
    },
    "tasks": [
      {
        "id": "u4-al2-1",
        "exercise": "1",
        "source": {
          "en": "Choose like, as, and different for comparisons.",
          "vi": "Chọn like, as, different để so sánh."
        },
        "title": {
          "en": "Fill the comparison",
          "vi": "Điền cấu trúc so sánh"
        },
        "kind": "fill",
        "prompt": {
          "en": "The school museum is not as large ___ the city museum.",
          "vi": "Bảo tàng trường không lớn ___ bảo tàng thành phố."
        },
        "accepted": [
          "as"
        ],
        "explanation": {
          "en": "Use as + adjective + as.",
          "vi": "Dùng as + tính từ + as."
        }
      },
      {
        "id": "u4-al2-2",
        "exercise": "2",
        "source": {
          "en": "Rewrite statements using like, different from or (not) as…as.",
          "vi": "Viết lại câu bằng like, different from hoặc (not) as…as."
        },
        "title": {
          "en": "Rewrite for meaning",
          "vi": "Viết lại giữ nguyên nghĩa"
        },
        "kind": "fill",
        "prompt": {
          "en": "Folk music and electronic music are not the same. Folk music is ______ electronic music.",
          "vi": "Nhạc dân gian và nhạc điện tử không giống nhau. Điền cụm còn thiếu."
        },
        "accepted": [
          "different from"
        ],
        "explanation": {
          "en": "Different from expresses a difference.",
          "vi": "Different from diễn tả sự khác nhau."
        }
      },
      {
        "id": "u4-al2-3",
        "exercise": "3",
        "source": {
          "en": "Compare museum features using the table in your textbook.",
          "vi": "Dùng bảng trong SGK để so sánh đặc điểm hai bảo tàng."
        },
        "title": {
          "en": "Compare two imagined museums",
          "vi": "So sánh hai bảo tàng giả định"
        },
        "kind": "write",
        "prompt": {
          "en": "Museum A is modern and quiet. Museum B is older and busier. Write one comparison with not as…as.",
          "vi": "Bảo tàng A hiện đại, yên tĩnh; B cũ và đông hơn. Hãy viết một câu dùng not as…as."
        },
        "sample": {
          "en": "Museum B is not as modern as Museum A.",
          "vi": "Bảo tàng B không hiện đại bằng A."
        }
      },
      {
        "id": "u4-al2-4",
        "exercise": "4",
        "source": {
          "en": "Transform sentences starting from the given words.",
          "vi": "Viết lại câu theo cụm từ cho sẵn."
        },
        "title": {
          "en": "Transform a sentence",
          "vi": "Viết lại câu"
        },
        "kind": "write",
        "prompt": {
          "en": "The drum is louder than the flute. Start your sentence: The flute is not…",
          "vi": "Trống to hơn sáo. Hãy bắt đầu: The flute is not…"
        },
        "sample": {
          "en": "The flute is not as loud as the drum.",
          "vi": "Sáo không to bằng trống."
        }
      },
      {
        "id": "u4-al2-5",
        "exercise": "5",
        "source": {
          "en": "Compare the two pictures in the textbook.",
          "vi": "So sánh hai bức tranh trong SGK."
        },
        "title": {
          "en": "Compare two art scenes",
          "vi": "So sánh hai khung cảnh"
        },
        "kind": "write",
        "prompt": {
          "en": "Scene A is a colorful street mural. Scene B is a black-and-white sketch. Write two comparisons using like and different from.",
          "vi": "Cảnh A là tranh tường nhiều màu, cảnh B là phác thảo đen trắng. Viết hai câu dùng like và different from."
        },
        "sample": {
          "en": "A mural is different from a sketch. A street mural is like a large outdoor painting.",
          "vi": "Tranh tường khác phác thảo. Tranh tường giống bức tranh lớn ngoài trời."
        }
      }
    ]
  },
  {
    "lesson": "Communication",
    "page": "45",
    "url": "https://sachgiaokhoa.online/lop-7-10/global-success-bo-giao-duc-dao-tao-11/unit-4-music-and-arts-2011/communication-6685.html",
    "goal": {
      "en": "Express preferences and compare opportunities for music and art at schools.",
      "vi": "Diễn đạt sở thích và so sánh việc học nghệ thuật ở trường."
    },
    "tasks": [
      {
        "id": "u4-com-1",
        "exercise": "1",
        "source": {
          "en": "Listen to a short preference conversation.",
          "vi": "Nghe hội thoại ngắn hỏi đáp sở thích."
        },
        "title": {
          "en": "Listen for preference",
          "vi": "Nghe để tìm sở thích"
        },
        "kind": "listen",
        "prompt": {
          "en": "Which activity does Ellie prefer?",
          "vi": "Ellie thích hoạt động nào hơn?"
        },
        "options": [
          {
            "en": "Painting",
            "vi": "Vẽ tranh"
          },
          {
            "en": "Dancing",
            "vi": "Nhảy"
          },
          {
            "en": "Football",
            "vi": "Đá bóng"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "Ellie says she prefers painting.",
          "vi": "Ellie nói cô ấy thích vẽ hơn."
        },
        "audio": "Noah: Which do you prefer, painting or dancing? Ellie: I prefer painting. It lets me be creative."
      },
      {
        "id": "u4-com-2",
        "exercise": "2",
        "source": {
          "en": "Ask and answer questions about painting, photography, singing and dancing.",
          "vi": "Hỏi đáp sở thích giữa vẽ/chụp ảnh, hát/nhảy."
        },
        "title": {
          "en": "Create a four-turn dialogue",
          "vi": "Tạo hội thoại bốn lượt"
        },
        "kind": "write",
        "prompt": {
          "en": "Write four dialogue lines between two friends choosing painting or photography. Include a reason with because.",
          "vi": "Viết bốn lượt hội thoại hai người bạn chọn vẽ hoặc chụp ảnh. Dùng because nêu lý do."
        },
        "sample": {
          "en": "A: Which do you prefer, painting or taking photos? B: I prefer taking photos. A: Why? B: Because I love capturing memories.",
          "vi": "A hỏi sở thích, B trả lời và giải thích lý do."
        }
      },
      {
        "id": "u4-com-3",
        "exercise": "3",
        "source": {
          "en": "Answer short questions about Vietnamese and international arts.",
          "vi": "Trả lời câu hỏi ngắn về nghệ thuật Việt Nam và thế giới."
        },
        "title": {
          "en": "Music culture explorer",
          "vi": "Khám phá văn hóa âm nhạc"
        },
        "kind": "choice",
        "prompt": {
          "en": "Which traditional singing style is associated with Bắc Ninh?",
          "vi": "Loại hình hát truyền thống gắn với Bắc Ninh?"
        },
        "options": [
          {
            "en": "Quan họ",
            "vi": "Hát quan họ"
          },
          {
            "en": "Jazz",
            "vi": "Jazz"
          },
          {
            "en": "Opera",
            "vi": "Opera"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "Bắc Ninh is associated with quan họ folk singing.",
          "vi": "Bắc Ninh nổi tiếng với hát quan họ."
        }
      },
      {
        "id": "u4-com-4",
        "exercise": "4",
        "source": {
          "en": "Identify music-and-art words in a school-life paragraph.",
          "vi": "Tìm từ vựng về âm nhạc, nghệ thuật trong đoạn đọc trường học."
        },
        "title": {
          "en": "Read an original school profile",
          "vi": "Đọc đoạn giới thiệu trường học tự biên soạn"
        },
        "kind": "choice",
        "prompt": {
          "en": "Which activity is part of the arts program at Oak School?",
          "vi": "Hoạt động nào thuộc chương trình nghệ thuật của trường Oak?"
        },
        "options": [
          {
            "en": "Choir rehearsal",
            "vi": "Tập hát hợp xướng"
          },
          {
            "en": "Swimming race",
            "vi": "Thi bơi"
          },
          {
            "en": "Chess tournament",
            "vi": "Thi cờ vua"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "The original profile mentions a school choir.",
          "vi": "Đoạn văn nhắc đến câu lạc bộ hợp xướng."
        },
        "context": {
          "en": "At Oak School, everyone takes music class. Students can choose drama or painting. The choir meets on Fridays and performs each month.",
          "vi": "Ở trường Oak, tất cả học sinh học âm nhạc. Các em có thể chọn kịch hoặc vẽ. Nhóm hợp xướng tập thứ Sáu và biểu diễn hằng tháng."
        }
      },
      {
        "id": "u4-com-5",
        "exercise": "5",
        "source": {
          "en": "Compare an Australian school's arts program with yours.",
          "vi": "So sánh chương trình nghệ thuật của một trường ở Úc và trường mình."
        },
        "title": {
          "en": "Compare school experiences",
          "vi": "So sánh hai trường"
        },
        "kind": "write",
        "prompt": {
          "en": "A school abroad offers optional drama and a monthly choir performance. Write two sentences comparing it with your school.",
          "vi": "Một trường nước ngoài có môn kịch tự chọn và hợp xướng biểu diễn mỗi tháng. Viết hai câu so sánh với trường em."
        },
        "sample": {
          "en": "Our school is like their school because we both study music. Our art club is different from their choir.",
          "vi": "Trường em giống họ ở việc học âm nhạc, nhưng câu lạc bộ mỹ thuật khác nhóm hợp xướng."
        }
      }
    ]
  },
  {
    "lesson": "Skills 1",
    "page": "46",
    "url": "https://sachgiaokhoa.online/lop-7-10/global-success-bo-giao-duc-dao-tao-11/unit-4-music-and-arts-2011/skills-1-6686.html",
    "goal": {
      "en": "Read an email about water puppetry and speak about a school musical performance.",
      "vi": "Đọc email về múa rối nước và nói về biểu diễn âm nhạc ở trường."
    },
    "tasks": [
      {
        "id": "u4-sk1-1",
        "exercise": "1",
        "source": {
          "en": "Discuss pictures of Vietnamese traditional performances.",
          "vi": "Thảo luận tranh về nghệ thuật truyền thống Việt Nam."
        },
        "title": {
          "en": "Activate background knowledge",
          "vi": "Kích hoạt kiến thức nền"
        },
        "kind": "write",
        "prompt": {
          "en": "Describe water puppetry and quan họ singing in two simple English sentences.",
          "vi": "Mô tả múa rối nước và hát quan họ bằng hai câu tiếng Anh đơn giản."
        },
        "sample": {
          "en": "Water puppetry uses puppets on water. Quan họ is a traditional singing style.",
          "vi": "Múa rối nước có con rối biểu diễn trên nước; quan họ là hình thức hát truyền thống."
        }
      },
      {
        "id": "u4-sk1-2",
        "exercise": "2",
        "source": {
          "en": "Read an email about a water puppet show and work out vocabulary meanings.",
          "vi": "Đọc email kể về múa rối nước và tìm nghĩa từ vựng."
        },
        "title": {
          "en": "Read an original email",
          "vi": "Đọc email tự biên soạn"
        },
        "kind": "choice",
        "prompt": {
          "en": "In the email, what does the verb 'controlled' mean?",
          "vi": "Trong email, 'controlled' có nghĩa gì?"
        },
        "options": [
          {
            "en": "Made the puppets move",
            "vi": "Điều khiển con rối chuyển động"
          },
          {
            "en": "Sold the tickets",
            "vi": "Bán vé"
          },
          {
            "en": "Took photographs",
            "vi": "Chụp ảnh"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "The artists controlled the puppets during the show.",
          "vi": "Các nghệ sĩ điều khiển con rối khi diễn."
        },
        "context": {
          "en": "Subject: An unforgettable show\nHi Linh,\nYesterday I visited a small theatre near the lake. I watched a Vietnamese water puppet show. The puppeteers stood behind a screen and controlled wooden puppets in the water. The story was about farmers working in the countryside. Traditional musicians played music while colorful puppets danced. It was an exciting way to learn about Vietnamese culture. Have you ever seen this kind of show?\nBest,\nAlex",
          "vi": "Chủ đề: Buổi diễn đáng nhớ\nChào Linh,\nHôm qua tớ tới một nhà hát nhỏ gần hồ và xem múa rối nước. Nghệ sĩ đứng sau màn và điều khiển rối gỗ dưới nước. Câu chuyện về người nông dân ở nông thôn. Nhạc công truyền thống chơi nhạc khi rối biểu diễn. Đó là cách thú vị để tìm hiểu văn hóa Việt Nam. Bạn từng xem loại hình này chưa?\nAlex"
        }
      },
      {
        "id": "u4-sk1-3",
        "exercise": "3",
        "source": {
          "en": "Read the water-puppetry email again for specific details.",
          "vi": "Đọc lại email và tìm chi tiết."
        },
        "title": {
          "en": "Find evidence in the email",
          "vi": "Tìm chi tiết trong email"
        },
        "kind": "choice",
        "prompt": {
          "en": "What was the puppet show story about in Alex's email?",
          "vi": "Buổi múa rối trong email của Alex kể về điều gì?"
        },
        "options": [
          {
            "en": "Farmers in the countryside",
            "vi": "Người nông dân ở nông thôn"
          },
          {
            "en": "A space mission",
            "vi": "Chuyến bay vũ trụ"
          },
          {
            "en": "A football match",
            "vi": "Trận bóng đá"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "The original email describes farmers in the countryside.",
          "vi": "Email tự biên soạn nói đến người nông dân ở nông thôn."
        },
        "context": {
          "en": "From Alex's original email: The story was about farmers working in the countryside.",
          "vi": "Từ email của Alex: Câu chuyện nói về người nông dân làm việc ở nông thôn."
        }
      },
      {
        "id": "u4-sk1-4",
        "exercise": "4",
        "source": {
          "en": "Ask and answer about a student's past musical performance.",
          "vi": "Hỏi đáp về buổi biểu diễn âm nhạc đã diễn ra."
        },
        "title": {
          "en": "Role-play an interview",
          "vi": "Đóng vai phỏng vấn"
        },
        "kind": "write",
        "prompt": {
          "en": "Imagine Kai performed with the school band last Friday. Write four question-answer lines about when, where and what he played.",
          "vi": "Tưởng tượng Kai biểu diễn cùng ban nhạc trường thứ Sáu trước. Viết bốn lượt hỏi đáp về thời gian, địa điểm và nhạc cụ."
        },
        "sample": {
          "en": "A: When did you perform? B: Last Friday. A: What did you play? B: I played the guitar.",
          "vi": "A hỏi thời gian, B trả lời; A hỏi nhạc cụ, B trả lời."
        }
      },
      {
        "id": "u4-sk1-5",
        "exercise": "5",
        "source": {
          "en": "Discuss a music performance planned for Teachers' Day.",
          "vi": "Thảo luận chương trình âm nhạc cho Ngày Nhà giáo."
        },
        "title": {
          "en": "Plan a school show",
          "vi": "Lên kế hoạch buổi diễn"
        },
        "kind": "write",
        "prompt": {
          "en": "Plan a Teachers' Day performance: include two activities, one performer and a reason to attend. Present it aloud.",
          "vi": "Lên kế hoạch buổi diễn 20/11: hai hoạt động, một người biểu diễn và lý do nên tham gia."
        },
        "sample": {
          "en": "We will hold a music show for Teachers' Day. Our class will sing, and Minh will play the guitar. Please come and enjoy it!",
          "vi": "Lớp em sẽ tổ chức biểu diễn hát và đàn nhân Ngày Nhà giáo."
        }
      }
    ]
  },
  {
    "lesson": "Skills 2",
    "page": "47",
    "url": "https://sachgiaokhoa.online/lop-7-10/global-success-bo-giao-duc-dao-tao-11/unit-4-music-and-arts-2011/skills-2-6687.html",
    "goal": {
      "en": "Listen for information about street art and write an informal invitation.",
      "vi": "Nghe về tranh đường phố và viết thư mời thân mật."
    },
    "tasks": [
      {
        "id": "u4-sk2-1",
        "exercise": "1",
        "source": {
          "en": "Discuss what you know about street painting.",
          "vi": "Thảo luận hiểu biết về street painting."
        },
        "title": {
          "en": "Predict before listening",
          "vi": "Dự đoán trước khi nghe"
        },
        "kind": "write",
        "prompt": {
          "en": "What might visitors see or do at a street-painting festival? Write one English sentence.",
          "vi": "Khách tham quan có thể thấy/làm gì tại lễ hội vẽ tranh đường phố? Viết một câu."
        },
        "sample": {
          "en": "Visitors can watch artists create pictures on the street.",
          "vi": "Khách có thể xem họa sĩ vẽ tranh trên đường."
        }
      },
      {
        "id": "u4-sk2-2",
        "exercise": "2",
        "source": {
          "en": "Listen and identify vocabulary heard in a talk on street painting.",
          "vi": "Nghe và đánh dấu từ xuất hiện trong bài nói về street painting."
        },
        "title": {
          "en": "Listen for keywords",
          "vi": "Nghe từ khóa"
        },
        "kind": "listen",
        "prompt": {
          "en": "Which word is mentioned in the original audio?",
          "vi": "Từ nào xuất hiện trong đoạn nghe tự biên soạn?"
        },
        "options": [
          {
            "en": "artists",
            "vi": "họa sĩ"
          },
          {
            "en": "airport",
            "vi": "sân bay"
          },
          {
            "en": "hospital",
            "vi": "bệnh viện"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "The speaker mentions artists making colorful pictures.",
          "vi": "Người nói nhắc các họa sĩ vẽ tranh nhiều màu."
        },
        "audio": "Welcome to our street painting festival! Each spring, local artists create colorful pictures on the pavement. Visitors can watch them, ask questions, and take photos. Please enjoy the art and keep the street clean."
      },
      {
        "id": "u4-sk2-3",
        "exercise": "3",
        "source": {
          "en": "Listen a second time and choose correct details.",
          "vi": "Nghe lần hai và chọn thông tin chi tiết."
        },
        "title": {
          "en": "Listen for a specific detail",
          "vi": "Nghe thông tin cụ thể"
        },
        "kind": "listen",
        "prompt": {
          "en": "When is the festival held in this English Quest recording?",
          "vi": "Trong bài nghe English Quest, lễ hội diễn ra khi nào?"
        },
        "options": [
          {
            "en": "Every spring",
            "vi": "Mỗi mùa xuân"
          },
          {
            "en": "Every evening",
            "vi": "Mỗi tối"
          },
          {
            "en": "Only in winter",
            "vi": "Chỉ mùa đông"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "The original recording says each spring.",
          "vi": "Bài nghe tự biên soạn nói mỗi mùa xuân."
        },
        "context": {
          "en": "This is a new practice recording, not the official textbook passage about Lake Worth.",
          "vi": "Đây là bài nghe tự biên soạn, không phải bài nghe SGK về lễ hội Lake Worth."
        },
        "audio": "Welcome to our street painting festival! Each spring, local artists create colorful pictures on the pavement. Visitors can watch them, ask questions, and take photos. Please enjoy the art and keep the street clean."
      },
      {
        "id": "u4-sk2-4",
        "exercise": "4",
        "source": {
          "en": "Study the purpose and structure of an informal invitation letter.",
          "vi": "Nhận biết mục đích và cấu trúc thư mời thân mật."
        },
        "title": {
          "en": "Analyze an invitation",
          "vi": "Phân tích thư mời"
        },
        "kind": "choice",
        "prompt": {
          "en": "Why did Sam write this message to Pat?",
          "vi": "Vì sao Sam gửi tin nhắn này cho Pat?"
        },
        "options": [
          {
            "en": "To invite Pat to a festival",
            "vi": "Mời Pat đến lễ hội"
          },
          {
            "en": "To apply for a job",
            "vi": "Xin việc"
          },
          {
            "en": "To complain about homework",
            "vi": "Phàn nàn bài tập"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "It gives an event, time and meeting place.",
          "vi": "Tin nhắn có tên sự kiện, thời gian và địa điểm hẹn."
        },
        "context": {
          "en": "Hi Pat,\nWould you like to visit the art fair this Sunday at 9 a.m.? We can meet outside the library at 8:45. Let's watch the painters and try some drawings!\nSee you,\nSam",
          "vi": "Chào Pat,\nChủ nhật này bạn muốn đến hội chợ nghệ thuật lúc 9 giờ không? Chúng ta gặp nhau ngoài thư viện lúc 8:45 nhé. Cùng xem họa sĩ và thử vẽ tranh!\nSam"
        }
      },
      {
        "id": "u4-sk2-5",
        "exercise": "5",
        "source": {
          "en": "Write an informal letter inviting a friend to a street painting event.",
          "vi": "Viết thư thân mật mời bạn đến lễ hội vẽ tranh đường phố."
        },
        "title": {
          "en": "Write a complete invitation",
          "vi": "Viết thư mời hoàn chỉnh"
        },
        "kind": "write",
        "prompt": {
          "en": "Write 60–80 English words to invite a friend to an original street art event. Include greeting, place, date/time, activities, meeting time and closing.",
          "vi": "Viết 60–80 từ tiếng Anh mời bạn đến sự kiện nghệ thuật đường phố; có chào hỏi, địa điểm, ngày/giờ, hoạt động, giờ hẹn và kết thư."
        },
        "sample": {
          "en": "Hi Emma,\nWould you like to come to the Street Art Day at Riverside Park this Sunday? It starts at 9 a.m. We can watch local artists paint, meet new friends and try making a small drawing. Let's meet at 8:45 in front of the park gate. I think you will love the colors and music. Please let me know if you can come.\nSee you soon,\nLily",
          "vi": "Thư mời mẫu có đầy đủ lời chào, sự kiện, lịch trình, hoạt động, lời kết."
        }
      }
    ]
  },
  {
    "lesson": "Looking Back & Project",
    "page": "48–49",
    "url": "https://sachgiaokhoa.online/lop-7-10/global-success-bo-giao-duc-dao-tao-11/unit-4-music-and-arts-2011/project-6690.html",
    "goal": {
      "en": "Consolidate art vocabulary and comparisons; organize and present a music-show invitation.",
      "vi": "Ôn từ vựng/so sánh, lên kế hoạch và giới thiệu thư mời biểu diễn âm nhạc."
    },
    "tasks": [
      {
        "id": "u4-lb-1",
        "exercise": "Looking Back 1",
        "source": {
          "en": "Form meaningful verb–noun combinations from the textbook's vocabulary review.",
          "vi": "Ghép động từ với danh từ phù hợp trong phần ôn từ vựng SGK."
        },
        "title": {
          "en": "Choose a natural collocation",
          "vi": "Chọn cụm từ kết hợp tự nhiên"
        },
        "kind": "choice",
        "prompt": {
          "en": "Which phrase is a natural English expression for an art performance?",
          "vi": "Cụm nào là cách diễn đạt tự nhiên về biểu diễn nghệ thuật?"
        },
        "options": [
          {
            "en": "perform a dance",
            "vi": "biểu diễn một điệu nhảy"
          },
          {
            "en": "perform a paintbrush",
            "vi": "biểu diễn một chiếc cọ"
          },
          {
            "en": "perform an art gallery",
            "vi": "biểu diễn một phòng tranh"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "We say perform a song, a dance or a show.",
          "vi": "Ta nói perform a song, a dance hoặc a show."
        }
      },
      {
        "id": "u4-lb-2",
        "exercise": "Looking Back 2",
        "source": {
          "en": "Complete a new museum paragraph with suitable vocabulary, following Looking Back 2.",
          "vi": "Điền từ vựng phù hợp vào đoạn văn bảo tàng mới theo dạng Looking Back 2."
        },
        "title": {
          "en": "Museum vocabulary in context",
          "vi": "Từ vựng bảo tàng trong ngữ cảnh"
        },
        "kind": "fill",
        "prompt": {
          "en": "The town museum is opening an art ______ featuring student paintings this weekend.",
          "vi": "Bảo tàng thị trấn sẽ khai mạc một ______ nghệ thuật trưng bày tranh học sinh cuối tuần này."
        },
        "accepted": [
          "exhibition"
        ],
        "explanation": {
          "en": "An exhibition is a public display of artworks.",
          "vi": "Exhibition là cuộc triển lãm/trưng bày tác phẩm nghệ thuật."
        },
        "context": {
          "en": "Our town museum is welcoming visitors to a student art exhibition. The gallery will display original paintings, portraits and sculptures created by young artists.",
          "vi": "Bảo tàng thị trấn đón khách đến triển lãm nghệ thuật học sinh. Phòng trưng bày giới thiệu tranh, chân dung và tác phẩm điêu khắc của nghệ sĩ trẻ."
        }
      },
      {
        "id": "u4-lb-3",
        "exercise": "Looking Back 3",
        "source": {
          "en": "Review comparison grammar.",
          "vi": "Ôn cấu trúc so sánh."
        },
        "title": {
          "en": "Grammar review",
          "vi": "Ôn ngữ pháp"
        },
        "kind": "fill",
        "prompt": {
          "en": "This poster is as bright ______ that one.",
          "vi": "Áp phích này rực rỡ ______ áp phích kia."
        },
        "accepted": [
          "as"
        ],
        "explanation": {
          "en": "Equality uses as + adjective + as.",
          "vi": "So sánh bằng dùng as + tính từ + as."
        }
      },
      {
        "id": "u4-lb-4",
        "exercise": "Looking Back 4",
        "source": {
          "en": "Rewrite sentences without changing the meaning.",
          "vi": "Viết lại câu giữ nguyên nghĩa."
        },
        "title": {
          "en": "Rewrite and explain",
          "vi": "Viết lại và giải thích"
        },
        "kind": "write",
        "prompt": {
          "en": "Jazz and folk music are not the same. Rewrite using 'different from'.",
          "vi": "Nhạc jazz và dân ca không giống nhau. Viết lại bằng different from."
        },
        "sample": {
          "en": "Jazz is different from folk music.",
          "vi": "Nhạc jazz khác nhạc dân gian."
        }
      },
      {
        "id": "u4-prj-1",
        "exercise": "Project 1",
        "source": {
          "en": "Examine an invitation for a music show.",
          "vi": "Quan sát thư mời chương trình âm nhạc."
        },
        "title": {
          "en": "Read an example invitation",
          "vi": "Đọc thư mời ví dụ"
        },
        "kind": "choice",
        "prompt": {
          "en": "Where will the original River Music Night take place?",
          "vi": "River Music Night tổ chức ở đâu?"
        },
        "options": [
          {
            "en": "At the community hall",
            "vi": "Ở hội trường cộng đồng"
          },
          {
            "en": "At a hospital",
            "vi": "Ở bệnh viện"
          },
          {
            "en": "At a stadium",
            "vi": "Ở sân vận động"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "The invitation names the community hall.",
          "vi": "Thư mời nêu hội trường cộng đồng."
        },
        "context": {
          "en": "RIVER MUSIC NIGHT\nFriday, 7 p.m. · Community Hall\nLive guitar, folk singing and a student choir. Everyone is welcome!",
          "vi": "ĐÊM NHẠC DÒNG SÔNG\nThứ Sáu, 19 giờ · Hội trường cộng đồng\nĐàn guitar, dân ca và hợp xướng học sinh. Mọi người đều được chào đón!"
        }
      },
      {
        "id": "u4-prj-2",
        "exercise": "Project 2",
        "source": {
          "en": "Plan a music show with a name, time, place and activities.",
          "vi": "Lên kế hoạch chương trình với tên, thời gian, địa điểm và hoạt động."
        },
        "title": {
          "en": "Plan your own event",
          "vi": "Lên kế hoạch sự kiện"
        },
        "kind": "write",
        "prompt": {
          "en": "Write a show plan with name, date, place, two performances and the people responsible.",
          "vi": "Viết kế hoạch tên sự kiện, ngày, địa điểm, hai tiết mục và người phụ trách."
        },
        "sample": {
          "en": "Event: Our Class Music Night. Date: November 20. Place: School Hall. Activities: choir and piano duet. Team: Class 7A.",
          "vi": "Kế hoạch gồm đủ tên, thời gian, địa điểm, hoạt động và nhóm tổ chức."
        }
      },
      {
        "id": "u4-prj-3",
        "exercise": "Project 3",
        "source": {
          "en": "Create an invitation and present it to classmates.",
          "vi": "Tạo thư mời và thuyết trình trước lớp."
        },
        "title": {
          "en": "Your final project",
          "vi": "Dự án cuối cùng"
        },
        "kind": "write",
        "prompt": {
          "en": "Create a complete English invitation for your show. Then present it aloud for one minute. Include audience, place, time, program and a friendly reason to come.",
          "vi": "Tạo thư mời tiếng Anh hoàn chỉnh, thuyết trình một phút: đối tượng, nơi chốn, thời gian, chương trình và lý do tham gia."
        },
        "sample": {
          "en": "YOU ARE INVITED! Our Class Music Night — November 20 at 4 p.m. in the school hall. Enjoy singing, piano and traditional music. Come celebrate with us!",
          "vi": "Thư mời có đủ tên, lịch, địa điểm, tiết mục và lời mời."
        }
      },
      {
        "id": "u4-prj-self",
        "exercise": "Now I Can",
        "source": {
          "en": "Reflect on what you can do after completing Unit 4.",
          "vi": "Tự đánh giá năng lực sau Unit 4."
        },
        "title": {
          "en": "Learning reflection",
          "vi": "Tự đánh giá học tập"
        },
        "kind": "write",
        "prompt": {
          "en": "Write one thing you can do confidently in English and one skill you still need to practice (listening, speaking, reading or writing).",
          "vi": "Viết một điều em có thể làm tự tin bằng tiếng Anh và một kỹ năng cần luyện thêm (nghe, nói, đọc hoặc viết)."
        },
        "sample": {
          "en": "I can compare two paintings, but I need more practice understanding spoken English.",
          "vi": "Em đã biết so sánh tranh nhưng cần luyện nghe hiểu thêm."
        },
        "note": {
          "en": "Self-reflection is not a teacher-certified proficiency assessment.",
          "vi": "Tự đánh giá không thay thế việc chấm của giáo viên."
        }
      }
    ]
  }
];
export const curriculumActivityIds=textbookPaths.flatMap(p=>p.tasks.map(t=>t.id));
