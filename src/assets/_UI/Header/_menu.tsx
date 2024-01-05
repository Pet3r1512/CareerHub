import { twMerge } from "tailwind-merge";

export default function Menu({ className }: { className?: string }) {
  return (
    <ul
      className={twMerge(
        "text-gray lg:flex gap-4 text-lg font-semibold hidden",
        className
      )}
    >
      <li>
        <a href="#">Find Jobs</a>
      </li>
      <li>
        <a href="#">Browse Companies</a>
      </li>
    </ul>
  );
}
