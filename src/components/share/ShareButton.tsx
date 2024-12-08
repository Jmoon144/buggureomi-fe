import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type Props = {
  className?: string;
};

export default function ShareButton({ className }: Props) {
  const copyShareLinkAddress = () => {};

  return (
    <Button onClick={copyShareLinkAddress} className={cn(className)}>
      공유하기
    </Button>
  );
}
