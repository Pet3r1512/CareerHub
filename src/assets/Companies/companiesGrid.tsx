import { companies } from "@/data/companies";
import { Badge } from "@/components/ui/badge";
import { twMerge } from "tailwind-merge";
import CustomizeBadge from "@/components/customizeBadge";

type CompaniesGridProps = {
  view: "grid" | "list";
  sort: string;
};

export default function CompaniesGrid({ view, sort }: CompaniesGridProps) {
  const itemAmount = view == "grid" ? 8 : 4;

  return (
    <div
      className={twMerge(
        "flex flex-col gap-8 px-4 lg:px-0 text-sm lg:text-base",
        view == "grid" ? "lg:grid lg:grid-cols-2" : ""
      )}
    >
      {companies.slice(0, itemAmount).map((company, index) => (
        <div key={index} className="border p-4 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <p>Image</p>
            <Badge
              variant={"secondary"}
              className="bg-primary/10 text-primary p-1 px-2 rounded-md lg:text-base font-normal cursor-pointer"
            >
              {company.remaining_jobs_count} Jobs
            </Badge>
          </div>
          <p className="text-base lg:text-lg font-bold">{company.name}</p>
          <p className="text-gray-dark opacity-90 line-clamp-3">
            {company.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {company.industry_tags.map((tag, index) => (
              <CustomizeBadge key={index} content={tag} variant="outline" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
