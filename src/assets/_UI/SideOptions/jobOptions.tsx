import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  employmentType,
  jobCategories,
  jobLevel,
  salaryRange,
} from "@/data/options";
import { useState, useEffect, useRef } from "react";
import {
  EmploymentType,
  JobCategory,
  JobLevel,
  SalaryRange,
} from "@/types/company";
import { PushQuery } from "@/utils/routerQuery";
import Router from "next/router";

export default function JobOptionsContainer() {
  const [employmentTypeCheck, setEmploymentTypeCheck] = useState<string[]>([]);
  const [jobCategoriesCheck, setJobCategoriesCheck] = useState<string[]>([]);
  const [jobLevelCheck, setJobLevelCheck] = useState<string[]>([]);
  const [salaryRangeCheck, setSalaryRangeCheck] = useState<string[]>([]);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const employmentTypeQuery =
      employmentTypeCheck.length > 0 ? `${employmentTypeCheck.join(",")}` : "";
    PushQuery({
      pathname: Router.pathname,
      query: {
        ...Router.query,
        page: "",
        employmentType: employmentTypeQuery,
      },
    });
  }, [employmentTypeCheck]);

  const handleEmploymentTypeCheck = (e: any) => {
    if (e.target.ariaChecked === "false") {
      setEmploymentTypeCheck((prev) => [...prev, e.target.value]);
    } else {
      setEmploymentTypeCheck((prev) =>
        prev.filter((i) => i !== e.target.value)
      );
    }
  };
  const handleJobCategoriesCheck = (e: any) => {};
  const handleJobLevelCheck = (e: any) => {};
  const handleSalaryRangeCheck = (e: any) => {};

  return (
    <div className="lg:w-1/4 h-full lg:py-12 lg:flex lg:justify-center hidden">
      <div className="w-fit h-full flex flex-col gap-6">
        <JobOptionsContent
          name="Type of Employment "
          employmentType={employmentType}
          onClick={handleEmploymentTypeCheck}
        />
        <JobOptionsContent
          name="Categories"
          jobCategories={jobCategories}
          onClick={handleJobCategoriesCheck}
        />
        <JobOptionsContent
          name="Job Level"
          jobLevel={jobLevel}
          onClick={handleJobLevelCheck}
        />
        <JobOptionsContent
          name="Salary Range"
          salaryRange={salaryRange}
          onClick={handleSalaryRangeCheck}
        />
      </div>
    </div>
  );
}

function JobOptionsContent({
  name,
  employmentType,
  jobCategories,
  jobLevel,
  salaryRange,
  onClick,
}: {
  name: string;
  employmentType?: EmploymentType[];
  jobCategories?: JobCategory[];
  jobLevel?: JobLevel[];
  salaryRange?: SalaryRange[];
  onClick: any;
}) {
  return (
    <Accordion type="single" collapsible className="w-full" defaultValue={name}>
      <AccordionItem value={name} className="border-none">
        <AccordionTrigger className="w-full font-bold gap-10">
          {name}
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-4">
            {employmentType && (
              <CheckboxForEmploymentType
                data={employmentType}
                onClick={onClick}
              />
            )}
            {jobCategories && (
              <CheckboxForJobCategories
                data={jobCategories}
                onClick={onClick}
              />
            )}
            {jobLevel && (
              <CheckboxForJobLevel data={jobLevel} onClick={onClick} />
            )}
            {salaryRange && (
              <CheckboxForSalaryRange data={salaryRange} onClick={onClick} />
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function CheckboxForEmploymentType({
  data,
  onClick,
}: {
  data: EmploymentType[];
  onClick: any;
}) {
  return data.map((i) => (
    <div key={i.type} className="flex gap-2 items-center">
      <Checkbox
        id={i.type}
        className="text-white w-6 h-6 border-gray-400 border-2 data-[state=checked]:border-primary"
        value={i.type}
        onClick={(e) => onClick(e)}
      />
      <label
        htmlFor={i.type}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {i.type} ({i.count})
      </label>
    </div>
  ));
}

function CheckboxForJobCategories({
  data,
  onClick,
}: {
  data: JobCategory[];
  onClick: any;
}) {
  return data.map((i) => (
    <div key={i.category} className="flex gap-2 items-center">
      <Checkbox
        id={i.category}
        className="text-white w-6 h-6 border-gray-400 border-2 data-[state=checked]:border-primary"
        value={i.category}
        onClick={(e) => onClick(e)}
      />
      <label
        htmlFor={i.category}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {i.category} ({i.count})
      </label>
    </div>
  ));
}

function CheckboxForJobLevel({
  data,
  onClick,
}: {
  data: JobLevel[];
  onClick: any;
}) {
  return data.map((i) => (
    <div key={i.level} className="flex gap-2 items-center">
      <Checkbox
        id={i.level}
        className="text-white w-6 h-6 border-gray-400 border-2 data-[state=checked]:border-primary"
        value={i.level}
        onClick={(e) => onClick(e)}
      />
      <label
        htmlFor={i.level}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {i.level} ({i.count})
      </label>
    </div>
  ));
}

function CheckboxForSalaryRange({
  data,
  onClick,
}: {
  data: SalaryRange[];
  onClick: any;
}) {
  return data.map((i) => (
    <div key={i.range} className="flex gap-2 items-center">
      <Checkbox
        id={i.range}
        className="text-white w-6 h-6 border-gray-400 border-2 data-[state=checked]:border-primary"
        value={i.range}
        onClick={(e) => onClick(e)}
      />
      <label
        htmlFor={i.range}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {i.range} ({i.count})
      </label>
    </div>
  ));
}
