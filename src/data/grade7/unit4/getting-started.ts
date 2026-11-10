export type Question = { id: string; prompt: string; options: string[]; correctIndex: number; explanation: string };
export const lesson = {
  unit: 4,
  title: 'Music and Arts',
  lesson: 'Getting Started',
  subtitle: 'A Talk at the School Gate',
  videoId: 'DmC6anEExVg',
  objectives: ['Recognize vocabulary related to music and art', 'Understand the main idea of a school-gate conversation', 'Express a preference with like and different from'],
  vocabulary: [
    { word: 'art gallery', meaning: 'phòng trưng bày nghệ thuật' },
    { word: 'musical instruments', meaning: 'nhạc cụ' },
    { word: 'painting', meaning: 'bức tranh' },
    { word: 'water puppet show', meaning: 'múa rối nước' },
    { word: 'different from', meaning: 'khác với' },
  ],
  questions: [
    { id: 'q1', prompt: 'Which topic is the conversation about?', options: ['Sports', 'Food', 'Music and arts', 'Travel'], correctIndex: 2, explanation: 'The lesson focuses on music and arts.' },
    { id: 'q2', prompt: 'Where can you see paintings on display?', options: ['An art gallery', 'A stadium', 'A supermarket', 'A bus stop'], correctIndex: 0, explanation: 'An art gallery is a place where artwork is displayed.' },
    { id: 'q3', prompt: 'Choose the correct phrase: My taste in music is ___ yours.', options: ['different from', 'different on', 'different to be', 'different at'], correctIndex: 0, explanation: 'Different from is a common comparison structure.' },
  ] as Question[],
};
