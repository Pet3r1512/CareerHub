import { Badge } from "@/components/ui/badge";

interface IProps {
  content: string;
}

export default function CustomizeBadge({ content }: IProps) {
  let badgeColorClass;

  switch (content) {
    case "Software Development":
      badgeColorClass = "bg-[#5e67a3]/20 text-[#5e67a3]";
      break;
    case "Full Stack":
      badgeColorClass = "bg-[#8ab15e]/20 text-[#8ab15e]";
      break;
    case "Marketing":
      badgeColorClass = "bg-[#b95e5e]/20 text-[#b95e5e]";
      break;
    case "Digital Marketing":
      badgeColorClass = "bg-[#589b87]/20 text-[#589b87]";
      break;
    case "Data Analysis":
      badgeColorClass = "bg-[#a0567e]/20 text-[#a0567e]";
      break;
    case "Analytics":
      badgeColorClass = "bg-[#7e8bb1]/20 text-[#7e8bb1]";
      break;
    case "Graphic Design":
      badgeColorClass = "bg-[#b17e8b]/20 text-[#b17e8b]";
      break;
    case "Creative Design":
      badgeColorClass = "bg-[#6b8aa0]/20 text-[#6b8aa0]";
      break;
    case "Customer Support":
      badgeColorClass = "bg-[#a3a05e]/20 text-[#a3a05e]";
      break;
    case "Customer Service":
      badgeColorClass = "bg-[#5e86a0]/20 text-[#5e86a0]";
      break;
    case "Project Management":
      badgeColorClass = "bg-[#b1585e]/20 text-[#b1585e]";
      break;
    case "Leadership":
      badgeColorClass = "bg-[#7e7ea0]/20 text-[#7e7ea0]";
      break;
    case "Sales":
      badgeColorClass = "bg-[#16a085]/20 text-[#16a085]";
      break;
    case "Business Development":
      badgeColorClass = "bg-[#f1c40f]/20 text-[#f1c40f]";
      break;
    case "Human Resources":
      badgeColorClass = "bg-[#8e44ad]/20 text-[#8e44ad]";
      break;
    case "Recruitment":
      badgeColorClass = "bg-[#3498db]/20 text-[#3498db]";
      break;
    case "Content Writing":
      badgeColorClass = "bg-[#e74c3c]/20 text-[#e74c3c]";
      break;
    case "Copywriting":
      badgeColorClass = "bg-[#2ecc71]/20 text-[#2ecc71]";
      break;
    case "IT Support":
      badgeColorClass = "bg-[#f39c12]/20 text-[#f39c12]";
      break;
    case "Technical Assistance":
      badgeColorClass = "bg-[#9b59b6]/20 text-[#9b59b6]";
      break;
    case "Financial Analysis":
      badgeColorClass = "bg-[#1abc9c]/20 text-[#1abc9c]";
      break;
    case "Finance":
      badgeColorClass = "bg-[#d35400]/20 text-[#d35400]";
      break;
    case "UX/UI Design":
      badgeColorClass = "bg-[#2c3e50]/20 text-[#2c3e50]";
      break;
    case "User Experience":
      badgeColorClass = "bg-[#27ae60]/20 text-[#27ae60]";
      break;
    default:
      badgeColorClass = "bg-gray-500";
      break;
  }

  return (
    <Badge
      variant="secondary"
      className={`p-1 px-3 ${badgeColorClass}`}
      color={badgeColorClass}
    >
      {content}
    </Badge>
  );
}
