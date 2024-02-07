import { ReactNode } from "react";

interface MenuItem {
  id: string;
  name: string;
  icon: ReactNode;
}

export default function MenuItem({ item }: { item: MenuItem }) {
  return (
    <button
      key={item.id}
      className="flex items-center gap-x-2 cursor-default lg:hover:bg-primary lg:hover:text-white transition-colors duration-150 rounded-l-2xl ease-linear py-2 
      px-4"
    >
      {item.icon}
      <p className="font-semibold">{item.name}</p>
    </button>
  );
}
