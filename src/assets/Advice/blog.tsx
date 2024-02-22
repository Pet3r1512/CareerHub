import Image from "next/image";

export interface BlogProps {
  id: number;
  img_url: string;
  title: string;
  type: string;
  published_date: string;
  author: string;
  content: string;
}

export default function Blog({ blog }: { blog: BlogProps }) {
  return (
    <div key={blog.id}>
      <Image
        src={blog.img_url}
        alt=""
        className="h-96 w-full object-cover"
        width={1000}
        height={384}
      />
      <h1 className="text-3xl font-bold my-4">{blog.title}</h1>
      <p className="text-right cursor-default font-semibold text-lg text-primary">
        {blog.author} - {blog.published_date}
      </p>
      <div dangerouslySetInnerHTML={RenderHTML(blog.content)} />
    </div>
  );
}

function RenderHTML(html: string) {
  return { __html: html };
}
