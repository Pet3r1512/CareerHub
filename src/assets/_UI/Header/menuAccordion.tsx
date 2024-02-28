import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function MenuAccordion() {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold text-lg">
            Your Career
          </AccordionTrigger>
          <AccordionContent className="px-6 flex flex-col gap-y-2">
            <Link href="/jobs">Find Jobs</Link>
            <Link href="/companies">Browse Companies</Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-semibold text-lg">
            About Us
          </AccordionTrigger>
          <AccordionContent className="px-6 flex flex-col gap-y-2">
            <Link href="/pricing">Pricing & Plans</Link>
            <Link href="/terms">Terms of Usage</Link>
            <Link href="/advice">Blogs</Link>
            <Link href="/privacy-policy">Privacy</Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
