import ShareButton from "@/components/share/ShareButton";
import { Button } from "@/components/ui/button";
import { MEMBER_ID_KEY } from "@/constant/keys";

export default function QuestionCreateComplete() {
  const memberId = localStorage.getItem(MEMBER_ID_KEY);
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-center">
        <p className="font-bold text-xl">짜잔!!</p>
        <p className="font-bold text-sm">질문 보따리가 완성됐어요!</p>
      </div>

      <div className="flex flex-col items-center gap-1">
        {/** 구역을 잡기위한 임시 영역입니다. 삭제 예정 */}
        <div className="w-36 h-36 border-2">image</div>
        <p className="font-bold text-xs">
          답변 구슬을 받고 싶은 사람에게 공유해 보세요!
        </p>
      </div>

      <div className="flex gap-1">
        <Button>메인 이동</Button>
        {memberId && <ShareButton memberId={memberId} />}
      </div>
    </div>
  );
}
