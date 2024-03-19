import { Eye, Settings } from "lucide-react";
import Image from "next/image";
import CompanyLabel from "./company-label";
import { Button } from "../ui/button";
import moment from "moment";

export default function CompanyHeader({
  name,
  image,
  founded,
  employees,
  location,
  industry,
}: {
  name: string;
  image: string;
  founded: Date;
  employees: number;
  location: string;
  industry: string[];
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:border-y-2 lg:py-8">
      <div className="relative w-full flex justify-between p-2 items-center lg:items-start">
        <div className="lg:w-[150px] lg:h-[150px] w-[80px] h-[80px] relative">
          <Image src={image} alt={name} fill style={{ objectFit: "cover" }} />
        </div>
        <div className="flex gap-4">
          <Button className="text-primary bg-white hover:bg-white gap-x-2">
            <Eye />
            <span className="hidden xl:block">Public View</span>
          </Button>
          <Button className="text-primary bg-white hover:bg-white border-2 border-primary gap-x-2">
            <Settings />
            <span className="hidden xl:block">Profile Settings</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full lg:w-2/3 gap-y-5 lg:absolute lg:left-[20%] px-2 lg:p-0">
        <div className="flex w-full text-3xl lg:text-5xl justify-between">
          <p>{name}</p>
        </div>
        <CompanyLabel
          content={{
            founded: moment(founded).format("DD-MM-YYYY"),
            employees: employees,
            location: location,
            industry: industry.join(", "),
          }}
        />
      </div>
    </div>
  );
}
