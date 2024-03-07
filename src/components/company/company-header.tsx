import { Eye, Settings } from "lucide-react";
import Image from "next/image";
import CompanyLabel from "./company-label";
import { Button } from "../ui/button";

export default function CompanyHeader() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:border-y-2 lg:py-8">
      <div className="relative w-full flex justify-between p-2 items-center lg:items-start">
        <div className="lg:w-[150px] lg:h-[150px] w-[80px] h-[80px] relative">
          <Image
            src="https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/Companies/Google.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL0NvbXBhbmllcy9Hb29nbGUucG5nIiwiaWF0IjoxNzA5Mjg1Mjg3LCJleHAiOjE3NDA4MjEyODd9.JG3N4cZeUhYoDsWjXUGbTSzer9dI-r1ROV864n5aCTg&t=2024-03-01T09%3A27%3A59.461Z"
            alt="BusinessSolutions Inc."
            fill
            style={{ objectFit: "cover" }}
          />
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
          <p>BusinessSolutions Inc.</p>
        </div>
        <CompanyLabel
          content={{
            founded: "23-02-2002",
            employees: 6,
            location: "Ho Chi Minh City",
            industry: "None",
          }}
        />
      </div>
    </div>
  );
}
