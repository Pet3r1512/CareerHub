import { companies } from "@/data/companies";
import { Badge } from "@/components/ui/badge";
import { twMerge } from "tailwind-merge";
import CustomizeBadge from "@/components/customizeBadge";
import PaginationSection from "@/components/paginationSection";

type CompaniesGridProps = {
  view: "grid" | "list";
  sort: string;
  searchParams?: {
    page: number;
  };
};

type Company = {
  image: string;
  name: string;
  description: string;
  industry_tags: string[];
  company_size: number;
  remaining_jobs_count: number;
};

export default function CompaniesGrid({
  view,
  sort,
  searchParams,
}: CompaniesGridProps) {
  const itemAmountDependOnView = view == "grid" ? 8 : 4;
  const currentPage: number = searchParams?.page || 1;

  const lastItemIndex = currentPage * itemAmountDependOnView;
  const firstItemIndex = lastItemIndex - itemAmountDependOnView;

  return (
    <div className="flex flex-col gap-12 items-center">
      <div
        className={twMerge(
          "flex flex-col gap-8 px-4 lg:px-0 text-sm lg:text-base",
          view == "grid" ? "lg:grid lg:grid-cols-2" : ""
        )}
      >
        {companies
          .slice(firstItemIndex, lastItemIndex)
          .map((company, index) => (
            <CompanyItem key={index} company={company} index={index} />
          ))}
      </div>
      <PaginationSection
        currentPage={currentPage}
        itemsPerPage={itemAmountDependOnView}
        totalItems={companies.length}
      />
    </div>
  );
}

function CompanyItem({ company, index }: { company: Company; index: number }) {
  return (
    <div
      key={index}
      className="border p-4 flex flex-col gap-4 lg:hover:bg-gray-100 transition duration-300 ease-in-out rounded-md cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <p>Image</p>
        <Badge
          variant={"secondary"}
          className="bg-primary/10 text-primary p-1 px-2 rounded-md lg:text-base font-normal cursor-pointer"
        >
          {company.remaining_jobs_count} Jobs
        </Badge>
      </div>
      <a
        href="#"
        className="text-base lg:text-lg font-bold relative group/item w-fit"
      >
        <span
          className="w-0 h-[1px] absolute bottom-0 right-0 transition-all duration-500 lg:group-hover/item:w-full lg:group-hover/item:left-0 lg:group-hover/item:bg-black/40"
          aria-hidden
        ></span>
        {company.name}
      </a>
      <p className="text-gray-dark opacity-90 line-clamp-3">
        {company.description}
      </p>
      <div className="flex flex-wrap gap-4">
        {company.industry_tags.map((tag, index) => (
          <CustomizeBadge key={index} content={tag} variant="outline" />
        ))}
      </div>
    </div>
  );
}
