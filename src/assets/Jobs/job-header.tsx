import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import Image from "next/image";

export default function JobHeader() {
  return (
    <div className="flex flex-col w-full lg:w-full lg:p-8 gap-8">
      <div className="bg-gray-100 w-full px-8 py-12 lg:p-10">
        <div className="flex flex-col lg:flex-row justify-between items-center border-2 border-gray bg-white w-full h-full p-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center w-fit h-fit gap-4 lg:gap-6">
            <div className="flex flex-row items-center justify-between lg:hidden gap-x-48">
              <Image
                src={
                  "https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/Companies/Acme.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL0NvbXBhbmllcy9BY21lLnBuZyIsImlhdCI6MTcwNDcwODY5NCwiZXhwIjoxNzM2MjQ0Njk0fQ.6NWYj1PZiq2-X-iRnb15hB0v8UQmn1CTSsdOpJbzmbY&t=2024-01-08T10%3A11%3A32.805Z"
                }
                alt={"company logo"}
                width={80}
                height={80}
                style={{ objectFit: "cover" }}
              />
              <Share2 size={55} className="text-gray-500 lg:hidden" />
            </div>
            <div className="lg:gap-2">
              <h1 className="text-4xl">Social Media Assistant</h1>
              <p className="text-lg font-normal">
                Stripe | Paris, France | Full-Time
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center w-fit h-fit gap-8">
            <div>
              <Share2 size={45} className="text-gray-500 hidden lg:block" />
            </div>
            <div className="border-[1px] border-gray-300 rotate-90 w-14 hidden lg:block"></div>
            <div className="gap-2.5">
              <Button className="text-2xl text-white bg-primary w-fit px-24 py-8 lg:px-24 lg:py-8">
                <span>Apply</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
