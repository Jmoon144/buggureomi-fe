import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { toggleIsShowAnswerCountOption } from "./api/pouch";
import { BUNDEL_IMAGE_URL } from "@/constant/image";

export default function QuestionCreateDetail() {
  const [isShowAnswerCount, setIsShowAnswerCount] = useState<boolean>(false);

  const handleClick = () => {
    toggleIsShowAnswerCountOption();
  };

  return (
    // section or form submit
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="font-bold text-center mb-2">
        <p>거의 다 왔어요!</p>
        <p>디테일을 잡아볼까요?</p>
      </div>
      <div className="w-36 mb-2">
        <img src={BUNDEL_IMAGE_URL} className="w-full h-full" />
      </div>

      <div className="flex items-center mb-6 gap-x-2">
        <Label htmlFor="show-answer-counts" className="font-bold">
          내 보따리에 담긴 답변 갯수가 보이게 할까요?
        </Label>
        <Switch
          id="show-answer-counts"
          onCheckedChange={setIsShowAnswerCount}
          checked={isShowAnswerCount}
        />
      </div>
      <Button onClick={handleClick}>질문 생성</Button>
    </section>
  );
}
