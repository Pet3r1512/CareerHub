import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mitr } from "@/assets/_UI/Page";
import { twMerge } from "tailwind-merge";
import { ControllerRenderProps } from "react-hook-form";
import { FormValues } from "@/pages/business/create-organization";

export default function EmployeeSelect({
  field,
}: {
  field: ControllerRenderProps<FormValues, "company_size">;
}) {
  return (
    <Select onValueChange={field.onChange}>
      <SelectTrigger className="text-gray-dark focus:ring-[#2684ff] focus:ring-1 focus:ring-offset-0 focus:hover:border-[#2684ff] rounded-sm hover:border-[#b3b3b3] duration-100">
        <SelectValue placeholder="Select company size" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup
          className={twMerge(" text-gray-dark font-sans", mitr.variable)}
        >
          <SelectItem value="1-50">1-10</SelectItem>
          <SelectItem value="51-150">51-150</SelectItem>
          <SelectItem value="151-250">151-250</SelectItem>
          <SelectItem value="251-500">251-500</SelectItem>
          <SelectItem value="501-1000">501-1000</SelectItem>
          <SelectItem value="1000-above">1000+</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
