import { twMerge } from "tailwind-merge";
import Link from "next/link";

export default function Menu({ className }: { className?: string }) {
  return (
    <ul
      className={twMerge(
        "text-gray lg:flex gap-4 text-lg font-semibold hidden",
        className
      )}
    >
      <li>
        <Link href="/jobs">Find Jobs</Link>
      </li>
      <li>
        <Link href="/companies">Browse Companies</Link>
      </li>
    </ul>
  );
}
