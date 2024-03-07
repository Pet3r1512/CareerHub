import { LogOut } from "lucide-react";
import Logo from "../_UI/_logo";
import { useEffect } from "react";

export default function Header({ admin }: { admin: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <Logo />
        <p className="font-bold text-primary text-2xl cursor-default">
          For Admin
        </p>
      </div>
      {admin === "" ? (
        <></>
      ) : (
        <div className="flex items-center gap-x-4">
          <p>{admin}</p>
          <LogOut className="text-red-500" />
        </div>
      )}
    </div>
  );
}
