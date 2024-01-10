import SearchBar2 from "../SearchBar2";
import { popularCompanies } from "@/data/popular";

type IntroProps = {
  title: string;
  description: string;
};

export default function Intro({ title, description }: IntroProps) {
  return (
    <section className="w-full mt-8">
      <div className="flex flex-col gap-8 justify-center items-center w-full p-16 px-8 lg:p-24 lg:px-36 bg-gray-100">
        <p className="text-5xl font-bold font-serif">
          Find your{" "}
          <span className="text-blue underline underline-offset-[8px]">
            {title}
          </span>
        </p>
        <p className="text-base text-center mt-4 opacity-70">{description}</p>
        <div className="w-full flex flex-col gap-4">
          <SearchBar2 type="company" />
          <p className="text-gray-600">
            Popular: {popularCompanies.join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
}
