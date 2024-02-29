import { Button } from "@/components/ui/button";
import BusinessLogo from "../_UI/logo";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Drawer } from "@material-tailwind/react";

export default function Header({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const closeDrawer = () => setOpen(false);
  const openDrawer = () => setOpen(true);

  return (
    <section className="w-full flex justify-between items-center">
      <div className="flex items-end gap-8">
        <BusinessLogo />
      </div>
      <div className="lg:flex items-center gap-x-4 hidden">
        <Link href="/">
          <Button className="px-6 py-4 rounded-xl font-semibold bg-white border-2 border-primary text-primary hover:bg-white">
            For Candidates
          </Button>
        </Link>
        <Button className="px-6 py-4 rounded-xl text-white">Post a Job</Button>
      </div>
      <div className="lg:hidden mr-4">
        <Button
          className="bg-white hover:bg-white text-black"
          onClick={openDrawer}
        >
          <Menu />
        </Button>
      </div>
      <Drawer
        placement="right"
        open={open}
        onClose={closeDrawer}
        className="p-4 flex flex-col justify-between"
      >
        <BusinessLogo />
        <div className="flex w-full items-center gap-x-2">
          <Link href="/">
            <Button className="px-6 py-4 rounded-xl font-semibold bg-white border-2 border-primary text-primary hover:bg-white">
              For Candidates
            </Button>
          </Link>
          <Link href="#">
            <Button className="px-6 py-4 rounded-xl text-white">
              Post a Job
            </Button>
          </Link>
        </div>
      </Drawer>
    </section>
  );
}
