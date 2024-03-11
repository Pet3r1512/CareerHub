import { useRouter } from "next/router";
import { companies } from "@/data/companies";
import Page from "@/assets/_UI/Page";
import CompanyHeader from "@/components/company/company-header";
import Profile from "@/components/company/profile";
import CompanyTeam from "@/components/company/company-team";

export default function CompanyPage() {
  const router = useRouter();
  const { slug } = router.query;

  const companyName = slug?.toString().replace(/-/g, " ");

  const company = companies.find(
    (company) => company.name.toLowerCase() === companyName
  );

  if (!company) {
    return <Page pageName="Not Found">Company not found</Page>;
  }

  return (
    <Page pageName={company.name}>
      <div className="flex flex-col gap-8">
        <CompanyHeader />
        <Profile />
        <CompanyTeam />
      </div>
    </Page>
  );
}
