import Image from "next/image";
import { BlogProps } from "./blog";
import Link from "next/link";

export default function BlogContainer({ blog }: { blog: BlogProps }) {
  const imgStyle = {
    width: "auto",
  };

  return (
    <Link href={"/blogs?blog=" + blog.id.toString()}>
      <div className="w-96 shadow-xl rounded-2xl p-2 cursor-default lg:hover:shadow-2xl">
        <Image
          src={blog.img_url}
          className="object-cover rounded-xl"
          alt={""}
          height={24}
          width={1000}
          quality={20}
          priority
          style={imgStyle}
        />
        <h1 className="line-clamp-2 font-semibold text-lg">{blog.title}</h1>
        <p className="text-right">{blog.published_date}</p>
      </div>
    </Link>
  );
}
