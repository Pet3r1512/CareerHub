import { Button } from "@/components/ui/button";

export default function Introduction() {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-16 md:mt-24">
      <h1 className="text-6xl sm:text-[65px] leading-none md:text-6xl lg:text-[75px] md:leading-none font-bold">
        Find and connect to{" "}
        <span className="text-blue leading-tight">
          700+ potential candidates
        </span>
      </h1>
      <p className="md:text-md lg:text-lg font-semibold text-gray">
        Our platform offers a comprehensive suite of tools and resources
        designed to simplify your hiring process. From entry-level positions to
        executive roles, we connect you with a diverse pool of qualified
        candidates who possess the expertise and drive to excel in your
        organization.
      </p>
      <div className="flex flex-col gap-y-3 md:flex-row lg:items-center gap-x-2">
        <Button className="px-6 py-4 rounded-xl w-1/2 lg:w-auto bg-white border-2 border-primary text-primary hover:bg-white">
          Create Organization
        </Button>
        <Button className="px-6 py-4 rounded-xl text-white w-1/2 lg:w-auto">
          Advertise Openings
        </Button>
      </div>
    </div>
  );
}
