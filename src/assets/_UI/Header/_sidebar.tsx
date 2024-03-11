import { Drawer } from "@material-tailwind/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Logo from "../_logo";
import { User, X } from "lucide-react";
import Auth from "./_auth";
import UserAvatar from "./_avatar";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuAccordion from "./menuAccordion";

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [authData, setAuthData] = useState({
    user: "",
    token: "",
  });
  const router = useRouter();
  useEffect(() => {
    setAuthData({
      user: localStorage.getItem("user")!,
      token: localStorage.getItem("token")!,
    });
  }, []);

  return (
    <Drawer
      placeholder=""
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      placement="right"
      className={twMerge(
        "px-4 pb-6 flex flex-col gap-y-8",
        isOpen ? "sidebar-opened" : ""
      )}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex items-center font-bold"
        >
          <X className="text-red-500" />
        </button>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-y-6">
          <MenuAccordion />
          <Link href="/business/" className="font-semibold text-lg">
            For Business
          </Link>
        </div>
        {!authData.user ? (
          <Auth />
        ) : (
          <div className="flex flex-col gap-16 text-gray text-lg font-semibold">
            <button
              className="flex items-center gap-2"
              onClick={() => {
                router.push("/user/profile");
              }}
            >
              <User />
              <Link href="/user/profile">Profile</Link>
            </button>
            <UserAvatar />
          </div>
        )}
      </div>
    </Drawer>
  );
}
