import { MoveRight } from "lucide-react";
import jobs from "@/data/jobs";
import CustomizeBadge from "@/components/customizeBadge";
import { Button } from "@/components/ui/button";

export default function FeaturedJobs() {
  return (
    <section className="flex flex-col gap-y-8 md:gap-y-16 mt-16 lg:mt-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4">
        <h1 className="font-extrabold text-5xl sm:text-4xl lg:text-5xl">
          Featured <span className="text-blue">jobs</span>
        </h1>
        <div className="flex items-center gap-x-2 text-primary">
          <a href="#" className="font-semibold sm:text-md lg:text-lg">
            Show all jobs
          </a>
          <MoveRight />
        </div>
      </div>
      <div className="grid md:grid-cols-4 md:gap-8 grid-cols-1 grid-flow-row gap-4 p-4 lg:p-8 lg:px-16">
        {jobs.slice(0, 8).map((job, index) => (
          <div
            key={index}
            className="border border-gray-light p-4 flex flex-col gap-1 px-6 text-sm rounded-md lg:hover:bg-gray-100 transition duration-200 ease-in-out"
          >
            <div className="flex justify-between items-center">
              {/* <Image
                src={job.job.company.image}
                alt={job.job.company.name}
                width={50}
                height={50}
              /> */}
              <p>Image</p>
              <Button
                variant="outline"
                className="p-1 px-2 border text-primary border-primary lg:hover:bg-primary lg:hover:text-white transition duration-200 ease-in-out rounded-sm"
              >
                {job.job.employment_type}
              </Button>
            </div>
            <p className="font-bold mt-2 text-base">{job.job.title}</p>
            <p className="text-gray-dark line-clamp-1">
              {job.job.company.name} &bull; {job.job.company.location.city},{" "}
              {job.job.company.location.country}
            </p>
            <p className="mt-3 text-gray-dark opacity-70 line-clamp-2">
              {job.job.description}
            </p>
            <div className="flex flex-wrap gap-2 text-white mt-3">
              {job.job.tags.slice(0, 2).map((tag, index) => (
                <CustomizeBadge
                  content={tag}
                  key={index}
                  variant={"secondary"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
