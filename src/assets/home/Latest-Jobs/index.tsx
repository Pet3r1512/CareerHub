import { MoveRight } from "lucide-react";
import jobs from "@/data/jobs";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import CustomizeBadge from "@/components/customizeBadge";

export default function LatestJobs() {
  return (
    <section className="flex flex-col gap-y-8 md:gap-y-16 mt-8 lg:mt-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4">
        <h1 className="font-extrabold text-5xl sm:text-4xl lg:text-5xl">
          Latest <span className="text-blue">jobs open</span>
        </h1>
        <div className="flex items-center gap-x-2 text-primary">
          <a href="#" className="font-semibold sm:text-md lg:text-lg">
            Show all jobs
          </a>
          <MoveRight />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-flow-row grid-cols-1 p-4 lg:p-8 lg:px-16 gap-8">
        {jobs.slice(8).map((job, index) => (
          <div
            key={index}
            className="bg-gray-100 flex p-6 px-8 items-center gap-8 text-sm rounded-md lg:hover:bg-gray-200 transition duration-200 ease-in-out lg:hover:shadow-md"
          >
            <div className="w-12 h-12 relative">
              <Image
                src={job.job.company.image}
                alt={job.job.company.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="font-bold text-base transition-all w-fit relative group/item"
              >
                <span
                  className="w-0 h-[1px] absolute bottom-0 right-0 transition-all duration-500 lg:group-hover/item:w-full lg:group-hover/item:left-0 lg:group-hover/item:bg-black/40"
                  aria-hidden
                ></span>
                {job.job.title}
              </a>
              <p className="text-gray-dark line-clamp-1">
                {job.job.company.name} &bull; {job.job.company.location.city},{" "}
                {job.job.company.location.country}
              </p>
              <div className="flex flex-col lg:flex-row gap-2 lg:items-center h-fit mt-2">
                <Badge
                  variant="secondary"
                  className="p-1 px-3 bg-green/20 text-green w-fit cursor-pointer"
                >
                  {job.job.employment_type}
                </Badge>
                <div className="invisible lg:visible">
                  <Separator
                    orientation="vertical"
                    className="bg-gray-light lg:h-8"
                  />
                </div>
                <div className="flex flex-wrap gap-2 text-white">
                  {job.job.tags.slice(0, 2).map((tag, index) => (
                    <CustomizeBadge
                      content={tag}
                      key={index}
                      variant={"outline"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
