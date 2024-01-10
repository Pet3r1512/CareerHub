import Page from "@/assets/_UI/Page";
import Header from "@/assets/_UI/Header";
import Intro from "@/assets/Companies/intro";

export default function Companies() {
  return (
    <Page>
      <Header />
      <main className="absolute w-screen left-0 lg:min-h-screen flex flex-col lg:gap-24 gap-12">
        <Intro
          title="dream companies"
          description="Find the dream companies you dream work for"
        />
      </main>
    </Page>
  );
}
