import { Drawer } from "@material-tailwind/react";
import { Dispatch, SetStateAction } from "react";
import Logo from "../_logo";
import Menu from "./_menu";
import { ChevronRight } from "lucide-react";
import Auth from "./_auth";
import UserAvatar from "./_avatar";
import { useAppSelector } from "@/lib/store";

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <Drawer
      open={isOpen}
      placement="right"
      className="px-4 py-6 flex flex-col gap-y-8"
    >
      <div className="flex items-center justify-between">
        <Logo />
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex items-center font-bold"
        >
          Close
          <ChevronRight />
        </button>
      </div>
      <div className="flex flex-col justify-between h-full">
        <Menu className="flex flex-col" />
        {!user ? <Auth /> : <UserAvatar />}
      </div>
    </Drawer>
  );
}
