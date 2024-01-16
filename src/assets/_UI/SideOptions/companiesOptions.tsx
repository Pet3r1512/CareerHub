import { industryOptions, companySize } from "@/data/options";
import { Checkbox } from "@/components/ui/checkbox";

export default function CompaniesOptions() {
  return (
    <div className="lg:w-1/4 h-full lg:py-12 lg:flex lg:justify-center hidden">
      <div className="w-fit h-full flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="font-bold">Industry</p>
          {industryOptions.map((i) => (
            <div key={i.industry} className="flex gap-2 items-center">
              <Checkbox
                id={i.industry}
                className="text-white w-6 h-6 border-gray-400 border-2 data-[state=checked]:border-primary"
              />
              <label
                htmlFor={i.industry}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {i.industry} ({i.count})
              </label>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold">Company size</p>
          {companySize.map((i) => (
            <div key={i.size} className="flex gap-2 items-center">
              <Checkbox
                id={i.size}
                className="text-white w-6 h-6 border-gray-400 border-2 data-[state=checked]:border-primary"
              />
              <label
                htmlFor={i.size}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {i.size} ({i.count})
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
