import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

export default function JobCapacityProgress({
  applied,
  capacity,
  containerClassName,
  className,
  isButton = true,
}: {
  applied: number;
  capacity: number;
  containerClassName?: string;
  className?: string;
  isButton?: boolean;
}) {
  const progressValue = (applied * 100) / capacity;
  return (
    <div className={twMerge("flex gap-4", containerClassName)}>
      <Button
        className={twMerge("text-white px-8", isButton == true ? "" : "hidden")}
      >
        Apply
      </Button>
      <div
        className={twMerge(
          "flex flex-col items-center justify-center gap-2 text-sm",
          className
        )}
      >
        <Progress
          value={progressValue}
          className="h-2 bg-gray-300 w-full"
          indicatorColor="bg-green"
        />
        <p>
          <strong>{applied} applied </strong>of {capacity} capacity
        </p>
      </div>
    </div>
  );
}
