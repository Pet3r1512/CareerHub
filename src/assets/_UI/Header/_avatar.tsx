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
import { LogOut } from "lucide-react";

export default function UserAvatar() {
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

  if (authData.token !== "") {
    return (
      <Menubar className="border-0 w-full lg:max-w-fit">
        <MenubarMenu>
          <MenubarTrigger className="flex w-full items-center flex-row-reverse lg:flex-row gap-2 hover:cursor-pointer">
            <Typography className="truncate text-xl flex items-center justify-between w-full">
              <Typography className="truncate text-lg font-bold lg:text-xl w-1/2 lg:w-full">
                {authData.user}
              </Typography>
              <SignOutButton>
                <LogOut className="lg:hidden" />
              </SignOutButton>
            </Typography>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
          </MenubarTrigger>
          <MenubarContent className="hidden lg:block">
            <MenubarItem
              onClick={() => {
                router.push("/profile");
              }}
            >
              Profile
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="text-red-500">
              <SignOutButton />
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  }
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
