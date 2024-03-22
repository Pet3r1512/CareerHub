import JobCapacityProgress from "@/components/job/job-capacity-progress";

export default function About() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl">About this role</h1>
        <div className="flex flex-col bg-gray-100 w-full p-6 gap-2">
          <JobCapacityProgress
            applied={5}
            capacity={10}
            isButton={false}
            className="w-full"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}
