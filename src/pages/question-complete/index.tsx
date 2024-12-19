import { Button } from "@/components/ui/button";
import { useHistory } from "react-router-dom";
import mascot_back from "@/assets/mascot_back.svg";
import { FaLink } from "react-icons/fa6";

export default function QuestionComplete() {
  const history = useHistory();

  return (
    <section className="flex flex-col items-center gap-4 justify-evenly h-screen">
      <p className="text-center text-white text-2xl">
        <b>보따리가 완성되었어요!</b>
        <br />
        질문을 공유해볼까요?
      </p>

      <img src={mascot_back} className="w-40 h-40" alt="bundle" />

      <div className="flex flex-col gap-4">
        <Button
          className="w-72 h-12"
          onClick={() => {
            history.push("/main");
          }}
          children={"완료"}
        />
        <Button
          className="w-72 h-12 bg-white"
          onClick={() => {
            history.push("/main");
          }}
          children={
            <div className="w-full flex flex-row items-center justify-center gap-2">
              <FaLink
                color="#667EF5"
                size={25}
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
              <span className="text-[#667EF5]">링크 공유하기</span>
            </div>
          }
        />
      </div>
    </section>
  );
}
