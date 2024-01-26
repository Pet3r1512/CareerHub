import Header from "@/assets/_UI/Header";
import Intro from "@/assets/Companies/intro";
import Companies from "@/assets/Companies";
import Page from "@/assets/_UI/Page";

export default function CompaniesPage() {
  return (
    <Page
      className="pt-6 px-0 lg:min-h-screen max-w-screen"
      pageName="Companies"
    >
      {/* <section className="max-w-[100rem] mx-auto px-2 lg:px-0">
        <Header />
      </section> */}
      <Intro
        title="dream companies"
        description="Find the dream companies you dream work for"
        searchType="company"
        className="mt-8 lg:max-h-screen w-full"
      />
      <Companies />
    </Page>
  );
}
