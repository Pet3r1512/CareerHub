import { MoveRight } from "lucide-react";

export default function LatestJobs() {
  return (
    <section className="flex flex-col gap-y-8 md:gap-y-16 mt-16 lg:mt-0">
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
    </section>
  );
}
