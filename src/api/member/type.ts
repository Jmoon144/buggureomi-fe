export type MemberJoinParam = {
  nickname: string;
  password: string;
  email: `${string}@${string}`;
};

export type MemberJoinResponse = {
  status: "OK" | "BAD_REQUEST";
  message: string;
};

export type MemberLoginParam = {
  nickname: string;
  password: string | number;
};

export type MemberLoginResponse = {
  status: "OK" | "BAD_REQUEST";
  message: string;
  data: {
    id: number;
  };
};
