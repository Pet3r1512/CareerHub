import Blog from "@/assets/Advice/blog";
import BlogContainer from "@/assets/Advice/blogContainer";
import Page from "@/assets/_UI/Page";

import { coverLetters } from "@/data/advices/cover-letters";

export default function Advice() {
  return (
    <Page pageName="Advice">
      <div className="pt-16">
        {coverLetters.map((blog) => {
          return <BlogContainer blog={blog} />;
        })}
      </div>
    </Page>
  );
}
