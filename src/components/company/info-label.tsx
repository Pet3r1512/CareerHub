import { ReactNode } from "react";

export default function InfoLabel({
  children,
  title,
  content,
}: {
  children: ReactNode;
  title: string;
  content: string | number;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="rounded-full w-fit p-2 border border-gray-500">
        {children}
      </div>
      <div>
        <p className="text-gray-dark">{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}
