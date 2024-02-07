import { Job } from "@/types/company";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import CustomizeBadge from "@/components/customizeBadge";

export default function JobItem({ job }: { job: Job }) {
  return (
    <div key={job.title + job.company.name} className="border p-6 rounded-md">
      <div className="flex flex-col gap-4 md:flex-wrap md:justify-between">
        <div className="flex gap-6">
          <div>Image</div>
          <div className="flex flex-col gap-2">
            <strong>{job.title}</strong>
            <p className="opacity-70 line-clamp-1">
              {job.company.name} - {job.company.location.city},{" "}
              {job.company.location.country}
            </p>
            <div className="flex gap-2">
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
        <div className="self-end">
          <Button className="text-white px-8">Apply</Button>
        </div>
      </div>
    </div>
  );
}
