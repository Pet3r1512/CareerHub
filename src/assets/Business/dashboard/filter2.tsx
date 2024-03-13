import { ChevronsUpDown } from "lucide-react";
import Page from "../_UI/Page";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import link from "next/link";

export default function ApplicantFilter2() {
  return (
    <div className="flex w-full border-2 justify-evenly lg:flex-row flex-col items-center mt-[25px]">
      <Checkbox className="flex justify-start"></Checkbox>
      <Button variant="link" className="text-black">
        Full Name <ChevronsUpDown />
      </Button>
      <Button variant="link" className="text-black">
        Score
        <ChevronsUpDown />
      </Button>
      <Button variant="link" className="text-black">
        Hiring Stage <ChevronsUpDown />
      </Button>
      <Button variant="link" className="text-black">
        Applied Date <ChevronsUpDown />
      </Button>
      <Button variant="link" className="text-black">
        Job role <ChevronsUpDown />
      </Button>
      <Button variant="link" className="text-black">
        Action <ChevronsUpDown />
      </Button>
    </div>
  );
}
