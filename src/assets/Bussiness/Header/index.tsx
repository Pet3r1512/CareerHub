import { Button } from "@/components/ui/button";
import BusinessLogo from "../_UI/logo";
import Link from "next/link";

export default function Header() {
  return (
    <section className="w-full flex justify-between items-center">
      <div className="flex items-end gap-8">
        <BusinessLogo />
      </div>
      <div className="flex items-center gap-x-4">
        <Link href="/">
          <Button className="px-6 py-4 rounded-xl font-semibold bg-white border-2 border-primary text-primary hover:bg-white">
            For Candidates
          </Button>
        </Link>
        <Button className="px-6 py-4 rounded-xl text-white">Post a Job</Button>
      </div>
    </section>
  );
}
