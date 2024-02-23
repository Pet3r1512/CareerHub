import Image from "next/image";
import { BlogProps } from "./blog";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function BlogContainer({ blog }: { blog: BlogProps }) {
  const imgStyle = {
    width: "auto",
  };

  function isToday(dateString: string): string {
    const currentDate: Date = new Date();
    const currentDateString: string = currentDate.toLocaleDateString("en-GB");

    const parts: string[] = dateString.split("/");
    const dateFromDateString: Date = new Date(
      parseInt(parts[2]),
      parseInt(parts[1]) - 1,
      parseInt(parts[0])
    );

    if (currentDate.toDateString() === dateFromDateString.toDateString()) {
      return "Today";
    } else {
      return dateString;
    }
  }

  return (
    <Link
      href={"/blogs?blog=" + blog.id.toString()}
      className="inline-block w-fit lg:w-full mx-auto lg:mx-0 sm:h-[335px] lg:h-[370px]"
    >
      <div className="w-96 xl:w-[435px] sm:h-[335px] lg:h-[370px] shadow-xl rounded-2xl py-2 cursor-default lg:hover:shadow-2xl px-4 pb-4 flex flex-col justify-between gap-y-4 sm:gap-y-0">
        <Image
          src={blog.img_url}
          className="object-contain rounded-xl h-1/2 lg:h-[245px] lg:w-full mx-auto"
          alt={""}
          height={1000}
          width={1000}
          quality={20}
          priority
          style={imgStyle}
        />
        <h1 className="line-clamp-2 font-semibold text-lg">{blog.title}</h1>
        <div className="flex items-center justify-between">
          <Badge className="bg-primary text-white">{blog.type}</Badge>
          <p className="text-right font-semibold">
            {isToday(blog.published_date)}
          </p>
        </div>
      </div>
    </Link>
  );
}
