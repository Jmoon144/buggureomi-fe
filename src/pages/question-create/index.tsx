import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { toggleIsShowAnswerCountOption } from "./api/pouch";

export default function QuestionCreate() {
  const [isShowAnswerCount, setIsShowAnswerCount] = useState<boolean>(false);

  const handleClick = () => {
    toggleIsShowAnswerCountOption();
  };

  return (
    // section or form submit
    <section className="flex flex-col items-center">
      <Switch
        id="show-answer-counts"
        onCheckedChange={setIsShowAnswerCount}
        checked={isShowAnswerCount}
      />
      <Label htmlFor="show-answer-counts">
        내 보따리에 담긴 답변 갯수가 보이게 할까요?
      </Label>
      <Button onClick={handleClick}>질문 생성</Button>
    </section>
  );
}
