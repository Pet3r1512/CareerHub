import SearchBar2 from "../SearchBar2";
import { popularCompanies, popularJobs } from "@/data/popular";
import Image from "next/image";

type IntroProps = {
  title: string;
  description: string;
  searchType: "job" | "company";
};

export default function Intro({ title, description, searchType }: IntroProps) {
  return (
    <section className="w-full mt-8">
      <div className="flex flex-col gap-10 justify-center items-center w-full p-16 px-8 lg:p-24 lg:px-32 bg-gray-100 relative">
        <div className="w-full h-full absolute left-0 z-0 opacity-50">
          <Image
            src="/images/Intro/Intro.jpg"
            alt="background"
            fill
            style={{ objectFit: "cover" }}
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
          <SearchBar2 type={searchType} />
          <div className="w-full">
            <p className="text-gray-600">
              Popular:{" "}
              {searchType == "company"
                ? popularCompanies.join(", ")
                : popularJobs.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
