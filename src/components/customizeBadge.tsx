import { Badge } from "@/components/ui/badge";
import { twMerge } from "tailwind-merge";

type CustomizeBadgeProps = {
  content: string;
  variant: "secondary" | "outline";
};

function getColorClass(tag: string, variant: "secondary" | "outline") {
  let badgeColorClass;

  switch (tag) {
    case "Technology":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#5e67a3]/20 text-[#5e67a3]`
          : `border border-[#5e67a3] text-[#5e67a3]`;
      break;

    case "Engineering":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#8ab15e]/20 text-[#8ab15e]`
          : `border border-[#8ab15e] text-[#8ab15e]`;
      break;

    case "Marketing":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#b95e5e]/20 text-[#b95e5e]`
          : `border border-[#b95e5e] text-[#b95e5e]`;
      break;

    case "Social Media":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#589b87]/20 text-[#589b87]`
          : `border border-[#589b87] text-[#589b87]`;
      break;

    case "Analytics":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#a0567e]/20 text-[#a0567e]`
          : `border border-[#a0567e] text-[#a0567e]`;
      break;

    case "Design":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#7e8bb1]/20 text-[#7e8bb1]`
          : `border border-[#7e8bb1] text-[#7e8bb1]`;
      break;

    case "Customer Service":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#b17e8b]/20 text-[#b17e8b]`
          : `border border-[#b17e8b] text-[#b17e8b]`;
      break;

    case "Project Management":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#a3a05e]/20 text-[#a3a05e]`
          : `border border-[#a3a05e] text-[#a3a05e]`;
      break;

    case "Sales":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#5e86a0]/20 text-[#5e86a0]`
          : `border border-[#5e86a0] text-[#5e86a0]`;
      break;

    case "Human Resources":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#b1585e]/20 text-[#b1585e]`
          : `border border-[#b1585e] text-[#b1585e]`;
      break;

    case "Content Writing":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#7e7ea0]/20 text-[#7e7ea0]`
          : `border border-[#7e7ea0] text-[#7e7ea0]`;
      break;

    case "Communication":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#16a085]/20 text-[#16a085]`
          : `border border-[#16a085] text-[#16a085]`;
      break;

    case "Finance":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#f1c40f]/20 text-[#f1c40f]`
          : `border border-[#f1c40f] text-[#f1c40f]`;
      break;

    case "Accounting":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#8e44ad]/20 text-[#8e44ad]`
          : `border border-[#8e44ad] text-[#8e44ad]`;
      break;

    case "Research":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#3498db]/20 text-[#3498db]`
          : `border border-[#3498db] text-[#3498db]`;
      break;

    case "Networking":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#e74c3c]/20 text-[#e74c3c]`
          : `border border-[#e74c3c] text-[#e74c3c]`;
      break;

    case "Security":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#f39c12]/20 text-[#f39c12]`
          : `border border-[#f39c12] text-[#f39c12]`;
      break;

    case "Advertising":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#d35400]/20 text-[#d35400]`
          : `border border-[#d35400] text-[#d35400]`;
      break;

    case "Business Services":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#2ecc71]/20 text-[#2ecc71]`
          : `border border-[#2ecc71] text-[#2ecc71]`;
      break;

    case "Blockchain":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#8e44ad]/20 text-[#8e44ad]`
          : `border border-[#8e44ad] text-[#8e44ad]`;
      break;

    case "Cloud":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#2980b9]/20 text-[#2980b9]`
          : `border border-[#2980b9] text-[#2980b9]`;
      break;

    case "Consumer Tech":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#16a085]/20 text-[#16a085]`
          : `border border-[#16a085] text-[#16a085]`;
      break;

    case "Education":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#f1c40f]/20 text-[#f1c40f]`
          : `border border-[#f1c40f] text-[#f1c40f]`;
      break;

    case "Fintech":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#b1585e]/20 text-[#b1585e]`
          : `border border-[#b1585e] text-[#b1585e]`;
      break;

    case "Gaming":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#4a90e2]/20 text-[#4a90e2]`
          : `border border-[#4a90e2] text-[#4a90e2]`;
      break;

    case "Food & Beverage":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#d87093]/20 text-[#d87093]`
          : `border border-[#d87093] text-[#d87093]`;
      break;

    case "Healthcare":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#5bc0de]/20 text-[#5bc0de]`
          : `border border-[#5bc0de] text-[#5bc0de]`;
      break;

    case "Hosting":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#f0ad4e]/20 text-[#f0ad4e]`
          : `border border-[#f0ad4e] text-[#f0ad4e]`;
      break;

    case "Media":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#6a5acd]/20 text-[#6a5acd]`
          : `border border-[#6a5acd] text-[#6a5acd]`;
      break;

    case "Information Technology":
      badgeColorClass =
        variant === "secondary"
          ? `bg-[#540b0e]/20 text-[#540b0e]`
          : `border border-[#540b0e] text-[#540b0e]`;
      break;

    default:
      // Handle the default case if needed
      break;
  }
  return badgeColorClass;
}

export default function CustomizeBadge({
  content,
  variant,
}: CustomizeBadgeProps) {
  const badgeColorClass = getColorClass(content, variant);

  return (
    <Badge
      variant={variant}
      className={twMerge("p-1 px-3 cursor-pointer", badgeColorClass)}
    >
      {content}
    </Badge>
  );
}
