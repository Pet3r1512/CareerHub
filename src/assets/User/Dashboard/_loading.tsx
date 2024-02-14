import { CircleDashed } from "lucide-react";

export default function DashboardLoading() {
  return (
    <div className="w-ful h-full flex items-center justify-center">
      Loading <CircleDashed className="animate-spin" />
    </div>
  );
}
