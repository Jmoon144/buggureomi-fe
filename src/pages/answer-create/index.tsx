import { useState, useMemo, useCallback, ChangeEvent } from "react";
import { useLocation } from "react-router-dom";

import { answerAPI } from "@/api/answer";
import { memberAPI } from "@/api/member";

import { Button } from "@/components/ui/button";

import { DirectLogin } from "@/components/display/DirectLogin";

import { COLOR_CODE_LIST } from "@/constant/color";

import { useUserStore } from "@/store/userStore";
import { Bead } from "@/components/bead/Bead";
import { IoChevronForward } from "react-icons/io5";

const colorGroups = [
  ["EF4C4D", "FF884D", "FFC44E", "89C94D", "0A8403"],
  ["4DC3FF", "3451E3", "A071FF", "832AFE", "FF4DA5"],
  ["FFC088", "BD6C41", "FFFFFF", "8E8E8E", "000000"],
];

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function AnswerCreate() {
  const query = useQuery();

  // TODO: questionId로 질문 정보 조회하는 api 연결 필요
  const questionId = query.get("questionId") as string;

  const [colorCode, setColorCode] = useState<string | undefined>(undefined);
  const [content, setContent] = useState<string>("");
  const [userNickname, setUserNicname] = useState<string>("");
  const [senderName, setSenderName] = useState<string>("");

  const handleAnswerChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const inputText = e.target.value;
      if (inputText.length <= 300) {
        setContent(inputText);
      }
    },
    []
  );

  const { userId } = useUserStore();

  if (!userId) {
    // TODO: 추후 질문에 설정된 옵션에 따라 login 체크 여부 나뉘도록 설정 필요
    return <DirectLogin />;
  }

  const sendAnswer = async () => {
    await memberAPI.search(userId).then((res) => {
      const userInfo = res.data.data;
      setUserNicname(userInfo.nickname);

      answerAPI.create({
        memberId: userId,
        questionId: questionId,
        nickname: userNickname,
        sender: senderName,
        content,
        colorCode: colorCode ?? COLOR_CODE_LIST[0],
      });
    });
  };

  return (
    <section className="h-screen flex flex-col items-center gap-[24px]">
      <div className="flex flex-col items-center ">
        <p className="text-center text-white text-xl">
          000님이
          <br />
          답변을 기다려요!
        </p>
        <div className="flex items-center justify-center w-full h-10 text-center rounded-md text-xs">
          <span className="text-[#CFD2E4]">난 올해 어떤 사람이였어?</span>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-4">
        {colorGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="flex gap-1">
            {group.map((color) => (
              <Bead
                key={color}
                color={`#${color}`}
                size={36}
                selected={colorCode === color}
                onClick={() => setColorCode(color)}
              />
            ))}
          </div>
        ))}

        <p className="text-center text-white text-xl font-nanum-dahaengce">
          어떤 색상의 구슬로
          <br />
          답변을 할까요?
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-white text-xs font-medium">답변 작성</h2>
            <span className="text-white text-sm">
              ({content.length}/{300})
            </span>
          </div>
          <textarea
            value={content}
            onChange={handleAnswerChange}
            placeholder="답변 작성"
            maxLength={300}
            className="w-full p-4 rounded-2xl bg-white resize-none h-32 placeholder:text-gray-400 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div>
          <h2 className="text-white text-xs font-medium mb-2">보내는 사람</h2>
          <input
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="이름 입력"
            className="w-full rounded-2xl bg-white h-10 px-4 placeholder:text-gray-400 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>
      <div className="flex w-full	justify-center">
        <Button
          className="w-72 h-12 mt-[0.5rem] text-[#F3F3F3] bg-[#667EF5]"
          children={
            <div className="w-full flex flex-row items-center">
              <span className="grow">다음</span>
              <IoChevronForward className="shrink-0" />
            </div>
          }
          onClick={sendAnswer}
        />
      </div>
    </section>
  );
}
