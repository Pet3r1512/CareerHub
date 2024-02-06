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
          <UserMenuTrigger />
          <UserMenuContent user={authData.user} />
        </MenubarMenu>
      </Menubar>
    );
  }
}

function UserMenuTrigger() {
  return (
    <MenubarTrigger className="flex w-full items-center flex-row-reverse !bg-transparent lg:flex-col-reverse gap-2 hover:cursor-pointer">
      <Typography className="truncate text-xl flex items-center justify-between w-full">
        <Typography className="truncate text-lg font-bold w-1/2 lg:w-full">
          Me <ChevronDown className="hidden lg:inline-block" />
        </Typography>
        <SignOutButton>
          <LogOut className="lg:hidden text-red-700" />
        </SignOutButton>
      </Typography>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
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
        className="text-red-500"
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

  return (
    <button onClick={handleLogout}>{!children ? "Sign Out" : children}</button>
  );
}
