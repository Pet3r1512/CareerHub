import SearchBar2 from "../SearchBar2";
import { popularCompanies, popularJobs } from "@/data/popular";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type IntroProps = {
  title: string;
  description: string;
  searchType: "job" | "company";
  className?: string;
  loading: {
    isSearchLoading: boolean;
    setIsSearchLoading: (value: boolean) => void;
  };
};

export default function Intro({
  title,
  description,
  searchType,
  className,
  loading,
}: IntroProps) {
  return (
    <section
      className={twMerge(
        "flex flex-col gap-10 justify-center items-center w-full p-16 px-8 lg:p-24 lg:px-32 bg-gray-100 relative",
        className
      )}
    >
      <div className="w-full h-full absolute left-0 z-0 opacity-50">
        <Image
          src="/images/Intro/Intro.jpg"
          alt="background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="w-full h-full backdrop-blur-sm bg-white/30 "></div>
      </div>
      <p className="text-5xl font-bold font-serif z-10">
        Find your{" "}
        <span className="text-blue underline underline-offset-[8px]">
          {title}
        </span>
      </p>
      <p className="text-base text-center opacity-70 z-10">{description}</p>
      <div className="w-full flex flex-col gap-4 items-center z-10">
        <SearchBar2 type={searchType} loading={loading} />
        <div className="w-full">
          <p className="text-gray-600">
            Popular:{" "}
            {searchType == "company"
              ? popularCompanies.join(", ")
              : popularJobs.join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
}
