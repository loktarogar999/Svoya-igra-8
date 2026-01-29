
import { Category } from './types';

export const GAME_DATA: Category[] = [
  {
    name: "Grammar Power",
    questions: [
      { id: "g1", category: "Grammar Power", points: 100, question: "Change the sentence to Past Simple: 'I go to school every day.'", answer: "I went to school every day.", hint: "Go is an irregular verb." },
      { id: "g2", category: "Grammar Power", points: 200, question: "Complete the sentence: 'If I ___ (be) you, I would study harder.'", answer: "were", hint: "This is the Second Conditional." },
      { id: "g3", category: "Grammar Power", points: 300, question: "Identify the tense: 'I have just finished my homework.'", answer: "Present Perfect", hint: "It uses 'have' + V3." },
      { id: "g4", category: "Grammar Power", points: 400, question: "What is the comparative form of the adjective 'GOOD'?", answer: "Better", hint: "Good -> Better -> The best." },
      { id: "g5", category: "Grammar Power", points: 500, question: "Correct the sentence: 'She don't likes apples.'", answer: "She doesn't like apples.", hint: "Use 'does' for 3rd person singular." }
    ]
  },
  {
    name: "Kazakh Culture",
    questions: [
      { id: "k1", category: "Kazakh Culture", points: 100, question: "What is the traditional nomadic house called?", answer: "Yurt (Kiyiz ui)", hint: "It is round and portable." },
      { id: "k2", category: "Kazakh Culture", points: 200, question: "When do we celebrate Nauryz?", answer: "March 21st or 22nd", hint: "It's the spring equinox." },
      { id: "k3", category: "Kazakh Culture", points: 300, question: "Who wrote 'The Words of Edification' (Kara Sozder)?", answer: "Abai Kunanbayev", hint: "The greatest Kazakh poet and philosopher." },
      { id: "k4", category: "Kazakh Culture", points: 400, question: "What instrument is the 'Khui' usually played on?", answer: "Dombra", hint: "A two-stringed instrument." },
      { id: "k5", category: "Kazakh Culture", points: 500, question: "What is the name of the gold-clad warrior found in the Issyk kurgan?", answer: "The Golden Man (Altyn Adam)", hint: "He wore thousands of gold ornaments." }
    ]
  },
  {
    name: "Landmarks",
    questions: [
      { id: "l1", category: "Landmarks", points: 100, question: "Where is the Big Ben located?", answer: "London (United Kingdom)", hint: "It's part of the Houses of Parliament." },
      { id: "l2", category: "Landmarks", points: 200, question: "What is the tallest tower in Almaty called?", answer: "Kok Tobe TV Tower", hint: "It's on a hill with a cable car." },
      { id: "l3", category: "Landmarks", points: 300, question: "Which famous spaceport is located in Kazakhstan?", answer: "Baikonur Cosmodrome", hint: "Gagarin flew from here." },
      { id: "l4", category: "Landmarks", points: 400, question: "What is the name of the futuristic tent-shaped mall in Astana?", answer: "Khan Shatyr", hint: "Designed by Norman Foster." },
      { id: "l5", category: "Landmarks", points: 500, question: "In which US city can you find the Statue of Liberty?", answer: "New York City", hint: "It was a gift from France." }
    ]
  },
  {
    name: "Vocabulary",
    questions: [
      { id: "v1", category: "Vocabulary", points: 100, question: "What is the opposite of 'GENEROUS'?", answer: "Selfish / Mean / Stingy", hint: "Someone who doesn't like sharing." },
      { id: "v2", category: "Vocabulary", points: 200, question: "What do you call a person who travels to space?", answer: "Astronaut (or Cosmonaut)", hint: "Think of rockets." },
      { id: "v3", category: "Vocabulary", points: 300, question: "Give a synonym for the word 'BEAUTIFUL'.", answer: "Pretty / Gorgeous / Lovely / Attractive", hint: "Something nice to look at." },
      { id: "v4", category: "Vocabulary", points: 400, question: "What is the English word for 'Шаттық' (Joy)?", answer: "Joy / Happiness / Delight", hint: "A very positive emotion." },
      { id: "v5", category: "Vocabulary", points: 500, question: "How do you call a book that tells about someone's life?", answer: "Biography / Autobiography", hint: "Bio means life." }
    ]
  },
  {
    name: "General English",
    questions: [
      { id: "e1", category: "General English", points: 100, question: "What is the capital of the United Kingdom?", answer: "London", hint: "River Thames flows there." },
      { id: "e2", category: "General English", points: 200, question: "Who is the author of Harry Potter books?", answer: "J.K. Rowling", hint: "She is a British novelist." },
      { id: "e3", category: "General English", points: 300, question: "How many states are there in the USA?", answer: "50", hint: "Same as the stars on the flag." },
      { id: "e4", category: "General English", points: 400, question: "What holiday is celebrated on October 31st?", answer: "Halloween", hint: "Pumpkins and costumes." },
      { id: "e5", category: "General English", points: 500, question: "Which river flows through London?", answer: "The River Thames", hint: "Starts with letter T." }
    ]
  }
];
