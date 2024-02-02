import Intro from "@/assets/Companies/intro";
import Companies from "@/assets/Companies";
import Page from "@/assets/_UI/Page";
import { useState } from "react";

export default function CompaniesPage() {
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
      <Companies loading={{ isSearchLoading, setIsSearchLoading }} />
    </Page>
  );
}
