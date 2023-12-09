import { Input } from "@material-tailwind/react";
import { Search } from "lucide-react";

export default function Write() {
  return (
    <div className="flex items-end gap-x-2">
      <Search className="mb-1" />
      <Input variant="standard" className="!text-xl" crossOrigin={true} />
    </div>
  );
}
