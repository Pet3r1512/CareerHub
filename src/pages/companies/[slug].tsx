import Page from "@/assets/_UI/Page";
import CompanyHeader from "@/components/company/company-header";
import Profile from "@/components/company/profile";
import CompanyTeam from "@/components/company/company-team";
import prisma from "@/lib/prisma";
import { Company } from "@/types/company";

export async function getServerSideProps({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const companyName = params.slug.toString().replace(/-/g, " ");
    const company = await prisma.company.findFirst({
      where: {
        name: {
          contains: companyName,
          mode: "insensitive",
        },
      },
    });
    return {
      props: {
        company: JSON.parse(JSON.stringify(company)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        company: [],
        error: "Could not fetch data. Please try again later.",
      },
    };
  }
}

export default function CompanyPage(props: {
  company: Company;
  error?: string;
}) {
  if (!props.company) {
    return <Page pageName="Not Found">Company not found</Page>;
  }

  return (
    <Page pageName={props.company.name}>
      <div className="flex flex-col gap-8">
        <CompanyHeader />
        <Profile />
        <CompanyTeam />
      </div>
    </Page>
  );
}
