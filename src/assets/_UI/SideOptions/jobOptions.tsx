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
import JobOptionCheckbox from "./jobOptionCheckbox";
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

    const { employmentType, jobCategory, jobLevel, salaryRange } = router.query;

    setEmploymentTypeCheck(
      employmentType ? employmentType.toString().split(",") : []
    );

    setJobCategoriesCheck(jobCategory ? jobCategory.toString().split(",") : []);

    setJobLevelCheck(jobLevel ? jobLevel.toString().split(",") : []);

    setSalaryRangeCheck(salaryRange ? salaryRange.toString().split(",") : []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  useEffect(() => {
    const updatedFilters = () => {
      const employmentTypeQuery =
        employmentTypeCheck.length > 0
          ? employmentTypeCheck.join(",")
          : undefined;

      const jobCategoriesQuery =
        jobCategoriesCheck.length > 0
          ? jobCategoriesCheck.join(",")
          : undefined;

      const jobLevelQuery =
        jobLevelCheck.length > 0 ? jobLevelCheck.join(",") : undefined;

      const salaryRangeQuery =
        salaryRangeCheck.length > 0 ? salaryRangeCheck.join(",") : undefined;

      const query = {
        ...router.query,
        employmentType: employmentTypeQuery,
        jobCategory: jobCategoriesQuery,
        jobLevel: jobLevelQuery,
        salaryRange: salaryRangeQuery,
        page: 1,
      };

      if (!employmentTypeQuery) {
        delete query.employmentType;
      }

      if (!jobCategoriesQuery) {
        delete query.jobCategory;
      }

      if (!jobLevelQuery) {
        delete query.jobLevel;
      }

      if (!salaryRangeQuery) {
        delete query.salaryRange;
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
  }, [
    employmentTypeCheck,
    jobCategoriesCheck,
    jobLevelCheck,
    salaryRangeCheck,
  ]);

  const handleEmploymentTypeCheck = (e: any) => {
    if (e.target.ariaChecked === "false") {
      setEmploymentTypeCheck((prev) => [...prev, e.target.value]);
    } else {
      setEmploymentTypeCheck((prev) =>
        prev.filter((i) => i !== e.target.value)
      );
    }
  };
  const handleJobCategoriesCheck = (e: any) => {
    if (e.target.ariaChecked === "false") {
      setJobCategoriesCheck((prev) => [...prev, e.target.value]);
    } else {
      setJobCategoriesCheck((prev) => prev.filter((i) => i !== e.target.value));
    }
  };
  const handleJobLevelCheck = (e: any) => {
    if (e.target.ariaChecked === "false") {
      setJobLevelCheck((prev) => [...prev, e.target.value]);
    } else {
      setJobLevelCheck((prev) => prev.filter((i) => i !== e.target.value));
    }
  };
  const handleSalaryRangeCheck = (e: any) => {
    if (e.target.ariaChecked === "false") {
      setSalaryRangeCheck((prev) => [...prev, e.target.value]);
    } else {
      setSalaryRangeCheck((prev) => prev.filter((i) => i !== e.target.value));
    }
  };

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
          jobLevelCheck={jobLevelCheck}
          onClick={handleJobLevelCheck}
        />
        <JobOptionsContent
          name="Salary Range"
          salaryRange={salaryRange}
          salaryRangeCheck={salaryRangeCheck}
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
  jobLevelCheck,
  salaryRange,
  salaryRangeCheck,
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
              <JobOptionCheckbox
                data={employmentType}
                onClick={onClick}
                label="employmentType"
                checked={employmentTypeCheck}
              />
            )}
            {jobCategories && (
              <JobOptionCheckbox
                data={jobCategories}
                onClick={onClick}
                label="jobCategory"
                checked={jobCategoriesCheck}
              />
            )}
            {jobLevel && (
              <JobOptionCheckbox
                data={jobLevel}
                onClick={onClick}
                label="jobLevel"
                checked={jobLevelCheck}
              />
            )}
            {salaryRange && (
              <JobOptionCheckbox
                data={salaryRange}
                onClick={onClick}
                label="salaryRange"
                checked={salaryRangeCheck}
              />
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
