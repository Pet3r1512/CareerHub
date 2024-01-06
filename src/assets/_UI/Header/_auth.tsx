import { twMerge } from "tailwind-merge";
import ButtonBlock from "../_button";
import Link from "next/link";

export default function Auth({ className }: { className?: string }) {
  return (
    <div className={twMerge("items-center gap-5 flex", className)}>
      <Link href="/auth/signin">
        <ButtonBlock
          className="bg-white text-primary font-bold"
          content="Login"
        />
      </Link>
      <Link href={"/auth/signup"}>
        <ButtonBlock content="Sign Up" />
      </Link>
    </div>
  );
}
