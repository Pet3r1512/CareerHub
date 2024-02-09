import TooltipContainer from "@/components/tooltipContainer";
import { ReactNode, use, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

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
  const [selectedSection, setSelectedSection] = useState("");
  const router = useRouter();

  const handleMenuClick = (section: string) => {
    console.log(section);
    const param = new URLSearchParams({ ...(section && { section }) });
    const newQuery = param.toString() ? `?${param.toString()}` : "";
    return router.replace(router.pathname + newQuery, undefined, {
      scroll: false,
    });
  };

  if (expandMenu) {
    return (
      <button
        className={twMerge(
          "flex items-center gap-x-2 cursor-default lg:hover:bg-primary lg:hover:text-white duration-150 rounded-l-2xl ease-linear py-2 transition-all duration-175 px-4",
          useSearchParams().get("section") ===
            item.name.toString().toLowerCase().replace(/\s/g, "")
            ? "bg-primary text-white"
            : ""
        )}
        onClick={() =>
          handleMenuClick(item.name.toString().toLowerCase().replace(/\s/g, ""))
        }
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
        className={twMerge(
          "flex items-center gap-x-2 cursor-default lg:hover:bg-primary lg:hover:text-white duration-150 rounded-l-2xl ease-linear py-2 transition-all duration-175 px-4",
          useSearchParams().get("section") ===
            item.name.toString().toLowerCase().replace(/\s/g, "")
            ? "bg-primary text-white"
            : ""
        )}
        onClick={() =>
          handleMenuClick(item.name.toString().toLowerCase().replace(/\s/g, ""))
        }
      >
        {item.icon}
      </button>
    </TooltipContainer>
  );
}
