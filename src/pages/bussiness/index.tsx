import Hero from "@/assets/Bussiness/Hero";
import Page from "@/assets/Bussiness/_UI/Page";

export default function Bussiness() {
  return (
    <Page pageName="Home">
      <div className="flex items-center justify-center">
        <Hero />
      </div>
    </Page>
  );
}
