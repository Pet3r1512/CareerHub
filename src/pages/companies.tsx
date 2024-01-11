import Header from "@/assets/_UI/Header";
import Footer from "@/assets/_UI/Footer";
import Intro from "@/assets/Companies/intro";
import Companies from "@/assets/Companies";

export default function CompaniesPage() {
  return (
    <main className="max-w-screen mx-auto pt-6 px-0 lg:min-h-screen">
      <section className="max-w-[100rem] mx-auto px-2 lg:px-0">
        <Header />
      </section>
      <section className="lg:max-h-screen w-full">
        <Intro
          title="dream companies"
          description="Find the dream companies you dream work for"
          searchType="company"
        />
      </section>
      <section className="lg:min-h-screen w-full">
        <Companies />
      </section>
      <Footer />
    </main>
  );
}
