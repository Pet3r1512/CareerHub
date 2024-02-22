import { useSearchParams } from "next/navigation";

import { coverLetters } from "@/data/advices/cover-letters";
import Blog from "@/assets/Advice/blog";
import Page from "@/assets/_UI/Page";

export default function BlogPage() {
  const blogId = useSearchParams().get("blog");
  return (
    <Page pageName="Blog">
      <div className="pt-16">
        {coverLetters.map((item) => {
          if (item.id.toString() === blogId) {
            return <Blog blog={item} />;
          }
        })}
      </div>
    </Page>
  );
}
