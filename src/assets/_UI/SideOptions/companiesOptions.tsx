import { industryOptions, companySize } from "@/data/options";

export default function CompaniesOptions() {
  return (
    <div className="bg-blue-gray-400 w-1/4 h-full lg:p-12 lg:pl-16 flex flex-col gap-8">
      <div>
        <p>Industry</p>
      </div>
      <div>
        <p>Company size</p>
      </div>
    </div>
  );
}
