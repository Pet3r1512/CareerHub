import { LayoutGridIcon, StretchHorizontalIcon } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";
import CompaniesGrid from "./companiesGrid";
import { companies } from "@/data/companies";
import { useSearchParams } from "next/navigation";

export default function CompaniesContainer({
  loading,
}: {
  loading: {
    isSearchLoading: boolean;
    setIsSearchLoading: (value: boolean) => void;
  };
}) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState<string>("relevant");

  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const size = searchParams.get("size") || "";
  const industry = searchParams.get("industry")?.split(",");
  const data = companies.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase() || "")
  );

  return (
    <section className="lg:w-[65%] h-full pt-16 lg:p-12 lg:px-16 flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
        <div className="leading-loose">
          <h1 className="font-bold text-4xl">All Jobs</h1>
          <p>Showing {data.length} results</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="whitespace-nowrap text-gray-600">Sort by:</p>
            <Select onValueChange={(value) => setSort(value)}>
              <SelectTrigger className="border-none focus:ring-0 focus:ring-offset-0 relative p-0 h-fit text-base gap-2 lg:w-[130px] font-semibold">
                <SelectValue placeholder="Most relevant" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="relevant">Most relevant</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <label htmlFor="grid" className="hidden lg:block">
            <input
              id="grid"
              type="radio"
              checked={view == "grid"}
              className="hidden peer"
              name="view"
              value={"grid"}
              onChange={() => setView("grid")}
            />
            <div className="cursor-pointer lg:hover:bg-gray-300 peer-checked:bg-gray-200 p-2 rounded-md transition duration-300 ease-in-out peer-checked:text-primary text-gray-600">
              <LayoutGridIcon strokeWidth={2} />
            </div>
          </label>
          <label htmlFor="list" className="hidden lg:block">
            <input
              id="list"
              type="radio"
              checked={view == "list"}
              className="hidden peer"
              name="view"
              value={"list"}
              onChange={() => setView("list")}
            />
            <div className="cursor-pointer lg:hover:bg-gray-300 peer-checked:bg-gray-200 p-2 rounded-md transition duration-300 ease-in-out peer-checked:text-primary text-gray-600">
              <StretchHorizontalIcon strokeWidth={2} />
            </div>
          </label>
        </div>
      </div>
      <CompaniesGrid
        key={view}
        view={view}
        sort={sort}
        loading={loading}
        data={data}
      />
    </section>
  );
}
