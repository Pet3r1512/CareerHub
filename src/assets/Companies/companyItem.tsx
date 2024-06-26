import { Badge } from "@/components/ui/badge";
import CustomizeBadge from "@/components/customizeBadge";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { type Company } from "@prisma/client";

export default function CompanyItem({ company }: { company: Company }) {
  const router = useRouter();
  const industry_tags = company.industry_tags;

  return (
    <div
      key={company.uuid}
      className="border p-4 flex flex-col gap-4 lg:hover:bg-gray-100 transition duration-300 ease-in-out rounded-md cursor-pointer"
      onClick={() =>
        router.push(
          `/companies/${company.name.toLowerCase().replace(/\s/g, "-")}`
        )
      }
    >
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 relative">
          <Image
            src={company.image}
            alt={company.name}
            fill
            sizes="48px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <Badge
          variant={"secondary"}
          className="bg-primary/10 text-primary p-1 px-2 rounded-md lg:text-base font-normal cursor-pointer"
        >
          {company.remaining_jobs_count} Jobs
        </Badge>
      </div>
      <Link
        href={`/companies/${company.name.toLowerCase().replace(/\s/g, "-")}`}
        className="text-base lg:text-lg font-bold relative group/item w-fit max-w-full truncate"
      >
        <span
          className="w-0 h-[1px] absolute bottom-0 right-0 transition-all duration-500 lg:group-hover/item:w-full lg:group-hover/item:left-0 lg:group-hover/item:bg-black/40"
          aria-hidden
        ></span>
        {company.name}
      </Link>
      <p className="text-gray-dark opacity-90 line-clamp-3">
        {company.description}
      </p>
      <div className="flex flex-wrap gap-4">
        {industry_tags.map((tag, index) => (
          <CustomizeBadge key={tag + index} content={tag} variant="outline" />
        ))}
      </div>
    </div>
  );
}
