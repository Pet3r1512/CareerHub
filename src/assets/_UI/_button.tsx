import { Button } from "@material-tailwind/react";
import { twMerge } from "tailwind-merge";

export default function ButtonBlock({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <Button
      placeholder=""
      className={twMerge(
        "bg-primary text-white font-semibold leading-none rounded-lg text-[13px] py-3 px-5",
        className
      )}
    >
      {content}
    </Button>
  );
}
