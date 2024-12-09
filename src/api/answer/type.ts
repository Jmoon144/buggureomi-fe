import { Answer } from "@/types/answer";
import { SelfReflection } from "@/types/self-reflection";

export type AnswerListResponse = {
  status: "OK" | "BAD_REQUEST";
  message: string;
  data: {
    list: Answer[];
    nickname: string;
    totalCount: number;
  };
};

export type SelfReflectionAnswerResponse = {
  status: "OK" | "BAD_REQUEST";
  message: string;
  data: SelfReflection;
};
