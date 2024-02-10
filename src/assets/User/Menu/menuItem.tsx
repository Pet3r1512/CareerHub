import TooltipContainer from "@/components/tooltipContainer";
import { ReactNode, use, useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";
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
  const [selectedSection, setSelectedSection] = useState("");
  const router = useRouter();
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

  if (expandMenu) {
    return (
      <Link
        className={twMerge(
          "flex items-center gap-x-2 cursor-default lg:hover:bg-primary lg:hover:text-white duration-150 rounded-l-2xl ease-linear py-2 transition-all duration-175 px-4",
          useSearchParams().get("section") ===
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
        <p className={twMerge("font-semibold")}>{item.name}</p>
      </Link>
    );
  }

  return (
    <TooltipContainer message={item.name}>
      <Link
        key={item.id}
        className={twMerge(
          "flex items-center gap-x-2 cursor-default lg:hover:bg-primary lg:hover:text-white duration-150 rounded-l-2xl ease-linear py-2 transition-all duration-175 px-4",
          useSearchParams().get("section") ===
            item.name.toString().toLowerCase().replace(/\s/g, "")
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
      </Link>
    </TooltipContainer>
  );
}
