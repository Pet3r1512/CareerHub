import TooltipContainer from "@/components/tooltipContainer";
import { MenubarItem } from "@/components/ui/menubar";
import { mitr } from "../../Page";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";

export default function Account() {
  return (
    <div className={`${mitr.variable} font-sans`}>
      <Typography className="font-semibold">Account</Typography>
      <Link href="/user/profile?section=account_settings">
        <MenubarItem>Settings</MenubarItem>
      </Link>
      <TooltipContainer message="Comming Soon!">
        <MenubarItem className="cursor-not-allow !bg-white !text-gray-light">
          Language
        </MenubarItem>
      </TooltipContainer>
    </div>
  );
}
