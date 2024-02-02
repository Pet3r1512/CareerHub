import { industryOptions, companySize } from "@/data/options";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useRef, useEffect } from "react";
import Router from "next/router";
import { PushQuery } from "@/utils/routerQuery";

export default function CompaniesOptions() {
  const [industry, setIndustry] = useState<string[]>([]);
  const [size, setSize] = useState<string[]>([]);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const industryQuery = industry.length > 0 ? `${industry.join(",")}` : "";
    const sizeQuery = size.length > 0 ? `${size.join(",")}` : "";
    PushQuery({
      pathname: Router.pathname,
      query: {
        ...Router.query,
        page: "",
        industry: industryQuery,
        size: sizeQuery,
      },
    });
  }, [industry, size]);

  const handleIndustryCheck = (e: any) => {
    if (e.target.ariaChecked === "false") {
      setIndustry((industry) => [...industry, e.target.value]);
    } else {
      setIndustry((industry) => industry.filter((i) => i !== e.target.value));
    }
  };

  const handleSizeCheck = (e: any) => {
    if (e.target.ariaChecked === "false") {
      setSize((prev) => [...prev, e.target.value]);
    } else {
      setSize((prev) => prev.filter((i) => i !== e.target.value));
    }
  };

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
                value={i.industry}
                onClick={(e) => handleIndustryCheck(e)}
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
                value={i.size}
                onClick={(e) => handleSizeCheck(e)}
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
