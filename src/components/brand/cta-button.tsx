import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  className?: string
};

export const CTAButton = ({ className }: CTAButtonProps) => {
  const navigator = useNavigate();

  return (
    <Button
      size="sm"
      onClick={() => {
        navigator({ to: "/" });
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.getElementById("waitlist-form")?.focus();
      }}
      className={cn(className)}
    >
      Join waitlist
    </Button>
  );
};
