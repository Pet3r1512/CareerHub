import { ReactNode, useEffect, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { ChevronDown, LogOut } from "lucide-react";
import Account from "./User/account";
import QuickView from "./User/quickview";
import { mitr } from "../Page";

export default function UserAvatar() {
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

  if (authData.token !== "") {
    return (
      <Menubar className="border-0 w-full lg:max-w-fit">
        <MenubarMenu>
          <UserMenuTrigger userName={authData.user} />
          <UserMenuContent user={authData.user} />
        </MenubarMenu>
      </Menubar>
    );
  }
}

function UserMenuTrigger({ userName }: { userName: string }) {
  const splitUserName = splitName(userName);
  const userNameChar = splitUserName[splitUserName.length - 1].charAt(0);
  function splitName(userName: string) {
    const userN = userName.split(" ");
    return userN;
  }

  return (
    <MenubarTrigger className="flex w-full items-center flex-row-reverse !bg-transparent lg:flex-col-reverse gap-2 hover:cursor-pointer">
      <div className="truncate text-xl flex items-center justify-between w-full">
        <Typography
          placeholder=""
          className="truncate text-lg font-bold w-1/2 lg:w-full"
        >
          Me <ChevronDown className="hidden lg:inline-block" />
        </Typography>
        <SignOutButton>
          <LogOut className="lg:hidden text-red-700" />
        </SignOutButton>
      </div>
      <Avatar className="bg-primary text-white text-xl justify-center items-center">
        {userNameChar}
      </Avatar>
    </MenubarTrigger>
  );
}

function UserMenuContent({ user }: { user: string }) {
  const router = useRouter();

  return (
    <MenubarContent className="hidden lg:block rounded-lg px-4 py-2 transition-all duration-150 ease-linear">
      <QuickView user={user} />
      <MenubarSeparator />
      <Account />
      <MenubarSeparator />
      <MenubarItem
        onClick={() => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          router.push("/auth/signin");
        }}
        className={`text-red-500 ${mitr.variable} font-sans`}
      >
        Sign Out
      </MenubarItem>
    </MenubarContent>
  );
}

function SignOutButton({ children }: { children?: ReactNode }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/auth/signin");
  };

  return <div onClick={handleLogout}>{!children ? "Sign Out" : children}</div>;
}
