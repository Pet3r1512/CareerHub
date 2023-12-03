import ButtonBlock from "../_button";
import Logo from "../_logo";
import Menu from "./_menu";

export default function Header() {
  return (
    <section className="w-full flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Logo />
        <Menu />
      </div>
      <div className="flex items-center gap-5">
        <ButtonBlock
          className="bg-white text-primary font-bold"
          content="Login"
        />
        <ButtonBlock content="Sign Up" />
      </div>
    </section>
  );
}
