import ButtonBlock from "../_UI/_button";
import { Search, MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { SelectGroup } from "@radix-ui/react-select";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import router from "next/router";

type SearchBar2Props = {
  type: "company" | "job";
};

function ChooseLocation() {
  return (
    <div className="p-2 w-full lg:w-[40%] h-full flex gap-4 items-center group/item">
      <MapPin size={24} color="#424242" />
      <Select>
        <SelectTrigger className="border-none focus:ring-0 focus:ring-offset-0 text-gray-600 relative p-0 h-fit lg:text-base">
          <span className="absolute h-[1px] bg-black/20 w-full -bottom-3 left-0 lg:group-hover/item:bg-black/50 transition duration-300"></span>
          <div className="flex gap-2 items-center w-full mr-3">
            <div className="w-full text-left">
              <SelectValue placeholder="Choose location" />
            </div>
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="text-gray-600">
            <SelectItem value="SG" className="cursor-pointer">
              Ho Chi Minh city
            </SelectItem>
            <SelectItem value="HN" className="cursor-pointer">
              Ha Noi
            </SelectItem>
            <SelectItem value="DN" className="cursor-pointer">
              Da Nang
            </SelectItem>
            <SelectItem value="CT" className="cursor-pointer">
              Can Tho
            </SelectItem>
            <SelectItem value="BD" className="cursor-pointer">
              Binh Duong
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

function SearchName({ type }: SearchBar2Props) {
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 500);

  useEffect(() => {
    if (type == "company") {
      router.push(
        {
          pathname: "/companies",
          query: { search: debouncedInputValue },
        },
        undefined,
        { scroll: false }
      );
    } else {
      router.push(
        {
          pathname: "/jobs",
          query: { search: debouncedInputValue },
        },
        undefined,
        { scroll: false }
      );
    }
  }, [debouncedInputValue, type]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="w-full p-2 flex gap-4 items-center h-10 lg:w-[40%] group/item">
      <Search size={24} color="#424242" />
      <div className="relative w-full">
        <span className="absolute h-[1px] bg-black/20 w-full -bottom-3 left-0 lg:group-hover/item:bg-black/50 transition duration-300"></span>
        <Input
          type="text"
          placeholder={
            type == "company"
              ? "Company name or keyword"
              : "Job title or keyword"
          }
          className="rounded-none border-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-600 p-0 h-fit w-full lg:text-base lg:placeholder:text-base"
          onChange={handleInputChange}
          value={inputValue}
        />
      </div>
    </div>
  );
}

export default function SearchBar2({ type }: SearchBar2Props) {
  return (
    <div className="flex flex-wrap gap-8 lg:gap-0 p-8 px-4 justify-evenly items-center w-full bg-white">
      <SearchName type={type} />
      <Separator
        orientation="vertical"
        className="bg-gray-light lg:h-10 hidden lg:block"
      />
      <ChooseLocation />
      <ButtonBlock content="Search" />
    </div>
  );
}