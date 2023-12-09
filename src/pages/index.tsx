import ButtonBlock from "@/assets/_UI/_button";
import Header from "@/assets/_UI/Header";
import Hero from "@/assets/_UI/Hero";
import Page from "@/assets/_UI/Page";

export default function Home() {
  return (
    <Page className="flex flex-col gap-y-4 md:gap-y-24">
      <Header />
      <section className="md:min-h-screen">
        <Hero />
      </section>
    </Page>
  );
}
