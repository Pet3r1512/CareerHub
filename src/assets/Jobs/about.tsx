import JobCapacityProgress from "@/components/job/job-capacity-progress";

export default function About() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl">About this role</h1>
        <div className="flex flex-col bg-gray-100 p-4 gap-2 w-full">
          <JobCapacityProgress
            applied={5}
            capacity={10}
            isButton={false}
            containerClassName="w-full gap-6"
            className="w-full gap-4 flex-col-reverse"
          />
        </div>
        <div className="flex flex-row justify-between">
          <p>Apply Before</p>
          <p>July 31, 2021</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Job Posted On</p>
          <p>July 1, 2021</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Job Type</p>
          <p>Full-Time</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Salary</p>
          <p>$75k-$85k USD</p>
        </div>
      </div>
    </div>
  );
}
