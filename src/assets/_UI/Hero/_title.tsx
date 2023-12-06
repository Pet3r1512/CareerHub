import SearchBar from "@/assets/SearchBar";

export default function Title() {
  return (
    <div className="md:w-[38%] flex flex-col gap-y-16">
      <h1 className="md:text-[95px] md:leading-none font-bold">
        Discover more than <span className="text-blue">5000+ Jobs</span>
      </h1>
      <p className="text-lg font-semibold text-gray">
        Great platform for job seekers that passionate about startups. Find your
        dream job easier in this paradise
      </p>
      <SearchBar />
    </div>
  );
}
