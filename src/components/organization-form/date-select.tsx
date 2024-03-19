import { mitr } from "@/assets/_UI/Page";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { twMerge } from "tailwind-merge";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import moment from "moment";
import { useFormContext } from "react-hook-form";

export default function DateSelect({ name }: { name: string }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const styledClassName =
    "text-gray-dark focus-visible:ring-[#2684ff] focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:hover:border-[#2684ff] rounded-sm hover:border-[#b3b3b3] duration-100";

  const [day, setDay] = useState<string | undefined>();
  const [month, setMonth] = useState<string | undefined>();
  const [year, setYear] = useState<string | undefined>();
  const { setValue, setError, clearErrors } = useFormContext();

  useEffect(() => {
    if (day && month && year) {
      let date: string | undefined;
      date = moment(`${year}-${month}-${day}`, "YYYY-MMMM-DD").format();
      if (date === "Invalid date") {
        setError(name, {
          type: "manual",
          message: "Invalid date",
        });
        return;
      } else {
        clearErrors(name);
        setValue(name, date);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day, month, year]);

  return (
    <div className="flex justify-evenly gap-8">
      <Input
        placeholder="Day"
        className={styledClassName}
        onBlur={(e) => setDay(e.target.value)}
      />
      <Select onValueChange={(val) => setMonth(val)}>
        <SelectTrigger className="text-gray-dark focus:ring-[#2684ff] focus:ring-1 focus:ring-offset-0 focus:hover:border-[#2684ff] rounded-sm hover:border-[#b3b3b3] duration-100">
          <SelectValue placeholder="Month" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup
            className={twMerge("text-gray-dark font-sans", mitr.variable)}
          >
            <SelectLabel>Month</SelectLabel>
            {months.map((month) => (
              <SelectItem key={month} value={month}>
                {month}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input
        placeholder="Year"
        className={styledClassName}
        onBlur={(e) => setYear(e.target.value)}
      />
    </div>
  );
}
