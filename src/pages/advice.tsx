import BlogContainer from "@/assets/Advice/blogContainer";
import Page from "@/assets/_UI/Page";

import { advices_blogs } from "@/data/advices/advice-blogs";

export default function Advice() {
  return (
    <Page pageName="Advice">
      <div className="pt-16">
        {advices_blogs.map((blog, index) => {
          return <BlogContainer key={blog.id + index.toString()} blog={blog} />;
        })}
      </div>
    </Page>
  );
}
