import Button from "@material-tailwind/react/components/Button";
import Page from "../_UI/Page";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ApplicantFilter() {
  return (
    <div className="flex lg:flex-row flex-col justify-between">
      <div className="text-[30px] font-extrabold text-center flex items-center">
        Total Applicants: 20
      </div>
      <div className="flex flex-row">
        <div className="w-[350px] mr-2 relative">
          <Search className="absolute top-3 left-2 " />
          <Input
            type="text"
            placeholder="Search Applicant"
            className="w-full h-full pl-10 rounded-none focus-visible:ring-0 focus-visible:border-gray-300  border-gray-300 focus-visible:ring-offset-0  focus-visible:border-2 border-2"
          />
        </div>
        <div className="border-2 flex flex-row items-center pr-2 ">
          {" "}
          <Filter className="mx-2" />
          Filter
        </div>
      </div>

      <div className=" h-full bg-gray-500 border-2 border-gray-300 flex flex-col lg:flex-row">
        <Button className="rounded-none bg-gray-500 ">Pipeline View</Button>
        <Button className="rounded-none text-primary bg-white ">
          Table View
        </Button>
      </div>
    </div>
  );
}
