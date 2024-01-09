import { Badge } from "@/components/ui/badge";

interface IProps {
  content: string;
  variant: "secondary" | "outline";
}

export default function CustomizeBadge({ content, variant }: IProps) {
  let badgeColorClass;

  switch (content) {
    case "Technology":
      badgeColorClass = `${
        variant == "outline" ? "border border-[#5e67a3]" : "bg-[#5e67a3]/20"
      } text-[#5e67a3]`;
      break;
    case "Engineering":
      badgeColorClass = `${
        variant == "outline" ? "border border-[#8ab15e]" : "bg-[#8ab15e]/20"
      } text-[#8ab15e]`;
      break;
    case "Marketing":
      badgeColorClass = `${
        variant == "outline" ? "border border-[#b95e5e]" : "bg-[#b95e5e]/20"
      } text-[#b95e5e]`;
      break;
    case "Social Media":
      badgeColorClass = `${
        variant == "outline" ? "border border-[#589b87]" : "bg-[#589b87]/20"
      } text-[#589b87]`;
      break;
    case "Analytics":
      badgeColorClass = `${
        variant == "outline" ? "border border-[#a0567e]" : "bg-[#a0567e]/20"
      } text-[#a0567e]`;
      break;
    case "Design":
      badgeColorClass = `${
        variant == "outline" ? "border border-[#7e8bb1]" : "bg-[#7e8bb1]/20"
      } text-[#7e8bb1]`;
      break;
    case "Customer Service":
      badgeColorClass = `${
        variant == "outline" ? "border border-[#b17e8b]" : "bg-[#b17e8b]/20"
      } text-[#b17e8b]`;
      break;
    case "Project Management":
      badgeColorClass = `${
        variant == "outline" ? "border border-[#a3a05e]" : "bg-[#a3a05e]/20"
      } text-[#a3a05e]`;
      break;
    case "Sales":
      badgeColorClass = `${
        variant == "outline" ? "border border-[#5e86a0]" : "bg-[#5e86a0]/20"
      } text-[#5e86a0]`;
      break;
    case "Human Resources":
      badgeColorClass = `${
        variant == "outline" ? "border border-[#b1585e]" : "bg-[#b1585e]/20"
      } text-[#b1585e]`;
      break;
    case "Content Writing":
      badgeColorClass = `${
        variant == "outline" ? "border border-[#7e7ea0]" : "bg-[#7e7ea0]/20"
      } text-[#7e7ea0]`;
      break;
    case "Communication":
      badgeColorClass = `${
        variant == "outline" ? "border border-[#16a085]" : "bg-[#16a085]/20"
      } text-[#16a085]`;
      break;
    case "Finance":
      badgeColorClass = `${
        variant == "outline" ? "border border-[#f1c40f]" : "bg-[#f1c40f]/20"
      } text-[#f1c40f]`;
      break;
    case "Accounting":
      badgeColorClass = `${
        variant == "outline" ? "border border-[#8e44ad]" : "bg-[#8e44ad]/20"
      } text-[#8e44ad]`;
      break;
    case "Research":
      badgeColorClass = `${
        variant == "outline" ? "border border-[#3498db]" : "bg-[#3498db]/20"
      } text-[#3498db]`;
      break;
    case "Networking":
      badgeColorClass = `${
        variant == "outline" ? "border border-[#e74c3c]" : "bg-[#e74c3c]/20"
      } text-[#e74c3c]`;
      break;
    case "Security":
      badgeColorClass = `${
        variant == "outline" ? "border border-[#f39c12]" : "bg-[#f39c12]/20"
      } text-[#f39c12]`;
      break;
    default:
      badgeColorClass = "bg-gray-500";
      break;
  }

  return (
    <Badge
      variant={variant}
      className={`p-1 px-3 ${badgeColorClass}`}
      color={badgeColorClass}
    >
      {content}
    </Badge>
  );
}
