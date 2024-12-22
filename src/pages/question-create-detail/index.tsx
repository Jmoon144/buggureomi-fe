import { useHistory, useLocation } from "react-router-dom";
import { DirectLogin } from "@/components/display/DirectLogin";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { QuestionBundle } from "@/components/question/QuestionBundle";
import { questionAPI } from "@/api/question";
import { useUserStore } from "@/store/userStore";

interface QuestionContent {
  content: string; // question의 타입에 따라 변경
}

export default function QuestionCreateDetail() {
  // const { state } = useLocation<{ content: string }>();
  const history = useHistory();
  const location = useLocation();
  const content = (location.state as QuestionContent)?.content;

  const { userId } = useUserStore();

  if (!userId) {
    return <DirectLogin />;
  }

  const handleClick = () => {
    // TODO: Token 구현 후 API 접목 예정
    questionAPI
      .create({
        memberId: userId,
        content: content,
        isPublicVisible: 1,
        isCountVisible: 1,
        isAuthRequired: 1,
        isCommonQuestion: 1,
      })
      .then((res) => {
        history.push({
          pathname: "/question-complete",
          state: { questionId: res.data.data.questionId },
        });
      });
  };

  return (
    <section className="flex flex-col items-center gap-4 justify-evenly h-screen">
      <p className="text-center text-white text-2xl">
        <b>거의 다 왔어요!</b>
        <br />
        디테일을 잡아볼까요?
      </p>
      <QuestionBundle value={content} />
      <div className="flex w-full flex-col gap-6">
        <div className="flex items-center gap-x-2 justify-between">
          <Label
            htmlFor="show-answer-counts"
            className="font-bold text-sm text-white"
          >
            구슬(답변) 개수 공개
          </Label>
          <Switch id="show-answer-counts" checked={true} disabled={true} />
        </div>
        <div className="flex items-center gap-x-2 justify-between">
          <Label
            htmlFor="is-auth-required"
            className="font-bold text-sm text-white"
          >
            로그인 유저만 답변 가능
          </Label>
          <Switch id="is-auth-required" checked={true} disabled={true} />
        </div>
        <div className="flex items-center gap-x-2 justify-between">
          <Label
            htmlFor="is-public-visible"
            className="font-bold text-sm text-white"
          >
            다른 유저 조회 가능
          </Label>
          <Switch id="is-public-visible" checked={true} disabled={true} />
        </div>
      </div>
      <Button className="w-72 h-12" onClick={handleClick} children={"만들기"} />
    </section>
  );
}
