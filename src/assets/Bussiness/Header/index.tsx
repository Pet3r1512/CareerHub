import BusinessLogo from "../_UI/logo";

export default function Header() {
  return (
    <section className="w-full flex justify-between items-center">
      <div className="flex items-end gap-8">
        <BusinessLogo />
      </div>
    </section>
  );
}
