import Image from "next/image";
import { BlogProps } from "./blog";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function BlogContainer({ blog }: { blog: BlogProps }) {
  const imgStyle = {
    width: "auto",
  };

  return (
    <Link
      href={"/blogs?blog=" + blog.id.toString()}
      className="inline-block w-fit lg:w-full mx-auto lg:mx-0 sm:h-[320px] lg:h-[355px]"
    >
      <div className="w-96 lg:w-[420px] sm:h-[320px] lg:h-[355px] shadow-xl rounded-2xl py-2 cursor-default lg:hover:shadow-2xl px-4 flex flex-col justify-between">
        <Image
          src={blog.img_url}
          className="object-contain rounded-xl lg:h-[245px] lg:w-full mx-auto"
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
          <p className="text-right">{blog.published_date}</p>
        </div>
      </div>
    </Link>
  );
}
