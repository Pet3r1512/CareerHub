import { Company } from "@/types/company";
import { Badge } from "@/components/ui/badge";
import CustomizeBadge from "@/components/customizeBadge";

export default function CompanyItem({
  company,
  index,
}: {
  company: Company;
  index: number;
}) {
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