import { Eye, Settings } from "lucide-react";
import Image from "next/image";
import CompanyLabel from "./company-label";
import { Button } from "../ui/button";

export default function CompanyHeader() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex justify-between">
        <div className="lg:w-[150px] lg:h-[150px] w-[100px] h-[100px]">
          <Image
            src="https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/Companies/Google.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL0NvbXBhbmllcy9Hb29nbGUucG5nIiwiaWF0IjoxNzA5Mjg1Mjg3LCJleHAiOjE3NDA4MjEyODd9.JG3N4cZeUhYoDsWjXUGbTSzer9dI-r1ROV864n5aCTg&t=2024-03-01T09%3A27%3A59.461Z"
            alt="BusinessSolutions Inc."
            width={150}
            height={150}
          />
        </div>
        <div className="flex gap-4 lg:hidden">
          <Button className="text-primary bg-white hover:bg-white gap-x-2">
            <Eye />
            <span className="hidden lg:block">Public View</span>
          </Button>
          <Button className="text-primary bg-white hover:bg-white border-2 border-primary gap-x-2">
            <Settings />
            <span className="hidden lg:block">Profile Settings</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full gap-y-5">
        <div className="flex w-full text-3xl lg:text-5xl justify-between">
          <p>BusinessSolutions Inc.</p>
          <div className="lg:flex gap-4 hidden">
            <Button className="text-primary bg-white hover:bg-white gap-x-2">
              <Eye />
              <span className="hidden lg:block">Public View</span>
            </Button>
            <Button className="text-primary bg-white hover:bg-white border-2 border-primary gap-x-2">
              <Eye />
              <span className="hidden lg:block">Profile Settings</span>
            </Button>
          </div>
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
