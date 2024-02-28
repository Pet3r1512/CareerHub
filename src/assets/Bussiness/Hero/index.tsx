import ImageWithLoading from "@/assets/_UI/_imageWithLoading";
import Introduction from "./introduction";
import { Suspense } from "react";

export default function Hero() {
  return (
    <section className="flex justify-between md:items-start relative md:unset lg:min-h-screen w-full mt-4 md:mt-0">
      <Introduction />
      <Suspense fallback={<>Loading...</>}>
        <div className="w-[55%] [&>p]:unset relative sm:unset hidden md:block h-fit md:mr-[-40px] lg:mr-[-120px]">
          <ImageWithLoading
            src="https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/Illustrations/business.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL0lsbHVzdHJhdGlvbnMvYnVzaW5lc3MucG5nIiwiaWF0IjoxNzA5MDQyNjMyLCJleHAiOjE3NDA1Nzg2MzJ9.kK8RvzoW2t2hgKKbWo8bO-NwCBlyTMsxS9YH8QZfN_A&t=2024-02-27T14%3A03%3A52.751Z"
            priority
            sizes={"100"}
            fill
            className="hidden md:block object-contain !h-fit !relative md:unset top-1/2 lg:top-0 my-auto lg:mt-0 !w-full ml-auto"
          />
        </div>
      </Suspense>
      {/* 1829 x 1776 */}
    </section>
  );
}
