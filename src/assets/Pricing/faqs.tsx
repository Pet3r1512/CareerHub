import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  return (
    <AccordionItem value={`item-${index + 1}`}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent className="text-lg">{answer}</AccordionContent>
    </AccordionItem>
  );
}
