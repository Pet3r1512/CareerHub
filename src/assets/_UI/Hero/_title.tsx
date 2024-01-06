import SearchBar from "@/assets/SearchBar";
import Image from "next/image";

export default function Title() {
  return (
    <div className="md:w-[38%] flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-16">
      <h1 className="text-[70px] leading-none md:text-6xl lg:text-[90px] md:leading-none font-bold">
        Discover more than{" "}
        <span className="text-blue leading-tight">5000+ Jobs</span>
      </h1>
      <p className="md:text-md lg:text-lg font-semibold text-gray">
        An excellent platform for individuals enthusiastic about startups.
        Discover your ideal job more effortlessly in this haven.
      </p>
      <SearchBar />
    </div>
  );
}
