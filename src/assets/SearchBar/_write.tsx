import { Input } from "@material-tailwind/react";
import { Search } from "lucide-react";

export default function Write() {
  return (
    <div className="flex items-center gap-x-2">
      <Search />
      <Input variant="standard" crossOrigin={true} />
    </div>
  );
}
