import { Filter } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function FilterDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger className="lg:hidden p-2 bg-gray-300 rounded-md text-primary/80">
        <div>
          <Filter size={18} strokeWidth={2} />
        </div>
      </DialogTrigger>
      <DialogContent className="rounded-md w-2/3 h-1/2">
        <DialogHeader>
          <DialogTitle>Filter</DialogTitle>
        </DialogHeader>
        <ScrollArea type="always">{children}</ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
