import SearchBar2 from "../SearchBar2";
import { popularCompanies, popularJobs } from "@/data/popular";

type IntroProps = {
  title: string;
  description: string;
  searchType: "job" | "company";
};

export default function Intro({ title, description, searchType }: IntroProps) {
  return (
    <section className="w-full mt-8">
      <div className="flex flex-col gap-8 justify-center items-center w-full p-16 px-8 lg:p-24 bg-gray-100">
        <p className="text-5xl font-bold font-serif">
          Find your{" "}
          <span className="text-blue underline underline-offset-[8px]">
            {title}
          </span>
        </p>
        <p className="text-base text-center opacity-70">{description}</p>
        <div className="w-full flex flex-col gap-4 items-center">
          <SearchBar2 type={searchType} />
          <div className="lg:w-[90%] w-full">
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
