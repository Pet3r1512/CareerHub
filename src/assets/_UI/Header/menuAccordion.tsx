import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MenuAccordion() {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold text-lg">
            Your Career
          </AccordionTrigger>
          <AccordionContent className="px-6 flex flex-col gap-y-2">
            <p>Find Jobs</p>
            <p>Browse Companies</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-semibold text-lg">
            About Us
          </AccordionTrigger>
          <AccordionContent className="px-6 flex flex-col gap-y-2">
            <p>Pricing & Plans</p>
            <p>Terms of Usage</p>
            <p>Blogs</p>
            <p>Privacy</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
