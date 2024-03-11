import { LogOut } from "lucide-react";
import Logo from "../_UI/_logo";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function Header({ admin }: { admin: string }) {
  const router = useRouter();

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
        <Button
          className="flex items-center gap-x-4 bg-white hover:bg-white"
          onClick={() => {
            localStorage.removeItem("admin");
            router.reload();
          }}
        >
          <p>{admin}</p>
          <LogOut className="text-red-500" />
        </Button>
      )}
    </div>
  );
}
