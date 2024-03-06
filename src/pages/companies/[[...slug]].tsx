import Intro from "@/assets/Companies/intro";
import CompaniesAndJobsLayout from "@/assets/Companies";
import Page from "@/assets/_UI/Page";
import { useState } from "react";
import prisma from "@/lib/prisma";

export async function getServerSideProps() {
  try {
    const companies = await prisma.company.findMany();
    return {
      props: {
        companies: JSON.parse(JSON.stringify(companies)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        companies: [],
        error: "Could not fetch data. Please try again later.",
      },
    };
  }
}

export default function CompaniesPage(props: {
  companies: any[];
  error?: string;
}) {
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  return (
    <Page className="relative" pageName="Companies">
      <Intro
        title="dream companies"
        description="Find the dream companies you dream work for"
        searchType="company"
        className="mt-8 lg:max-h-screen w-full"
        loading={{ isSearchLoading, setIsSearchLoading }}
      />
      <CompaniesAndJobsLayout
        loading={{ isSearchLoading, setIsSearchLoading }}
        type="company"
        data={props.companies}
      />
    </Page>
  );
}
