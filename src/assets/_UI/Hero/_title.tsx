import SearchBar from "@/assets/SearchBar";
import Image from "next/image";

export default function Title() {
  return (
    <div className="md:w-[38%] flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-16">
      <div className="relative">
        <Image
          src="https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/Hero.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL0hlcm8ucG5nIiwiaWF0IjoxNzAyOTk3Mjc1LCJleHAiOjE3MzQ1MzMyNzV9.p1aKs31GREmrubUD2oE1AMmGDNpGRmh0YeuwdBfMmlo&t=2023-12-19T14%3A47%3A44.808Z"
          alt=""
          // width={731.6} height={710.4}
          fill
          sizes="100"
          className="md:hidden !h-fit !w-full !mx-auto !relative"
        />
      </div>
      <h1 className="text-2xl md:text-6xl lg:text-[90px] md:leading-none font-bold">
        Discover more than <span className="text-blue">5000+ Jobs</span>
      </h1>
      <p className="md:text-md lg:text-lg font-semibold text-gray">
        Great platform for job seekers that passionate about startups. Find your
        dream job easier in this paradise
      </p>
      <SearchBar />
    </div>
  );
}
