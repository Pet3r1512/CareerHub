import { useSearchParams } from "next/navigation";

import { advices_blogs } from "@/data/advices/advice-blogs";
import Blog, { BlogProps } from "@/assets/Blog/blog";
import Page from "@/assets/_UI/Page";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogDetail() {
  const [currentBlog, setCurrentBlog] = useState<BlogProps>();
  const [loading, setLoading] = useState(false);
  const blogId = useSearchParams().get("blog");

  function getBlogDetail(blogId: string) {
    return advices_blogs.find((item) => item.id.toString() === blogId);
  }

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setCurrentBlog(getBlogDetail(blogId!));
      setLoading(false);
    }, Math.random() * (1500 - 500) + 500);
    return () => clearTimeout(timer);
  }, [useSearchParams()]);

  return (
    <Page pageName="Blog">
      <div className="pt-16">
        {loading ? (
          <>
            <Skeleton className="w-full h-[336px]" />
            <Skeleton className="w-full h-[31.5px] mt-4" />
          </>
        ) : (
          currentBlog && <Blog blog={currentBlog} />
        )}
      </div>
    </Page>
  );
}
