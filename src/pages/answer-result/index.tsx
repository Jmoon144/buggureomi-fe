import { QuestionBundle } from "@/components/question/QuestionBundle";
import { Button } from "@/components/ui/button";
import { FaBell } from "react-icons/fa";

export default function AnswerResult() {
  return (
    <>
      <div className="min-h-[30rem]">
        <div className="text-center pt-20 pb-10 mb-3">
          <p className="text-center text-white text-xl">
            000님의 보따리에
            <br />
            00번째 구슬이 담겼어요!
          </p>
          <div className="flex items-center justify-center w-full h-10 text-center rounded-md text-xs">
            <span className="text-[#CFD2E4]">난 올해 어떤 사람이였어?</span>
          </div>
        </div>
        <QuestionBundle value={"난 올해 어떤사람이었어?"} />
        <div className="flex w-full	justify-center mt-[0.5rem]">
          <div className="flex px-[1rem] text-[small] py-[0.625rem] items-center justify-center rounded-[0.75rem] h-[2.5rem] w-[9.5625rem] bg-[#414B79] text-white">
            친구 보따리 열어보기
          </div>
        </div>
      </div>
      <div className="p-[2.5rem]">
        <div className="flex w-full	justify-center ">
          <Button
            className="w-72 h-12 mt-[2rem]"
            children={"나도 보따리 만들러 가기"}
          />
        </div>
        <div className="flex w-full	justify-center">
          <Button
            className="w-72 h-12 mt-[0.5rem] text-[#667EF5] bg-[#F3F3F3]"
            children={
              <div className="w-auto gap-[0.625rem] flex flex-row items-center">
                <FaBell className="shrink-0" />
                <span className="grow">보따리 주이에게 알려주기</span>
              </div>
            }
          />
        </div>
      </div>
    </>
  );
}
