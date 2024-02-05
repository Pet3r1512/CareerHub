import CompaniesOptions from "../_UI/SideOptions/companiesOptions";
import CompaniesAndJobsContainer from "./companiesContainer";
import { companies } from "@/data/companies";
import { jobs } from "@/data/jobs";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function CompaniesAndJobsLayout({
  loading,
  type,
}: {
  loading: {
    isSearchLoading: boolean;
    setIsSearchLoading: (value: boolean) => void;
  };
  type: "company" | "job";
}) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
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
      (company.industry_tags.some((tag) => industry?.includes(tag)) ||
        !industry) &&
      (size.includes(checkSize(company.company_size)) || !size.length)
  );

  const jobsData = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase() || "")
  );

  return (
    <div className="flex gap-8">
      <CompaniesOptions />
      <CompaniesAndJobsContainer
        loading={loading}
        data={type == "company" ? companiesData : jobsData}
        type={type}
      />
    </div>
  );
}
