import TooltipContainer from "@/components/tooltipContainer";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface MenuItem {
  id: string;
  name: string;
  icon: ReactNode;
}

export default function MenuItem({
  item,
  expandMenu,
}: {
  item: MenuItem;
  expandMenu: boolean;
}) {
  if (expandMenu) {
    return (
      <button
        key={item.id}
        className="flex items-center gap-x-2 cursor-default lg:hover:bg-primary lg:hover:text-white duration-150 rounded-l-2xl ease-linear py-2 transition-all duration-175
      px-4"
      >
        {item.icon}
        <p className={twMerge("font-semibold")}>{item.name}</p>
      </button>
    );
  }

  return (
    <TooltipContainer message={item.name}>
      <button
        key={item.id}
        className="flex items-center gap-x-2 cursor-default lg:hover:bg-primary lg:hover:text-white duration-150 rounded-l-2xl ease-linear py-2 transition-all duration-175
      px-4"
      >
        {item.icon}
        <p
          className={twMerge(
            "font-semibold",
            expandMenu === false ? "hidden" : ""
          )}
        >
          {item.name}
        </p>
      </button>
    </TooltipContainer>
  );
}
