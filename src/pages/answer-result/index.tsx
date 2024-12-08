import { useState } from "react";

import AnswerList from "@/components/answer/AnswerList";
import AnswerDetailDialog from "@/components/answer/dialog/AnswerDetailDialog";

import { Marble } from "./type/marble";

import dummyData from "@/components/answer/dummy.json";

export default function AnswerResult() {
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Marble | null>(null);

  const handleDialogToggle = (marble?: Marble) => {
    setIsDetailDialogOpen(!isDetailDialogOpen);

    if (marble) {
      setSelectedItem(marble);
    }
  };

  return (
    <>
      <div>
        <div className="text-center pt-20 pb-10 mb-3">
          <h2 className="text-h2 text-primary">사용자님의 보따리</h2>
          <h5 className="text-h5">
            {dummyData.answerData.length}개의 답변이 담겨 있어요!
          </h5>
        </div>
        <AnswerList
          listData={dummyData.answerData}
          onDialogOpen={handleDialogToggle}
        />
      </div>
      {selectedItem && (
        <AnswerDetailDialog
          isOpen={isDetailDialogOpen}
          onClose={handleDialogToggle}
          data={selectedItem}
        />
      )}
    </>
  );
}
