/** Original, grade-7-level checkpoint questions and short shadowing dialogues.
 * Each array position follows the eight textbook sections; no publisher text/audio. */
export type PracticeRow=[prompt:string,options:[string,string,string],correct:0|1|2,why:string];
export type SectionPractice={q:PracticeRow[];lines:[string,string][]};
export const practice12:Record<1|2,SectionPractice[]>={
 1:[
 {q:[
 ["“Collecting stamps” nghĩa là gì?",["Sưu tầm tem","Chơi cờ","Chạy bộ"],0,"Collecting stamps là sưu tầm tem."],
 ["Chọn câu giới thiệu sở thích.",["My hobby collecting stamps.","My hobby is collecting stamps.","My collect is hobby."],1,"My hobby is + V-ing nói sở thích."],
 ["My sister ___ drawing pictures.",["enjoy","enjoying","enjoys"],2,"My sister là số ít, dùng enjoys."],
 ["Chọn câu đúng.",["I like reading books.","I like read books every.","I liking books."],0,"Like + V-ing: like reading."]
 ],lines:[
 ["What is your favourite hobby?","Sở thích của bạn là gì?"],
 ["I enjoy collecting colourful stamps.","Mình thích sưu tầm tem nhiều màu."],
 ["When did you start this hobby?","Bạn bắt đầu sở thích này khi nào?"],
 ["I started it two years ago.","Mình bắt đầu hai năm trước."]
 ]},
 {q:[
 ["“Gardening” nghĩa là gì?",["Vẽ tranh","Làm vườn","Sưu tầm xu"],1,"Gardening là làm vườn."],
 ["Chọn cụm từ tự nhiên.",["make cycling","play cycling","go cycling"],2,"Nói go cycling khi đi đạp xe."],
 ["Nam ___ models on Sundays.",["makes","make","making"],0,"Nam là chủ ngữ số ít nên makes."],
 ["Câu nào đúng?",["She likes make dolls.","She likes making dolls.","She liking makes dolls."],1,"Sau likes dùng making."]
 ],lines:[
 ["Do you enjoy gardening?","Bạn có thích làm vườn không?"],
 ["Yes, I grow flowers at home.","Có, mình trồng hoa ở nhà."],
 ["I prefer making paper models.","Mình thích làm mô hình giấy hơn."],
 ["Both hobbies are interesting.","Cả hai sở thích đều thú vị."]
 ]},
 {q:[
 ["“Dislike” có nghĩa là gì?",["Rất thích","Sưu tầm","Không thích"],2,"Dislike nghĩa là không thích."],
 ["Chọn câu đúng sau enjoy.",["I enjoy listening to music.","I enjoy listen music.","I enjoy to listening music."],0,"Enjoy + V-ing."],
 ["She ___ playing video games.",["don't like","doesn't like","doesn't likes"],1,"She doesn't like + V-ing."],
 ["Câu nào đúng?",["They loves drawing.","He enjoy drawing.","He loves drawing."],2,"He loves + V-ing."]
 ],lines:[
 ["Do you like playing chess?","Bạn có thích chơi cờ không?"],
 ["I do, but I love reading more.","Có, nhưng mình thích đọc hơn."],
 ["My brother dislikes playing chess.","Anh trai mình không thích chơi cờ."],
 ["He enjoys making models instead.","Anh ấy thích làm mô hình hơn."]
 ]},
 {q:[
 ["“Favourite” nghĩa là gì?",["Yêu thích nhất","Đắt tiền nhất","Khó nhất"],0,"Favourite là yêu thích nhất."],
 ["Cách hỏi sở thích lịch sự?",["You hobby what?","What do you like doing?","What doing you like?"],1,"What do you like doing? là câu hỏi đúng."],
 ["How often ___ you play chess?",["does","are","do"],2,"Với you dùng trợ động từ do."],
 ["Chọn câu trả lời tự nhiên.",["I play chess every weekend.","I chess at weekend play.","I playing chess every."],0,"Chủ ngữ + động từ + thời gian."]
 ],lines:[
 ["What do you like doing after school?","Sau giờ học bạn thích làm gì?"],
 ["I like playing badminton with friends.","Mình thích chơi cầu lông với bạn."],
 ["How often do you play?","Bạn chơi thường xuyên thế nào?"],
 ["I play twice a week.","Mình chơi hai lần một tuần."]
 ]},
 {q:[
 ["Đọc: “Minh makes small paper planes every Saturday.” Minh làm gì?",["Chơi đàn","Làm máy bay giấy","Trồng cây"],1,"Câu cho biết Minh makes small paper planes."],
 ["Chọn câu mô tả ích lợi của sở thích.",["Reading helps I relax.","Reading helping me relax.","Reading helps me relax."],2,"Help + object + động từ nguyên mẫu."],
 ["Her hobby ___ painting.",["is","are","be"],0,"Her hobby là danh từ số ít, dùng is."],
 ["Câu nào đúng về thời gian?",["He paintings on Sundays.","He paints on Sundays.","He paint on Sundays."],1,"He paints, thêm -s ở hiện tại đơn."]
 ],lines:[
 ["Tell me about your hobby.","Hãy kể về sở thích của bạn."],
 ["I make paper planes at weekends.","Mình làm máy bay giấy cuối tuần."],
 ["It helps me be creative.","Nó giúp mình sáng tạo."],
 ["I sometimes share them with friends.","Đôi khi mình chia sẻ với bạn."]
 ]},
 {q:[
 ["“Twice a week” nghĩa là gì?",["Mỗi ngày","Mỗi tháng","Hai lần mỗi tuần"],2,"Twice a week = hai lần một tuần."],
 ["Chọn câu diễn tả thói quen.",["I usually read before bed.","Usually I before read bed.","I read usually bed."],0,"Usually thường đứng trước động từ thường."],
 ["She ___ books in the evening.",["read","reads","reading"],1,"She reads ở thì hiện tại đơn."],
 ["Chọn câu viết giới thiệu sở thích.",["My hobby read comics.","Hobby I is comics.","My hobby is reading comics."],2,"My hobby is + V-ing."]
 ],lines:[
 ["When do you read comics?","Bạn đọc truyện tranh khi nào?"],
 ["I usually read after dinner.","Mình thường đọc sau bữa tối."],
 ["How many books do you have?","Bạn có bao nhiêu cuốn sách?"],
 ["I have about twenty books.","Mình có khoảng hai mươi cuốn."]
 ]},
 {q:[
 ["“Model making” là gì?",["Làm mô hình","Chạy bộ","Nấu cơm"],0,"Model making là làm mô hình."],
 ["Chọn cách nói sở thích.",["He love fishing.","He loves fishing.","He loves fishings."],1,"He loves + V-ing."],
 ["They ___ playing board games.",["likes","liking","like"],2,"They là số nhiều, dùng like."],
 ["Câu đúng là?",["I enjoy drawing pictures.","I enjoy draw pictures.","I enjoys drawing pictures."],0,"I enjoy + V-ing."]
 ],lines:[
 ["Let's review our favourite hobbies.","Mình cùng ôn sở thích nhé."],
 ["I enjoy reading and painting.","Mình thích đọc và vẽ."],
 ["My sister likes collecting coins.","Chị gái mình thích sưu tầm xu."],
 ["We often share our hobbies.","Chúng mình thường chia sẻ sở thích."]
 ]},
 {q:[
 ["“Poster” nghĩa là gì?",["Nhật ký","Áp phích","Gương"],1,"Poster là áp phích."],
 ["Chọn tiêu đề dự án phù hợp.",["Hobby I Favourite","My Hobbies Are Do","My Favourite Hobby"],2,"My Favourite Hobby là tiêu đề tự nhiên."],
 ["My hobby ___ growing vegetables.",["is","are","am"],0,"My hobby is + V-ing."],
 ["Câu dùng trong phần thuyết trình?",["Thank you for listen.","Thank you for listening.","Thank you listening for."],1,"Thank you for + V-ing."]
 ],lines:[
 ["Welcome to my hobby poster!","Chào mừng đến với áp phích sở thích!"],
 ["My favourite hobby is gardening.","Sở thích yêu thích của mình là làm vườn."],
 ["I grow flowers with my family.","Mình trồng hoa cùng gia đình."],
 ["Thank you for your attention.","Cảm ơn các bạn đã lắng nghe."]
 ]}
 ],
 2:[
 {q:[
 ["“Healthy living” nghĩa là gì?",["Sống một mình","Sống vội","Sống lành mạnh"],2,"Healthy living là lối sống lành mạnh."],
 ["Chọn lời khuyên về sức khỏe.",["You should drink more water.","You must eating sugar.","You should to sleep."],0,"Should + động từ nguyên mẫu."],
 ["He ___ breakfast every morning.",["have","has","having"],1,"He has breakfast trong hiện tại đơn."],
 ["Câu nào đúng?",["She exercise everyday.","She exercises everyday.","She exercises every day."],2,"Every day là cụm thời gian, không phải everyday."]
 ],lines:[
 ["How can we stay healthy?","Làm sao để sống khỏe?"],
 ["We should eat more vegetables.","Chúng ta nên ăn nhiều rau hơn."],
 ["I also drink plenty of water.","Mình cũng uống nhiều nước."],
 ["Good habits make us stronger.","Thói quen tốt giúp ta khỏe hơn."]
 ]},
 {q:[
 ["“Sunburn” có nghĩa là gì?",["Cháy nắng","Cảm lạnh","Đau răng"],0,"Sunburn là cháy nắng."],
 ["Chọn cách bảo vệ sức khỏe.",["Get an exercise.","Do exercise every day.","Make exercise every."],1,"Do exercise là tập thể dục."],
 ["My father ___ jogging.",["go","going","goes"],2,"My father goes jogging."],
 ["Chọn câu phát âm có /v/ ở đầu.",["Visit the village.","Finish the fish.","Find the fan."],0,"Visit và village bắt đầu bằng /v/."]
 ],lines:[
 ["I have a little sunburn.","Mình bị cháy nắng nhẹ."],
 ["You should wear a hat outside.","Bạn nên đội mũ khi ra ngoài."],
 ["Fresh fruit is good for us.","Trái cây tươi tốt cho chúng ta."],
 ["Vegetables are good for us too.","Rau cũng tốt cho chúng ta."]
 ]},
 {q:[
 ["“Subject” trong cấu trúc câu là gì?",["Động từ","Chủ ngữ","Tân ngữ"],1,"Subject = chủ ngữ."],
 ["Câu đơn nào có chủ ngữ và động từ?",["Healthy food!","In the morning.","My brother swims."],2,"My brother là chủ ngữ, swims là động từ."],
 ["The children ___ in the park.",["run","runs","running"],0,"The children là số nhiều, dùng run."],
 ["Câu đơn hoàn chỉnh là?",["Every day drink.","I drink water every day.","Because very tired."],1,"I drink water every day có chủ ngữ và vị ngữ."]
 ],lines:[
 ["My mother cooks healthy meals.","Mẹ mình nấu các bữa ăn lành mạnh."],
 ["I eat fruit every morning.","Mình ăn trái cây mỗi sáng."],
 ["My friends play sports after school.","Các bạn mình chơi thể thao sau giờ học."],
 ["We sleep eight hours each night.","Chúng mình ngủ tám tiếng mỗi tối."]
 ]},
 {q:[
 ["“Tip” trong bài nói về sức khỏe là gì?",["Bài kiểm tra","Trận đấu","Lời khuyên"],2,"Tip là lời khuyên."],
 ["Cách đưa lời khuyên lịch sự?",["You should get some rest.","You should to rest.","You resting should."],0,"Should + động từ nguyên mẫu."],
 ["You ___ drink enough water.",["shoulds","should","shoulding"],1,"Should không thêm -s."],
 ["Chọn câu giao tiếp phù hợp.",["I feeling headache.","I have headache are.","I have a headache."],2,"I have a headache là cách nói đau đầu."]
 ],lines:[
 ["You look tired today.","Hôm nay trông bạn mệt."],
 ["I did not sleep well last night.","Đêm qua mình ngủ không ngon."],
 ["You should go to bed earlier.","Bạn nên đi ngủ sớm hơn."],
 ["Thanks for your helpful advice.","Cảm ơn lời khuyên hữu ích."]
 ]},
 {q:[
 ["Đọc: “Anna walks to school every day.” Anna đi học thế nào?",["Đi bộ","Đi xe buýt","Đi ô tô"],0,"Walks to school nghĩa là đi bộ đến trường."],
 ["Chọn câu nói về sức khỏe.",["I healthy eat.","I eat healthy food.","Healthy I food eats."],1,"I eat healthy food là câu đầy đủ."],
 ["He ___ to bed before ten.",["go","going","goes"],2,"He goes to bed."],
 ["Câu nào đúng?",["Walking is good for your health.","Walking good your health.","Walking be good health."],0,"Walking là chủ ngữ, dùng is."]
 ],lines:[
 ["I walk to school every day.","Mình đi bộ đến trường mỗi ngày."],
 ["Walking keeps my body active.","Đi bộ giúp cơ thể vận động."],
 ["I eat fresh fruit after lunch.","Mình ăn trái cây tươi sau bữa trưa."],
 ["I feel stronger and happier.","Mình thấy khỏe và vui hơn."]
 ]},
 {q:[
 ["“Habit” nghĩa là gì?",["Bệnh","Thói quen","Thể thao"],1,"Habit là thói quen."],
 ["Chọn câu nêu thói quen.",["I every night brush teeth.","I brush often every night.","I brush my teeth every night."],2,"I brush my teeth every night."],
 ["She ___ enough water every day.",["drinks","drink","drinking"],0,"She drinks ở hiện tại đơn."],
 ["Câu nào đúng trong đoạn viết?",["I go to school on my bicycle every day.","I am go school bicycle.","I go every school bicycle."],0,"I go to school on my bicycle every day là câu đầy đủ."]
 ],lines:[
 ["Tell me about your daily habits.","Kể về thói quen hằng ngày của bạn."],
 ["I have breakfast at seven.","Mình ăn sáng lúc bảy giờ."],
 ["I ride my bike to school.","Mình đi xe đạp đến trường."],
 ["I usually sleep at nine thirty.","Mình thường ngủ lúc chín giờ rưỡi."]
 ]},
 {q:[
 ["“Exercise” nghĩa là gì?",["Tập thể dục","Kẹo","Mất ngủ"],0,"Exercise có nghĩa là tập thể dục."],
 ["Chọn lời khuyên đúng.",["You should eating well.","You should eat well.","You should eats well."],1,"Should + eat nguyên mẫu."],
 ["We ___ vegetables every day.",["eats","eating","eat"],2,"We eat ở thì hiện tại đơn."],
 ["Câu đơn nào đúng?",["My sister plays badminton.","My sister badminton play.","My sister playing badminton every."],0,"My sister plays badminton là câu đơn đúng."]
 ],lines:[
 ["Healthy habits are important.","Thói quen tốt rất quan trọng."],
 ["We should sleep enough hours.","Chúng ta nên ngủ đủ giờ."],
 ["We can exercise after school.","Chúng ta có thể tập sau giờ học."],
 ["Let's eat fresh food every day.","Hãy ăn thực phẩm tươi mỗi ngày."]
 ]},
 {q:[
 ["“Healthy lifestyle” là gì?",["Chuyến đi vui","Lối sống lành mạnh","Giờ học"],1,"Healthy lifestyle là lối sống lành mạnh."],
 ["Chọn tiêu đề poster phù hợp.",["Foods Give Sleep","My Best Teacher","Five Healthy Habits"],2,"Five Healthy Habits là tiêu đề phù hợp."],
 ["Our group ___ a health poster.",["makes","make","making"],0,"Our group là số ít, dùng makes."],
 ["Chọn câu thuyết trình đúng.",["We should to drink water.","We should drink water.","We should drinks water."],1,"Should + drink nguyên mẫu."]
 ],lines:[
 ["This is our healthy living poster.","Đây là poster sống khỏe của nhóm."],
 ["Drink plenty of water each day.","Hãy uống đủ nước mỗi ngày."],
 ["Remember to exercise and sleep well.","Nhớ tập thể dục và ngủ đủ."],
 ["Thank you for reading our poster.","Cảm ơn đã xem áp phích của chúng mình."]
 ]}
 ]
};
