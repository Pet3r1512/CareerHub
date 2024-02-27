import TooltipContainer from "@/components/tooltipContainer";
import { ReactNode, useCallback } from "react";
import { twMerge } from "tailwind-merge";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

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
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <TooltipContainer message={item.name}>
      <Link
        key={item.id}
        className={twMerge(
          "flex items-center gap-x-2 cursor-default lg:hover:bg-primary lg:hover:text-white duration-150 rounded-l-2xl ease-linear py-2 transition-all duration-175 px-4",
          searchParams.get("section") ===
            item.name.toString().toLowerCase().replace(/\s/g, "_")
            ? "bg-primary text-white"
            : ""
        )}
        href={
          pathname +
          "?" +
          createQueryString(
            "section",
            item.name.toString().toLowerCase().replace(/\s/g, "_")
          )
        }
      >
        {item.icon}
        <p className={twMerge("font-semibold", !expandMenu ? "hidden" : "")}>
          {item.name}
        </p>
      </Link>
    </TooltipContainer>
  );
}
