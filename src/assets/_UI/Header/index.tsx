import { ChevronLeft } from "lucide-react";
import ButtonBlock from "../_button";
import Logo from "../_logo";
import Menu from "./_menu";
import { useState } from "react";
import Sidebar from "./_sidebar";
import Auth from "./_auth";

export default function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <section className="w-full flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Logo />
        <Menu />
      </div>
      <button
        className="flex items-center lg:hidden font-semibold"
        onClick={() => {
          setOpenSidebar(true);
        }}
      >
        Menu <ChevronLeft />
      </button>
      <Sidebar isOpen={openSidebar} setIsOpen={setOpenSidebar} />
      <Auth className="hidden lg:flex" />
    </section>
  );
}
