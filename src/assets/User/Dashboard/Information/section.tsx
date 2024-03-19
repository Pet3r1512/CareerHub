import { ReactNode } from "react";

export default function Section({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section>
      <p className="text-lg font-semibold">{title}</p>
      <div className={className}>{children}</div>
      <hr className="mt-8" />
    </section>
  );
}
