import {
  EmploymentType,
  JobCategory,
  JobLevel,
  SalaryRange,
} from "@/types/company";
import { Checkbox } from "@/components/ui/checkbox";

export default function JobOptionCheckbox({
  data,
  onClick,
  label,
  checked,
}: {
  data: EmploymentType[] | JobCategory[] | JobLevel[] | SalaryRange[];
  onClick: any;
  label: string;
  checked?: string[];
}) {
  const getLabel = (
    item: EmploymentType | JobCategory | JobLevel | SalaryRange
  ) => {
    switch (label) {
      case "employmentType":
        return (item as EmploymentType).type;
      case "jobCategory":
        return (item as JobCategory).category;
      case "jobLevel":
        return (item as JobLevel).level;
      case "salaryRange":
        return (item as SalaryRange).range;
    }
  };

  return data.map((i) => (
    <div key={getLabel(i)} className="flex gap-2 items-center">
      <Checkbox
        id={getLabel(i)}
        className="text-white w-6 h-6 border-gray-400 border-2 data-[state=checked]:border-primary"
        value={getLabel(i)}
        onClick={(e) => onClick(e)}
        checked={checked?.includes(getLabel(i)!)}
      />
      <label
        htmlFor={getLabel(i)}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {getLabel(i)} ({i.count})
      </label>
    </div>
  ));
}
