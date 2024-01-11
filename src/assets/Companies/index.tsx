import CompaniesOptions from "../_UI/SideOptions/companiesOptions";

export default function Companies() {
  return (
    <section className="w-full h-full flex">
      <CompaniesOptions />
      <section className="bg-gray-700 w-3/4 h-full lg:p-12 lg:px-16">
        Main
      </section>
    </section>
  );
}
