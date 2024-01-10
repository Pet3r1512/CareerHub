import Header from "@/assets/_UI/Header";
import Footer from "@/assets/_UI/Footer";
import Intro from "@/assets/Companies/intro";

export default function Companies() {
  return (
    <main className="max-w-screen mx-auto pt-6 px-2 lg:px-0 lg:min-h-screen">
      <section className="max-w-[100rem] mx-auto">
        <Header />
      </section>
      <section className="lg:min-h-screen w-full flex flex-col lg:gap-24 gap-12">
        <Intro
          title="dream companies"
          description="Find the dream companies you dream work for"
          searchType="company"
        />
      </section>
      <Footer />
    </main>
  );
}
