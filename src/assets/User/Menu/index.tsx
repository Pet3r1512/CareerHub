import { MenubarSeparator } from "@/components/ui/menubar";
import {
  User,
  Settings,
  FileText,
  LogOut,
  Bell,
  Send,
  Save,
} from "lucide-react";
import MenuItem from "./menuItem";

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

function OverviewSection() {
  return (
    <section>
      <p className="text-2xl cursor-default font-extrabold pl-2">Overview</p>
      <MenubarSeparator />
      <ul className="flex flex-col gap-y-4 pl-3">
        {overviewSections.map((section) => {
          return <MenuItem item={section} />;
        })}
      </ul>
    </section>
  );
}

function CareerSection() {
  return (
    <section>
      <p className="text-2xl cursor-default font-extrabold pl-2">Your Carrer</p>
      <MenubarSeparator />
      <ul className="flex flex-col gap-y-4 pl-3">
        {careerSections.map((section) => {
          return <MenuItem item={section} />;
        })}
      </ul>
    </section>
  );
}

export default function UserDashboardMenu() {
  return (
    <section className="lg:h-full w-60 shadow-2xl rounded-2xl relative">
      <div className="flex flex-col gap-y-24">
        <OverviewSection />
        <CareerSection />
      </div>
      <button className="flex items-center gap-x-2 cursor-default lg:hover:bg-red-500 lg:hover:text-white transition-colors duration-150 rounded-l-2xl ease-linear py-2 px-4 absolute bottom-4 text-red-500 w-full">
        <LogOut />
        <p className="font-semibold">Sign Out</p>
      </button>
    </section>
  );
}
