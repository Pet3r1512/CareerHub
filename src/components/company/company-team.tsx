import { Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function CompanyTeam() {
  const data = [
    {
      name: "Celestin Gardinier",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "CEO & Co-Founder",
      link: "",
    },
    {
      name: "Reynaud Colbert",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Co-Founder",
      link: "",
    },
    {
      name: "Arienne Lyon",
      image:
        "https://plus.unsplash.com/premium_photo-1670884442192-7b58d513cd55?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Managing Director",
      link: "",
    },
    {
      name: "Bernard Alexander",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
      title: "Managing Director",
      link: "",
    },
    {
      name: "Christine Jhonson",
      image:
        "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Managing Director",
      link: "",
    },
  ];
  return (
    <div className="px-2 lg:px-4 flex flex-col gap-6">
      <div className="h-1 border-t-2"></div>
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-2xl">Team</h1>
        <Button className="bg-white text-primary hover:bg-white">
          <span>See all</span>
        </Button>
      </div>
      <div className="flex flex-col flex-wrap text-center lg:flex-row gap-4 w-full h-fit justify-evenly">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-6 flex flex-col items-center justify-evenly border rounded gap-4 lg:h-60 lg:w-56"
          >
            <div className="relative w-20 h-20">
              <Image
                src={item.image}
                alt="man picture"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="w-[169px] h-[59px] gap-[4px]">
              <h1 className="font-semibold text-[18px]">{item.name}</h1>
              <h2 className="font-normal text-[16px] text-gray-600">
                {item.title}
              </h2>
            </div>
            <div className="flex flex-row text-gray-600 space-x-4 w-[60px] h-[24px]">
              <button>
                <Instagram className="w-[24px] h-[24px] opacity-50" />
              </button>
              <button>
                <Linkedin className="w-[24px] h-[24px] opacity-50" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
