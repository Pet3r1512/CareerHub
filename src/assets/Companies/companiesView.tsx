import { twMerge } from "tailwind-merge";
import PaginationSection from "@/components/paginationSection";
import { useSearchParams } from "next/navigation";
import CompanyItem from "./companyItem";
import JobItem from "./jobItem";
import SkeletonCompanyItem from "./skeletonLoading";

type CompaniesAndJobsViewProps = {
  view: "grid" | "list";
  type: "company" | "job";
  loading: {
    isSearchLoading: boolean;
    setIsSearchLoading: (value: boolean) => void;
  };
  data: any[];
};

export default function CompaniesAndJobsView({
  view,
  type,
  loading,
  data,
}: CompaniesAndJobsViewProps) {
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
            .map((item, index) =>
              type == "company" ? (
                <CompanyItem
                  key={item.name + index}
                  company={item}
                  index={index}
                />
              ) : (
                <JobItem
                  key={item.title + item.company.name}
                  job={item}
                  view={view}
                />
              )
            )}
      </div>
      <PaginationSection
        currentPage={currentPage}
        itemsPerPage={itemAmountDependOnView}
        totalItems={data.length}
      />
    </div>
  );
}
