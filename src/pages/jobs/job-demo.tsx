import AdditionReq from "@/assets/Jobs/addition-req";
import JobDetail from "@/assets/Jobs/job-detail";
import JobHeader from "@/assets/Jobs/job-header";
import Requirement from "@/assets/Jobs/requirement";
import Page from "@/assets/_UI/Page";

export default function JobDemo() {
  return (
    <Page pageName="Job Description">
      <JobHeader></JobHeader>
      <div className="flex flex-col w-full lg:w-2/3 p-8 gap-10">
        <JobDetail></JobDetail>
        <hr className="lg:hidden" />
        <Requirement></Requirement>
        <hr className="lg:hidden" />
        <AdditionReq></AdditionReq>
      </div>
    </Page>
  );
}
