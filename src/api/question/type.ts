import { BaseResponse } from "../type";

export type QuestionCreateParam = {
  content: string;
  commonQuestionType: "SELF" | "SYSTEM";
};

export type QuestionCreateResponse = BaseResponse;
