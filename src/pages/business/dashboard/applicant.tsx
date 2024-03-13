import Page from "@/assets/Business/_UI/Page";
import ApplicantFilter from "@/assets/Business/dashboard/filter";
import ApplicantFilter2 from "@/assets/Business/dashboard/filter2";
import ApplicantInfor from "@/assets/Business/dashboard/applicantinfor";

export default function Applicant() {
  return (
    <Page pageName="Applicant">
      <ApplicantFilter />
      <ApplicantFilter2 />
      <ApplicantInfor />
    </Page>
  );
}
