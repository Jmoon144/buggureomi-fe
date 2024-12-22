import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnswerDescButtonSheet } from "./answer-desc-botton-sheet/AnswerDescBottonSheet";
import { AnswerStartButton } from "./answer-start-botton-sheet/AnswerStartBottonSheet";
import { useUserStore } from "@/store/userStore";
import { DirectLogin } from "@/components/display/DirectLogin";

export function Answer() {
  const [selectedType, setSelectedType] = useState<"DESC" | "START" | null>(
    null
  );

  const { userId } = useUserStore();

  if (!userId) {
    // TODO: 추후 질문에 설정된 옵션에 따라 login 체크 여부 나뉘도록 설정 필요
    return <DirectLogin />;
  }

  return (
    <>
      <div className="flex flex-col items-center mt-20 text-white overflow-hidden min-h-[30rem]">
        <div className="text-center mb-2">
          <p className="text-lg font-light">OOO에게서</p>
          <p className="text-lg font-light">질문 보따리가 왔어!</p>
        </div>
        <div className="relative w-full flex justify-center items-center">
          <div className="absolute  md:w-96 lg:w-[30rem] top-36 z-[auto]">
            <img
              src="/images/arrow.png"
              alt="arrow"
              className="w-full h-auto"
            />
          </div>
          <div className="relative w-96 h-96 translate-x-[40%]">
            <img
              src="/images/bear.png"
              alt="Bear"
              className="w-full h-full object-contain rotate-[-45deg]"
            />
          </div>
        </div>
      </div>
      <div className="p-[2.5rem]">
        <div className="flex flex-col gap-4">
          <Button
            className="w-72 h-12"
            onClick={() => setSelectedType("DESC")}
            children={"보따리와 구슬 알기"}
          />
          <Button
            className="w-72 h-12 bg-white"
            onClick={() => setSelectedType("START")}
            children={
              <div className="w-full flex flex-row items-center justify-center gap-2">
                <span className="text-[#667EF5]">그냥 시작하기</span>
              </div>
            }
          />
        </div>
      </div>
      {selectedType === "DESC" && (
        <AnswerDescButtonSheet
          onClose={() => setSelectedType(null)}
          onStart={() => {
            setSelectedType("START");
          }}
        />
      )}
      {selectedType === "START" && (
        <AnswerStartButton
          onClose={() => setSelectedType(null)}
          onBack={() => {
            setSelectedType("DESC");
          }}
          onClick={() => {
            // 로그인 화면
          }}
        />
      )}
    </>
  );
}
