import { twMerge } from "tailwind-merge";
import ButtonBlock from "../_button";

export default function Auth({ className }: { className?: string }) {
  return (
    <div className={twMerge("items-center gap-5 flex", className)}>
      <ButtonBlock
        className="bg-white text-primary font-bold"
        content="Login"
      />
      <ButtonBlock content="Sign Up" />
    </div>
  );
}
