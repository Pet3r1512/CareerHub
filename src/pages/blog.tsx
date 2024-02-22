import { BlogProps } from "@/assets/Blog/blog";
import BlogContainer from "@/assets/Blog/blogContainer";
import LoadingBlogContainer from "@/assets/Blog/loadingBlogContainer";
import Page from "@/assets/_UI/Page";

import { useEffect, useState } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getBlogs = async () => {
      try {
        const result = await fetch("/api/blogs/getBlogs");
        if (result.ok) {
          const data = await result.json();
          setBlogs(data.blogs);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getBlogs();
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingBlogContainer />;
  }

  return (
    <Page pageName="Advice">
      <div className="pt-16 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-y-14 lg:gap-0">
        {blogs.map((blog, index) => {
          return <BlogContainer key={blog.id + index.toString()} blog={blog} />;
        })}
      </div>
    </Page>
  );
}
