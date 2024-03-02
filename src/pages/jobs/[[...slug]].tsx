import Page from "@/assets/_UI/Page";
import Intro from "@/assets/Companies/intro";
import CompaniesAndJobsLayout from "@/assets/Companies";
import { useState } from "react";

export default function JobsPage() {
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  return (
    <Page pageName="Jobs">
      <Intro
        title="dream jobs"
        description="Find your next career at companies like HubSpot, Nike, and Dropbox."
        searchType="job"
        className="mt-8 lg:max-h-screen w-full"
        loading={{ isSearchLoading, setIsSearchLoading }}
      />
      <CompaniesAndJobsLayout
        loading={{ isSearchLoading, setIsSearchLoading }}
        type="job"
      />
    </Page>
  );
}
