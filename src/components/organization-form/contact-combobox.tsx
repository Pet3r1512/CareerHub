import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import {
  Command,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import {
  Plus,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MoreHorizontal,
} from "lucide-react";
import { mitr } from "@/assets/_UI/Page";

type Contact = {
  label: string;
  icons: JSX.Element;
  value: string;
};

const contacts: Contact[] = [
  {
    label: "Facebook",
    icons: <Facebook size={16} />,
    value: "facebook",
  },
  {
    label: "Twitter",
    icons: <Twitter size={16} />,
    value: "twitter",
  },
  {
    label: "Instagram",
    icons: <Instagram size={16} />,
    value: "instagram",
  },
  {
    label: "LinkedIn",
    icons: <Linkedin size={16} />,
    value: "linkedin",
  },
  {
    label: "Other",
    icons: <MoreHorizontal size={16} />,
    value: "other",
  },
];

export default function ContactCombobox({ append }: { append: any }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-fit text-gray-dark"
            type="button"
          >
            <Plus size={16} />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <ContactList setOpen={setOpen} append={append} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="w-fit text-gray-dark"
          type="button"
        >
          <Plus size={14} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <ContactList setOpen={setOpen} append={append} />
      </DrawerContent>
    </Drawer>
  );
}

function ContactList({
  setOpen,
  append,
}: {
  setOpen: (open: boolean) => void;
  append: any;
}) {
  return (
    <Command className={`font-sans ${mitr.variable}`}>
      <CommandInput placeholder="Filter contact..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {contacts.map((contact) => (
            <CommandItem
              value={contact.value}
              key={contact.value}
              onSelect={() => {
                append({ label: contact.label, value: "" });
                setOpen(false);
              }}
              className="flex items-center space-x-4"
            >
              <span>{contact.icons}</span>
              <p>{contact.label}</p>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
