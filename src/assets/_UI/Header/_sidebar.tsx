import { Drawer } from "@material-tailwind/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Logo from "../_logo";
import Menu from "./_menu";
import { ChevronRight, User } from "lucide-react";
import Auth from "./_auth";
import UserAvatar from "./_avatar";
import { useAppSelector } from "@/lib/store";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { useRouter } from "next/router";

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
    if (!localStorage.getItem("user") || !localStorage.getItem("token")) {
      router.push("/auth/signin");
    }
    setAuthData({
      user: localStorage.getItem("user")!,
      token: localStorage.getItem("token")!,
    });
  }, []);

  return (
    <Drawer
      open={isOpen}
      placement="right"
      className={twMerge(
        "px-4 py-6 flex flex-col gap-y-8",
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
          Close
          <ChevronRight />
        </button>
      </div>
      <div className="flex flex-col justify-between h-full">
        <Menu className="flex flex-col" />
        {!authData.user ? (
          <Auth />
        ) : (
          <div className="flex flex-col gap-16 text-gray text-lg font-semibold">
            <button
              className="flex items-center gap-2"
              onClick={() => {
                router.push("/profile");
              }}
            >
              <User />
              <Link href="/profile">Profile</Link>
            </button>
            <UserAvatar />
          </div>
        )}
      </div>
    </Drawer>
  );
}
