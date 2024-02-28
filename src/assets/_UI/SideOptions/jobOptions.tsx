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
import { useRouter } from "next/router";

export default function JobOptionsContainer() {
  const [employmentTypeCheck, setEmploymentTypeCheck] = useState<string[]>([]);
  const [jobCategoriesCheck, setJobCategoriesCheck] = useState<string[]>([]);
  const [jobLevelCheck, setJobLevelCheck] = useState<string[]>([]);
  const [salaryRangeCheck, setSalaryRangeCheck] = useState<string[]>([]);
  const router = useRouter();
  const firstRender = useRef(true);
  const secondRender = useRef(true);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const { employmentType } = router.query;

    setEmploymentTypeCheck(
      employmentType ? employmentType.toString().split(",") : []
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  useEffect(() => {
    const updatedFilters = () => {
      const employmentTypeQuery =
        employmentTypeCheck.length > 0
          ? employmentTypeCheck.join(",")
          : undefined;

      const query = {
        ...router.query,
        employmentType: employmentTypeQuery,
      };

      if (!employmentTypeQuery) {
        delete query.employmentType;
      }

      router.push(
        {
          pathname: router.pathname,
          query: query,
        },
        undefined,
        { scroll: false }
      );
    };

    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (secondRender.current) {
      secondRender.current = false;
      return;
    }

    updatedFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          employmentTypeCheck={employmentTypeCheck}
          onClick={handleEmploymentTypeCheck}
        />
        <JobOptionsContent
          name="Categories"
          jobCategories={jobCategories}
          jobCategoriesCheck={jobCategoriesCheck}
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

type JobOptionsContentProps = {
  name: string;
  employmentType?: EmploymentType[];
  employmentTypeCheck?: string[];
  jobCategories?: JobCategory[];
  jobCategoriesCheck?: string[];
  jobLevel?: JobLevel[];
  jobLevelCheck?: string[];
  salaryRange?: SalaryRange[];
  salaryRangeCheck?: string[];
  onClick: any;
};

function JobOptionsContent({
  name,
  employmentType,
  employmentTypeCheck,
  jobCategories,
  jobCategoriesCheck,
  jobLevel,
  salaryRange,
  onClick,
}: JobOptionsContentProps) {
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
                employmentTypeCheck={employmentTypeCheck}
              />
            )}
            {jobCategories && (
              <CheckboxForJobCategories
                data={jobCategories}
                onClick={onClick}
                jobCategoriesCheck={jobCategoriesCheck}
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
  employmentTypeCheck,
}: {
  data: EmploymentType[];
  onClick: any;
  employmentTypeCheck?: string[];
}) {
  return data.map((i) => (
    <div key={i.type} className="flex gap-2 items-center">
      <Checkbox
        id={i.type}
        className="text-white w-6 h-6 border-gray-400 border-2 data-[state=checked]:border-primary"
        value={i.type}
        onClick={(e) => onClick(e)}
        checked={employmentTypeCheck?.includes(i.type)}
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
  jobCategoriesCheck,
}: {
  data: JobCategory[];
  onClick: any;
  jobCategoriesCheck?: string[];
}) {
  return data.map((i) => (
    <div key={i.category} className="flex gap-2 items-center">
      <Checkbox
        id={i.category}
        className="text-white w-6 h-6 border-gray-400 border-2 data-[state=checked]:border-primary"
        value={i.category}
        onClick={(e) => onClick(e)}
        checked={jobCategoriesCheck?.includes(i.category)}
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
