import { AxiosResponse } from "axios";
import { api } from "..";
import * as T from "./type";

export const question = {
  create: async (
    param: T.QuestionCreateParam
  ): Promise<AxiosResponse<T.QuestionCreateResponse>> => {
    const res = await api.post("/answer", param);

    return res;
  },
};
