import { api } from "..";
import * as T from "./type";

export async function getAnswerList(
  memberId: string
): Promise<T.AnswerListResponse> {
  const res = await api.get(`/answer/${memberId}/list`);

  return res.data;
}

export async function getSelfReflectionAnswer(
  memberId: string
): Promise<T.SelfReflectionAnswerResponse> {
  const res = await api.get(`/self-reflection/${memberId}/list`);
  return res.data;
}
