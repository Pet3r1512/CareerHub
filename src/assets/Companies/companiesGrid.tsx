import { Badge } from "@/components/ui/badge";
import { twMerge } from "tailwind-merge";
import CustomizeBadge from "@/components/customizeBadge";
import PaginationSection from "@/components/paginationSection";
import { useSearchParams } from "next/navigation";

type CompaniesGridProps = {
  view: "grid" | "list";
  sort: string;
  loading: {
    isSearchLoading: boolean;
    setIsSearchLoading: (value: boolean) => void;
  };
  data: any[];
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
  loading,
  data,
}: CompaniesGridProps) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const itemAmountDependOnView = view == "grid" ? 8 : 4;
  const currentPage: number = +page! || 1;
  const lastItemIndex = currentPage * itemAmountDependOnView;
  const firstItemIndex = lastItemIndex - itemAmountDependOnView;

  return (
    <div className="flex flex-col gap-12 items-center">
      <div
        className={twMerge(
          "flex flex-col gap-8 px-4 lg:px-0 text-sm lg:text-base w-full",
          view == "grid" ? "lg:grid lg:grid-cols-2" : ""
        )}
      >
        {loading.isSearchLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <SkeletonCompanyItem key={index} />
          ))}
        {!loading.isSearchLoading &&
          data
            .slice(firstItemIndex, lastItemIndex)
            .map((company, index) => (
              <CompanyItem
                key={company.name + index}
                company={company}
                index={index}
              />
            ))}
      </div>
      <PaginationSection
        currentPage={currentPage}
        itemsPerPage={itemAmountDependOnView}
        totalItems={data.length}
      />
    </div>
  );
}

function CompanyItem({ company, index }: { company: Company; index: number }) {
  return (
    <div
      key={company.name + index}
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
          <CustomizeBadge key={tag + index} content={tag} variant="outline" />
        ))}
      </div>
    </div>
  );
}

function SkeletonCompanyItem() {
  return (
    <div className="border p-4 flex flex-col gap-4 lg:hover:bg-gray-100 duration-700 rounded-md animate-pulse lg:w-full lg:h-[240px] w-full">
      <div className="flex justify-between items-start">
        <div className="rounded-full bg-gray-400 w-12 h-12"></div>
        <div className="bg-gray-400 p-1 px-2 lg:w-[70px] lg:h-8 w-16 h-6 rounded-md lg:text-base font-normal"></div>
      </div>
      <div className="bg-gray-400 w-1/2 h-4 rounded-md"></div>
      <div className="bg-gray-400 w-[90%] h-2 rounded-md"></div>
      <div className="bg-gray-400 w-[90%] h-2 rounded-md"></div>
      <div className="bg-gray-400 w-[90%] h-2 rounded-md"></div>
      <div className="bg-gray-400 p-1 px-2 w-20 h-6 rounded-lg lg:text-base font-normal mt-2"></div>
    </div>
  );
}
