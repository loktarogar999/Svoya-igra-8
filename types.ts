
export interface Question {
  id: string;
  category: string;
  points: number;
  question: string;
  answer: string;
  hint?: string;
}

export interface Category {
  name: string;
  questions: Question[];
}

export interface GameState {
  visitedIds: Set<string>;
  currentQuestion: Question | null;
  isAnswerVisible: boolean;
  scores: number[];
  numTeams: number;
}
