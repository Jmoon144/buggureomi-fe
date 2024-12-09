import { AxiosResponse } from "axios";
import { api } from "..";
import * as T from "./type";

export const answer = {
  create: async (
    param: T.AnswerCreateParam
  ): Promise<AxiosResponse<T.AnswerCreateResponse>> => {
    const res = await api.post("/answer", param);

    return res;
  },
  list: async (
    memberId: string
  ): Promise<AxiosResponse<T.AnswerListResponse>> => {
    const res = await api.get(`/answer/${memberId}/list`);

    return res;
  },
  selfReflection: async (
    memberId: string
  ): Promise<AxiosResponse<T.SelfReflectionAnswerResponse>> => {
    const res = await api.get(`/self-reflection/${memberId}/list`);
    return res;
  },
};
