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
      <Menubar className="border-0 lg:hidden">
        <MenubarMenu>
          <MenubarTrigger className="flex items-center gap-2 hover:cursor-pointer">
            <Typography className="truncate max-w-xl font-bold">
              {user?.full_name}
            </Typography>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Settings</MenubarItem>
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
