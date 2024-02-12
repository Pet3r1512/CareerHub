import { MenubarSeparator } from "@/components/ui/menubar";
import {
  User,
  Settings,
  FileText,
  LogOut,
  Bell,
  Send,
  Save,
  Menu,
} from "lucide-react";
import MenuItem from "./menuItem";
import TooltipContainer from "@/components/tooltipContainer";
import { SetStateAction, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";

const overviewSections = [
  {
    id: "INFORMATION",
    name: "Public Profile",
    icon: <User />,
  },
  {
    id: "ACCOUNT",
    name: "Account Settings",
    icon: <Settings />,
  },
  {
    id: "RESUME",
    name: "Your Resumes",
    icon: <FileText />,
  },
];

const careerSections = [
  {
    id: "APPLIED",
    name: "Applied Jobs",
    icon: <Send />,
  },
  {
    id: "SAVED",
    name: "Saved Jobs",
    icon: <Save />,
  },
  {
    id: "NOTIFICATIONS",
    name: "Notifications",
    icon: <Bell />,
  },
];

function OverviewSection({
  expandMenu,
  setExpandMenu,
}: {
  expandMenu: boolean;
  setExpandMenu: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <section>
      <p className="flex items-center justify-between cursor-default">
        <p
          className={twMerge(
            "text-2xl font-extrabold pl-2",
            expandMenu ? "" : "hidden"
          )}
        >
          Overview
        </p>
        <TooltipContainer message="Toggle Menu">
          <button
            className={`${expandMenu ? "" : "mx-auto"}`}
            onClick={() => {
              setExpandMenu(!expandMenu);
            }}
          >
            <Menu />
          </button>
        </TooltipContainer>
      </p>
      <MenubarSeparator />
      <ul
        className={twMerge(
          "flex flex-col gap-y-4 overflow-x-hidden",
          expandMenu ? "pl-3" : ""
        )}
      >
        {overviewSections.map((section) => {
          return (
            <MenuItem key={section.id} expandMenu={expandMenu} item={section} />
          );
        })}
      </ul>
    </section>
  );
}

function CareerSection({ expandMenu }: { expandMenu: boolean }) {
  return (
    <section className="transition-all duration-150 ease-in-out">
      {expandMenu ? (
        <p className="text-2xl cursor-default font-extrabold pl-2">Carrer</p>
      ) : (
        <div className="h-[28px] w-[210px]"></div>
      )}
      <ul
        className={twMerge("flex flex-col gap-y-4", expandMenu ? "pl-3" : "")}
      >
        {careerSections.map((section) => {
          return (
            <MenuItem key={section.id} expandMenu={expandMenu} item={section} />
          );
        })}
      </ul>
    </section>
  );
}

export default function UserDashboardMenu() {
  const [expandMenu, setExpandMenu] = useState(true);

  const router = useRouter();

  return (
    <section
      className={twMerge(
        "lg:h-full shadow-2xl rounded-2xl relative transition-all duration-175 ease-linear",
        expandMenu ? "w-60" : "w-16"
      )}
    >
      <div className="h-1/2 flex flex-col justify-between">
        <OverviewSection
          expandMenu={expandMenu}
          setExpandMenu={setExpandMenu}
        />
        <CareerSection expandMenu={expandMenu} />
      </div>
      <button
        className="flex items-center gap-x-2 cursor-default lg:hover:bg-red-500 lg:hover:text-white transition-colors duration-150 rounded-l-2xl ease-linear py-2 px-4 absolute bottom-4 text-red-500 w-full"
        onClick={() => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          router.push("/auth/signin");
        }}
      >
        <LogOut />
        <span className={twMerge("font-semibold", expandMenu ? "" : "hidden")}>
          Sign Out
        </span>
      </button>
    </section>
  );
}
