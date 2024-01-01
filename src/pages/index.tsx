import ButtonBlock from "@/assets/_UI/_button";
import Header from "@/assets/_UI/Header";
import Hero from "@/assets/_UI/Hero";
import Page from "@/assets/_UI/Page";
import Sponsor from "@/assets/_UI/Sponsor";

export default function Home() {
  return (
    <Page className="flex flex-col gap-y-4 md:gap-y-24">
      <Header />
      <section className="lg:min-h-screen lg:pb-16 relative">
        <Hero />
        <Sponsor />
      </section>
    </Page>
  );
}
