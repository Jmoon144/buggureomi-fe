import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Marble } from "@/pages/answer-result/type/marble";
import { Button } from "../../ui/button";
import { useState } from "react";
import AnswerDeleteDialog from "./AnswerDeleteDialog";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  data: Marble;
};

export default function AnswerDetailDialog({ isOpen, onClose, data }: Props) {
  const [isDeleteAlertOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDialogToggle = () => {
    setIsDeleteDialogOpen(!isDeleteAlertOpen);
  };
  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{data.sender}님의 구슬</DialogTitle>
          </DialogHeader>
          <p>{data.content}</p>
          <Button onClick={handleDialogToggle} className="w-16 ml-auto">
            삭제
          </Button>
        </DialogContent>
      </Dialog>

      <AnswerDeleteDialog
        isOpen={isDeleteAlertOpen}
        onClose={handleDialogToggle}
      />
    </>
  );
}
