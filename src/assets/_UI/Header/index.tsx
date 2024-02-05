import { ChevronLeft } from "lucide-react";
import Logo from "../_logo";
import Menu from "./_menu";
import Sidebar from "./_sidebar";
import Auth from "./_auth";
import UserAvatar from "./_avatar";
import { useEffect, useState } from "react";

export default function Header({
  openSidebar,
  setOpenSidebar,
}: {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(localStorage.getItem("user")!);
  }, []);

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
      {!user ? (
        <Auth className="hidden lg:flex" />
      ) : (
        <div className="hidden lg:block">
          <UserAvatar />
        </div>
      )}
    </section>
  );
}
