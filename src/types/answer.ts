export interface Answer {
  sender: string;
  content: string;
  colorCode: string;
  regDate: Date | string;
}

export interface Answers {
  answers: Answer[];
}
