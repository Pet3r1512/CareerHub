import { Option, Select } from "@material-tailwind/react";
import { MapPin } from "lucide-react";

export default function FindJobLocation() {
  return (
    <div className="flex items-end gap-x-2">
      <MapPin className="mb-1" />
      <Select
        variant="standard"
        className="[&>span]:text-lg"
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
        label="Choose Locations"
      >
        <Option>Ho Chi Minh City</Option>
        <Option>Ha Noi</Option>
        <Option>Da Nang</Option>
        <Option>Can Tho</Option>
        <Option>Binh Duong</Option>
      </Select>
    </div>
  );
}
