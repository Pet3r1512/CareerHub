import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactNode } from "react";

export default function UserDashboardSectionLayout({
  sectionTitle,
  children,
}: {
  sectionTitle: string;
  children: ReactNode;
}) {
  return (
    <ScrollArea className="w-full h-full pt-8 lg:pt-0">
      <div className="p-6 flex flex-col gap-y-4 h-full scroll-smooth">
        <h1 className="text-4xl font-extrabold cursor-default">
          {sectionTitle}
        </h1>
        {children}
      </div>
    </ScrollArea>
  );
}
