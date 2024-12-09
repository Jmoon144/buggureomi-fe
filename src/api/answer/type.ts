import { BaseResponse } from "../type";
import { Answer } from "@/types/answer";
import { SelfReflection } from "@/types/self-reflection";

export type AnswerCreateParam = {
  memberId: number;
  questionId: number;
  nickname: string;
  sender: string;
  content: string;
  colorCode: string;
};

export type AnswerCreateResponse = BaseResponse<{
  nickname: string;
  questionContent: string;
  colorCode: string;
}>;

export type AnswerListResponse = BaseResponse<{
  list: Answer[];
  nickname: string;
  totalCount: number;
}>;

export type SelfReflectionAnswerResponse = BaseResponse<SelfReflection>;
