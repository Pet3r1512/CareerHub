import { Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";

export default function CompanyTeam() {
  return (
    <div className="px-2 lg:px-4 flex flex-col gap-6">
      <div className="h-1 border-t-2"></div>
      <div className="flex flex-row justify-between lg:w-[1192px] lg:h-[38px]">
        <h1 className="text-2xl">Team</h1>
        <Button className="bg-white text-primary hover:bg-white">
          <span>See all</span>
        </Button>
      </div>
      <div className="flex flex-col text-center lg:flex-row gap-[16px] max-w-full h-fit lg:w-[1192px] lg:h-[243px]">
        <div className="p-6 flex flex-col items-center border rounded gap-4 lg:h-60 lg:w-56">
          <div>
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="man picture"
              className="rounded-full w-20 h-20 object-cover"
            />
          </div>
          <div className="w-[169px] h-[59px] gap-[4px]">
            <h1 className="font-semibold text-[18px]">Celestin Gardinier</h1>
            <h2 className="font-normal text-[16px] text-gray-600">
              CEO & Co-Founder
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
        <div className="p-6 flex flex-col items-center border rounded gap-4 lg:h-60 lg:w-56">
          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="man picture"
              className="rounded-full w-20 h-20 object-cover"
            />
          </div>
          <div className="w-[169px] h-[59px] gap-[4px]">
            <h1 className="font-semibold text-[18px]">Reynaud Colbert</h1>
            <h2 className="font-normal text-[16px] text-gray-600">
              Co-Founder
            </h2>
          </div>
          <div className="flex flex-row text-gray-600 space-x-4">
          <button>
              <Instagram className="w-[24px] h-[24px] opacity-50" />
            </button>
            <button>
              <Linkedin className="w-[24px] h-[24px] opacity-50" />
            </button>
          </div>
        </div>
        <div className="p-6 flex flex-col items-center border rounded gap-4 lg:h-60 lg:w-56">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1670884442192-7b58d513cd55?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="woman picture"
              className="rounded-full w-20 h-20 object-cover object-top"
            />
          </div>
          <div className="w-[169px] h-[59px] gap-[4px]">
            <h1 className="font-semibold text-[18px]">Arienne Lyon</h1>
            <h2 className="font-normal text-[16px] text-gray-600">
              Managing Director
            </h2>
          </div>
          <div className="flex flex-row text-gray-600 space-x-4">
            <button>
              <Instagram className="w-[24px] h-[24px] opacity-50" />
            </button>
            <button>
              <Linkedin className="w-[24px] h-[24px] opacity-50" />
            </button>
          </div>
        </div>
        <div className="p-6 flex flex-col items-center border rounded gap-4 lg:h-60 lg:w-56">
          <div>
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
              alt="man picture"
              className="rounded-full w-20 h-20 object-cover"
            />
          </div>
          <div className="w-[169px] h-[59px] gap-[4px]">
            <h1 className="font-semibold text-[18px]">Bernard Alexander</h1>
            <h2 className="font-normal text-[16px] text-gray-600">
              Managing Director
            </h2>
          </div>
          <div className="flex flex-row text-gray-600 space-x-4">
          <button>
              <Instagram className="w-[24px] h-[24px] opacity-50" />
            </button>
            <button>
              <Linkedin className="w-[24px] h-[24px] opacity-50" />
            </button>
          </div>
        </div>
        <div className="p-6 flex flex-col items-center border rounded gap-4 lg:h-60 lg:w-56">
          <div>
            <img
              src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="woman picture"
              className="rounded-full w-20 h-20 object-cover"
            />
          </div>
          <div className="w-[169px] h-[59px] gap-[4px]">
            <h1 className="font-semibold text-[18px]">Christine Jhonson</h1>
            <h2 className="font-normal text-[16px] text-gray-600">
              Managing Director
            </h2>
          </div>
          <div className="flex flex-row text-gray-600 space-x-4">
          <button>
              <Instagram className="w-[24px] h-[24px] opacity-50" />
            </button>
            <button>
              <Linkedin className="w-[24px] h-[24px] opacity-50" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
