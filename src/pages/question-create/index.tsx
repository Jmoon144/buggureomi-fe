import { Button } from "@/components/ui/button";
import RandomInput from "./components/RandomInput";
import { useState } from "react";
import buddle from "@/assets/bunddle.svg";
import { useHistory } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";

export default function QuestionCreate() {
  const history = useHistory();
  const [question, setQuestion] = useState<string>("");

  const handleChangeQuestion = (value: string) => {
    setQuestion(value);
  };

  return (
    <section className="flex flex-col items-center gap-4 grow justify-evenly h-screen">
      <p className="text-center text-white text-2xl">
        <b>나에 대한 질문</b>을
        <br />
        만들어볼까요?
      </p>

      <span className="text-center text-white text-sm font-extralight">
        만들기 어렵다면 준비된 질문을 활용해보세요!
      </span>
      <img src={buddle} className="w-40 h-40" alt="bundle" />
      <p className="text-center text-white text-xl font-nanum-dahaengce">
        대답을 담을 보따리에
        <br />
        어떤 문구를 붙일까요?
      </p>

      <div>
        <span className="text-white text-sm">질문하기</span>
        <RandomInput value={question} onChange={handleChangeQuestion} />
      </div>
      <div className="px-10 pb-10">
        <Button
          className="w-72 h-12"
          disabled={!question.trim().length}
          onClick={() => {
            history.push({
              pathname: "/question-create-detail",
              state: { content: question },
            });
          }}
          children={
            <div className="w-full flex flex-row items-center">
              <span className="grow">다음</span>
              <IoChevronForward className="shrink-0" />
            </div>
          }
        />
      </div>
    </section>
  );
}
