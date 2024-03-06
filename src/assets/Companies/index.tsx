import CompaniesOptions from "../_UI/SideOptions/companiesOptions";
import CompaniesAndJobsContainer from "./companiesContainer";
import { useSearchParams } from "next/navigation";
import JobOptionsContainer from "../_UI/SideOptions/jobOptions";
import { Company, Job } from "@/types/company";

export default function CompaniesAndJobsLayout({
  loading,
  type,
  data,
}: {
  loading: {
    isSearchLoading: boolean;
    setIsSearchLoading: (value: boolean) => void;
  };
  type: "company" | "job";
  data: Company[] | Job[];
}) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  if (type === "company") {
    const companies = data as Company[];
    const size = searchParams.get("size")?.split(",") || "";
    const industry = searchParams.get("industry")?.split(",");
    const checkSize = (size: number) => {
      switch (true) {
        case size >= 1 && size <= 50:
          return "1 - 50";
        case size >= 51 && size <= 150:
          return "51 - 150";
        case size >= 151 && size <= 250:
          return "151 - 250";
        case size >= 251 && size <= 500:
          return "251 - 500";
        case size >= 501 && size <= 1000:
          return "501 - 1000";
        case size >= 1001:
          return "1000 - above";
        default:
          return "";
      }
    };

    const companiesData = companies.filter(
      (company) =>
        company.name.toLowerCase().includes(search.toLowerCase() || "") &&
        (company.industry_tags
          .split(",")
          .some((tag) => industry?.includes(tag)) ||
          !industry) &&
        (size.includes(checkSize(company.company_size)) || !size.length)
    );

    return (
      <div className="flex gap-8">
        <CompaniesOptions isHidden={true} />
        <CompaniesAndJobsContainer
          loading={loading}
          data={companiesData}
          type={type}
        />
      </div>
    );
  }

  if (type === "job") {
    const jobs = data as Job[];
    const employmentType = searchParams.get("employmentType")?.split(",");
    const jobCategory = searchParams.get("jobCategory")?.split(",");
    const jobLevel = searchParams.get("jobLevel")?.split(",");
    const salaryRange = searchParams.get("salaryRange")?.split(",") || "";

    const checkSalaryRange = (salary: number) => {
      switch (true) {
        case salary >= 700 && salary < 1000:
          return "$700 - $1000";
        case salary >= 1000 && salary < 1500:
          return "$1000 - $1500";
        case salary >= 1500 && salary < 2000:
          return "$1500 - $2000";
        case salary >= 2000:
          return "$2000 or above";
        default:
          return "";
      }
    };

    const jobsData = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(search.toLowerCase() || "") &&
        job.employment_type
          .toLowerCase()
          .includes(employmentType?.toString().toLowerCase() || "") &&
        job.tags.some((tag) => jobCategory?.includes(tag) || !jobCategory) &&
        job.job_level
          .toLowerCase()
          .includes(jobLevel?.toString().toLowerCase() || "") &&
        (salaryRange.includes(checkSalaryRange(job.salary_range)) ||
          !salaryRange.length)
    );

    return (
      <div className="flex gap-8">
        <JobOptionsContainer isHidden={true} />
        <CompaniesAndJobsContainer
          loading={loading}
          data={jobsData}
          type={type}
        />
      </div>
    );
  }
}
