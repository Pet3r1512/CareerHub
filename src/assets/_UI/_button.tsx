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
      className={twMerge(
        "bg-primary text-white font-semibold leading-none rounded-lg py-3 px-5",
        className
      )}
    >
      {content}
    </Button>
  );
}
