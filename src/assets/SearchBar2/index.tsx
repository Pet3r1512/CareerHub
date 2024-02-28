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
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/router";
import { locations } from "@/data/locations";
import { useSearchParams } from "next/navigation";

type SearchBar2Props = {
  type: "company" | "job";
  loading: {
    isSearchLoading: boolean;
    setIsSearchLoading: (value: boolean) => void;
  };
};

function ChooseLocation() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const locationParam = searchParams.get("location");
  const handleChange = (value: string) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        location: value,
        page: 1,
      },
    });
  };

  return (
    <div className="p-2 w-full lg:w-[40%] h-full flex gap-4 items-center group/item">
      <MapPin size={24} color="#424242" />
      <Select onValueChange={handleChange}>
        <SelectTrigger className="border-none focus:ring-0 focus:ring-offset-0 text-gray-600 relative p-0 h-fit lg:text-base">
          <span className="absolute h-[1px] bg-black/20 w-full -bottom-3 left-0 lg:group-hover/item:bg-black/50 transition duration-300"></span>
          <div className="flex gap-2 items-center w-full mr-3">
            <div className="w-full text-left">
              <SelectValue
                placeholder={
                  locations.find((obj) => obj.value == locationParam)?.name ||
                  "Choose location"
                }
              />
            </div>
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="text-gray-600">
            {locations.map((location) => (
              <SelectItem
                key={location.value}
                value={location.value}
                className="cursor-pointer"
              >
                {location.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

function SearchName({ type, loading }: SearchBar2Props) {
  const [inputValue, setInputValue] = useState<string | null>(null);
  const debouncedInputValue = useDebounce(inputValue, 1000);
  const firstRender = useRef(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParam = searchParams.get("search");
  const setLoading = loading.setIsSearchLoading;

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else if (debouncedInputValue == null) {
      firstRender.current = false;
    } else {
      const query = {
        ...router.query,
        search: debouncedInputValue,
        page: 1,
      };

      if (!debouncedInputValue) {
        delete query.search;
      }

      router.push(
        {
          pathname: router.pathname,
          query: query,
        },
        undefined,
        { shallow: true, scroll: false }
      );
      setLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedInputValue, setLoading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setLoading(true);
  };

  return (
    <div className="w-full p-2 flex gap-4 items-center h-10 lg:w-[40%] group/item">
      {!loading.isSearchLoading && <Search size={24} color="#424242" />}
      {loading.isSearchLoading && (
        <div className="flex space-x-1 justify-center items-center bg-transparent h-fit dark:invert relative">
          <span className="sr-only">Loading...</span>
          <div className="h-1 w-1 bg-blue rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-1 w-1 bg-blue rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-1 w-1 bg-blue rounded-full animate-bounce"></div>
        </div>
      )}
      <div className="relative w-full">
        <span className="absolute h-[1px] bg-black/20 w-full -bottom-3 left-0 lg:group-hover/item:bg-black/50 transition duration-300"></span>
        <Input
          type="text"
          placeholder={
            searchParam ||
            (type == "company"
              ? "Company name or keyword"
              : "Job title or keyword")
          }
          className="rounded-none border-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-600 p-0 h-fit w-full lg:text-base lg:placeholder:text-base"
          onChange={handleInputChange}
          value={inputValue || ""}
        />
      </div>
    </div>
  );
}

export default function SearchBar2({ type, loading }: SearchBar2Props) {
  return (
    <div className="flex flex-wrap gap-8 lg:gap-0 p-8 px-4 justify-evenly items-center w-full bg-white">
      <SearchName type={type} loading={loading} />
      <Separator
        orientation="vertical"
        className="bg-gray-light lg:h-10 hidden lg:block"
      />
      <ChooseLocation />
    </div>
  );
}
