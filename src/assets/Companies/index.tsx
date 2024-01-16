import CompaniesOptions from "../_UI/SideOptions/companiesOptions";
import CompaniesContainer from "./companiesContainer";

export default function Companies() {
  return (
    <section className="min-h-screen w-full lg:flex justify-evenly">
      <CompaniesOptions />
      <CompaniesContainer />
    </section>
  );
}
