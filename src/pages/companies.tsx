import Header from "@/assets/_UI/Header";
import Footer from "@/assets/_UI/Footer";
import Intro from "@/assets/Companies/intro";
import Companies from "@/assets/Companies";

export default function CompaniesPage() {
  return (
    <main className="max-w-screen pt-6 px-0 lg:min-h-screen">
      <section className="max-w-[100rem] mx-auto px-2 lg:px-0">
        <Header />
      </section>
      <Intro
        title="dream companies"
        description="Find the dream companies you dream work for"
        searchType="company"
        className="mt-8 lg:max-h-screen w-full"
      />
      <Companies />
      <Footer />
    </main>
  );
}
