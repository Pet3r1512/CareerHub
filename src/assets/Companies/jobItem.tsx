import { Job } from "@/types/company";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import CustomizeBadge from "@/components/customizeBadge";
import { Progress } from "@/components/ui/progress";

export default function JobItem({
  job,
  view,
}: {
  job: Job;
  view: "grid" | "list";
}) {
  const progressValue = (job.applied * 100) / job.capacity;
  return (
    <div
      key={job.title + job.company.name}
      className="border p-6 lg:hover:bg-gray-100 transition duration-300 ease-in-out rounded-md cursor-pointer"
    >
      <div
        className={`flex gap-4 md:justify-between ${
          view === "grid" ? "flex-col" : "flex-col md:flex-row"
        }`}
      >
        <div
          className={`flex gap-6 ${view === "grid" ? "flex-col" : "flex-row"}`}
        >
          <div>Image</div>
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="text-base lg:text-lg font-bold relative group/item w-fit"
            >
              <span
                className="w-0 h-[1px] absolute bottom-0 right-0 transition-all duration-500 lg:group-hover/item:w-full lg:group-hover/item:left-0 lg:group-hover/item:bg-black/40"
                aria-hidden
              ></span>
              {job.title}
            </a>
            <p className="opacity-70 line-clamp-1">
              {job.company.name} - {job.company.location.city},{" "}
              {job.company.location.country}
            </p>
            <div className="flex gap-2 mt-1">
              <Badge className="p-1 px-3 cursor-pointer w-fit text-green bg-green/20 h-fit whitespace-nowrap">
                {job.employment_type}
              </Badge>
              <Separator orientation="vertical" />
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, index) => (
                  <CustomizeBadge
                    key={tag + index}
                    content={tag}
                    variant="outline"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex gap-4 ${
            view === "grid"
              ? "flex-row-reverse mt-4 justify-between"
              : "flex-col-reverse mt-4 md:mt-0 md:flex-col"
          }`}
        >
          <Button className="text-white px-8">Apply</Button>
          <div className="flex flex-col items-center justify-center gap-2 text-sm">
            <Progress
              value={progressValue}
              className="h-2 bg-gray-300"
              indicatorColor="bg-green"
            />
            <p>
              <strong>{job.applied} applied </strong>of {job.capacity} capacity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
