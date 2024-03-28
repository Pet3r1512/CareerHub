import { CheckCircle2 } from "lucide-react";

export default function Content({ item }: { item: string }) {
  return (
    <div className="flex gap-2">
      <CheckCircle2 size={20} className="text-green w-fit" />
      <p className="flex-1">{item}</p>
    </div>
  );
}
