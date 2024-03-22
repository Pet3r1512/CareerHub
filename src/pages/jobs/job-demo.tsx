import About from "@/assets/Jobs/about";
import AdditionReq from "@/assets/Jobs/addition-req";
import Categories from "@/assets/Jobs/categories";
import JobDetail from "@/assets/Jobs/job-detail";
import JobHeader from "@/assets/Jobs/job-header";
import Requirement from "@/assets/Jobs/requirement";
import Page from "@/assets/_UI/Page";

export default function JobDemo() {
  return (
    <Page pageName="Job Description">
      <JobHeader></JobHeader>
      <div className="flex gap-8">
        <div className="flex flex-col w-full lg:w-[78%] p-8 gap-10">
          <JobDetail></JobDetail>
          <hr className="lg:hidden" />
          <Requirement></Requirement>
          <hr className="lg:hidden" />
          <AdditionReq></AdditionReq>
          <hr className="lg:hidden" />
        </div>
        <div className="p-8 gap-10 w-[22%] flex flex-col">
          <About></About>
          <hr />
          <Categories></Categories>
        </div>
      </div>
      <hr />
    </Page>
  );
}
