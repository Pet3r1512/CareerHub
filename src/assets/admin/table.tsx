import { useSearchParams } from "next/navigation";
import SideMenu from "./sideMenu";
import Overall from "./sections/overall";
import UserTable from "./sections/userTable";

export default function Table() {
  const searchParams = useSearchParams();

  return (
    <section className="flex gap-x-3 w-full h-[85dvh]">
      <SideMenu />
      <div className="flex-1 bg-white shadow-2xl">
        {searchParams.get("section") === "dashboard" && <Overall />}
        {searchParams.get("section") === "users" && <UserTable />}
        {searchParams.get("section") === "companies" && <>Companies</>}
      </div>
    </section>
  );
}
