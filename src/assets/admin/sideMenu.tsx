import { Building2, Home, User } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const sections = [
  {
    name: "Dashboard",
    icon: <Home />,
  },
  {
    name: "Users",
    icon: <User />,
  },
  {
    name: "Companies",
    icon: <Building2 />,
  },
];

const SideMenu = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    pathname + "?" + createQueryString("section", "dashboard");
  }, []);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <nav>
      <ul className="flex flex-col gap-y-4 overflow-x-hidden w-56 shadow-2xl h-[85dvh] py-4">
        {sections.map((section) => {
          return (
            <Link
              key={section.name}
              className={twMerge(
                "flex items-center gap-x-2 cursor-default lg:hover:bg-primary lg:hover:text-white duration-150 rounded-l-2xl ease-linear py-2 transition-all duration-175 px-4",
                searchParams.get("section") ===
                  section.name.toString().toLowerCase().replace(/\s/g, "_")
                  ? "bg-primary text-white"
                  : ""
              )}
              href={
                pathname +
                "?" +
                createQueryString(
                  "section",
                  section.name.toString().toLowerCase().replace(/\s/g, "_")
                )
              }
            >
              {section.icon}
              <p className="font-semibold">{section.name}</p>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideMenu;
