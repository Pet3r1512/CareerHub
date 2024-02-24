import TooltipContainer from "@/components/tooltipContainer";
import { MenubarItem } from "@/components/ui/menubar";
import { mitr } from "../../Page";
import { Typography } from "@material-tailwind/react";

export default function Account() {
  return (
    <div className={`${mitr.variable} font-sans`}>
      <Typography className="font-semibold">Account</Typography>
      <MenubarItem>Settings</MenubarItem>
      <TooltipContainer message="Comming Soon!">
        <MenubarItem className="cursor-not-allow !bg-white !text-gray-light">
          Language
        </MenubarItem>
      </TooltipContainer>
    </div>
  );
}
