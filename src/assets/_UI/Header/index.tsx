import { ChevronLeft } from "lucide-react";
import ButtonBlock from "../_button";
import Logo from "../_logo";
import Menu from "./_menu";
import { useState } from "react";
import Sidebar from "./_sidebar";
import Auth from "./_auth";
import { useAppSelector } from "@/lib/store";
import UserAvatar from "./_avatar";

export default function Header({
  openSidebar,
  setOpenSidebar,
}: {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const user = useAppSelector((state) => state.auth.user);

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
      {/* Signin/Signup button for PCs */}
      {!user && <Auth className="hidden lg:flex" />}
    </section>
  );
}
