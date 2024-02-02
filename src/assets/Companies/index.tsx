import CompaniesOptions from "../_UI/SideOptions/companiesOptions";
import CompaniesContainer from "./companiesContainer";

export default function Companies({
  loading,
}: {
  loading: {
    isSearchLoading: boolean;
    setIsSearchLoading: (value: boolean) => void;
  };
}) {
  return (
    <section className="min-h-screen w-full lg:flex justify-evenly">
      <CompaniesOptions />
      <CompaniesContainer loading={loading} />
    </section>
  );
}
