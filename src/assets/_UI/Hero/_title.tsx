import SearchBar from "@/assets/SearchBar";
import Image from "next/image";

export default function Title() {
  return (
    <div className="md:w-[38%] flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-16">
      <div className="relative">
        <Image
          src="/static/images/hero/Image.png"
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
