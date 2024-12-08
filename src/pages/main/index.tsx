import { getRandomIndex } from "@/lib/utils";
import { Answer } from "@/types/answer";
import WithoutAnswer from "./components/WithoutAnswer";
import WithAnswer from "./components/WithAnswer";
import { MOCK_MEMBER } from "../_mock/data/member";

export default function Main() {
  const answers: Answer[] = [
    {
      sender: "someone",
      content: "힘내세요",
      colorCode: "#ffffff",
      regDate: "",
    },
    {
      sender: "anyone",
      content: "밥 먹으세요",
      colorCode: "#000000",
      regDate: "",
    },
  ];

  const answerCount = answers.length;
  const previewMessage = answers[getRandomIndex(answers)];

  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <h2 className="font-bold text-2xl mb-2">
        {MOCK_MEMBER.nickname}님의 보따리
      </h2>
      {answerCount < 1 ? (
        <WithoutAnswer />
      ) : (
        <WithAnswer answerCount={answerCount} previewMessage={previewMessage} />
      )}
    </section>
  );
}
