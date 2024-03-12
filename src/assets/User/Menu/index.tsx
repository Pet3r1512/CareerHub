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
import Logo from "@/assets/_UI/_logo";
import Link from "next/link";

const sections = [
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

function SectionItem({
  expandMenu,
  setExpandMenu,
}: {
  expandMenu: boolean;
  setExpandMenu: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <section>
      <div className="flex items-center justify-between px-2 cursor-default">
        <Link
          href="/"
          className={`flex items-center gap-x-2 ${!expandMenu ? "hidden" : ""}`}
        >
          <Logo
            src="https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/CareerHub_noName-removebg-preview.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL0NhcmVlckh1Yl9ub05hbWUtcmVtb3ZlYmctcHJldmlldy5wbmciLCJpYXQiOjE3MDg3NDk1NjEsImV4cCI6MTc0MDI4NTU2MX0.9r29dXpk7EceyeBJw3dlrGDyCU0wFVlauJoyaaaC9Qk&t=2024-02-24T04%3A39%3A19.838Z"
            imgClassName="!h-12"
          />
          <p className="text-xl font-bold text-primary">CareerHub</p>
        </Link>
        <TooltipContainer message="Toggle Menu">
          <button
            className={`h-[49px] ${expandMenu ? "" : "mx-auto"}`}
            onClick={() => {
              setExpandMenu(!expandMenu);
            }}
          >
            <Menu />
          </button>
        </TooltipContainer>
      </div>
      <MenubarSeparator />
      <ul
        className={twMerge(
          "flex flex-col gap-y-4 overflow-x-hidden",
          expandMenu ? "pl-0" : ""
        )}
      >
        {sections.map((section) => {
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
        "shadow-2xl rounded-2xl relative transition-all duration-175 ease-linear md:flex flex-col justify-between hidden",
        expandMenu ? "sm:w-52 lg:w-60" : "w-16"
      )}
    >
      <div className="flex flex-col justify-between">
        <SectionItem expandMenu={expandMenu} setExpandMenu={setExpandMenu} />
      </div>
      <button
        className="flex items-center gap-x-2 cursor-default lg:hover:bg-red-500 lg:hover:text-white transition-colors duration-150 rounded-l-2xl ease-linear py-2 px-4 text-red-500 w-full"
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
