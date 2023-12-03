import { twMerge } from "tailwind-merge";

export default function Logo({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "font-mono font-extrabold text-3xl text-primary cursor-default",
        className
      )}
    >
      JobParadise
    </div>
  );
}
