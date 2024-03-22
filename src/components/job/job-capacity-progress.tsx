import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

export default function JobCapacityProgress({
  applied,
  capacity,
  className,
}: {
  applied: number;
  capacity: number;
  className?: string;
}) {
  const progressValue = (applied * 100) / capacity;
  return (
    <div className={twMerge("flex gap-4", className)}>
      <Button className="text-white px-8">Apply</Button>
      <div className="flex flex-col items-center justify-center gap-2 text-sm">
        <Progress
          value={progressValue}
          className="h-2 bg-gray-300"
          indicatorColor="bg-green"
        />
        <p>
          <strong>{applied} applied </strong>of {capacity} capacity
        </p>
      </div>
    </div>
  );
}
