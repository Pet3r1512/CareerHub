import Header from "@/assets/_UI/Header";
import Hero from "@/assets/_UI/Hero";
import Page from "@/assets/_UI/Page";
import Category from "@/assets/home/Category";
import FeaturedJobs from "@/assets/home/Featured-Jobs";
import LatestJobs from "@/assets/home/Latest-Jobs";

export default function Home() {
  return (
    <Page className="flex flex-col gap-y-4 md:gap-y-24">
      <section className="lg:min-h-screen flex flex-col lg:gap-24 gap-12">
        <Hero />
        <Category />
        <FeaturedJobs />
        <LatestJobs />
      </section>
    </Page>
  );
}
