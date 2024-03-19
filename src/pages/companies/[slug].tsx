import Page from "@/assets/_UI/Page";
import CompanyHeader from "@/components/company/company-header";
import Profile from "@/components/company/profile";
import CompanyTeam from "@/components/company/company-team";
import prisma from "@/lib/prisma";
import { Company, CompanyURL } from "@/types/company";

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

    const url = await prisma.uRL.findFirst({
      where: {
        companyId: company?.uuid,
      },
    });
    return {
      props: {
        company: JSON.parse(JSON.stringify(company)),
        url: JSON.parse(JSON.stringify(url)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        company: [],
        url: {},
        error: "Could not fetch data. Please try again later.",
      },
    };
  }
}

export default function CompanyPage(props: {
  company: Company;
  url: CompanyURL;
  error?: string;
}) {
  if (!props.company) {
    return <Page pageName="Not Found">Company not found</Page>;
  }

  return (
    <Page pageName={props.company.name}>
      <div className="flex flex-col gap-8">
        <CompanyHeader
          name={props.company.name}
          image={props.company.image}
          founded={props.company.created_date}
          employees={props.company.company_size}
          location={props.company.location}
          industry={props.company.industry_tags}
        />
        <Profile description={props.company.description} url={props.url} />
        <CompanyTeam />
      </div>
    </Page>
  );
}
