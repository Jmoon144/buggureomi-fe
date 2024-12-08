interface Answer {
  hashNumber: number;
  content: string;
}

export interface SelfReflection {
  type: 0 | 1; // 안작성됨 | 작성됨
  list: Answer[];
  regDate: Date | string;
}
