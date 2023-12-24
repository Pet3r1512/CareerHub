import { Input } from "@material-tailwind/react";
import { Search } from "lucide-react";

export default function FindJobName() {
  return (
    <div className="flex items-end gap-x-2">
      <Search className="mb-1" />
      <Input
        label="Find Job Name"
        variant="standard"
        className="!text-lg"
        crossOrigin={true}
      />
    </div>
  );
}
