import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { twMerge } from "tailwind-merge";

export default function TooltipContainer({
  children,
  message,
  messageClassName,
}: {
  children: ReactNode;
  message: string;
  messageClassName?: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className={twMerge("sm:hidden", messageClassName)}>
          <p>{message}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
