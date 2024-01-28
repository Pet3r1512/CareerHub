import { useEffect, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { logout, useAppSelector } from "@/lib/store";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Typography } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { LogOut } from "lucide-react";

export default function UserAvatar() {
  const [userToken, setUserToken] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Cookies.get().token) {
      dispatch(logout());
      router.push("/auth/signin");
    }
    setUserToken(Cookies.get().token);
  }, []);

  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = async () => {
    await fetch("/api/auth/logout")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((err) => console.error(err));
    router.push("/auth/signin");
  };

  if (userToken !== "") {
    return (
      <Menubar className="border-0 w-full lg:max-w-fit">
        <MenubarMenu>
          <MenubarTrigger className="flex w-full items-center flex-row-reverse lg:flex-row gap-2 hover:cursor-pointer">
            <Typography className="truncate text-xl font-bold flex items-center justify-between w-full">
              {user?.full_name}
              <button className="lg:hidden text-red-700" onClick={handleLogout}>
                <LogOut />
              </button>
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
              <button onClick={handleLogout}>Sign Out</button>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  }
}
