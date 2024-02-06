import TooltipContainer from "@/components/tooltipContainer";
import { MenubarItem } from "@/components/ui/menubar";

export default function Account() {
  return (
    <>
      <h3 className="font-semibold">Account</h3>
      <MenubarItem>Settings</MenubarItem>
      <TooltipContainer message="Comming Soon!">
        <MenubarItem className="cursor-not-allow !bg-white !text-gray-light">
          Language
        </MenubarItem>
      </TooltipContainer>
    </>
  );
}
