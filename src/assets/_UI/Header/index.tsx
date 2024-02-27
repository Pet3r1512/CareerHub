import Logo from "../_logo";
import Sidebar from "./_sidebar";
import Auth from "./_auth";
import UserAvatar from "./_avatar";
import { useEffect, useState } from "react";
import DropDownMenu from "./dropDownMenu";
import { Menu } from "lucide-react";

export default function Header({
  openSidebar,
  setOpenSidebar,
  noMenu,
}: {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  noMenu?: boolean;
}) {
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(localStorage.getItem("user")!);
  }, []);

  return (
    <section className="w-full flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Logo imgClassName="h-28 lg:h-32" />
        <div className={noMenu ? "hidden" : ""}>
          <DropDownMenu />
        </div>
      </div>
      <button
        className="flex items-center lg:hidden font-semibold pr-4"
        onClick={() => {
          setOpenSidebar(true);
        }}
      >
        <Menu />
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
