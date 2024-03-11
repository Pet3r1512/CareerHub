import { Instagram, Linkedin } from "lucide-react";

export default function CompanyTeam() {
  return (
    <div className="px-2 lg:px-4 flex flex-col gap-6">
      <div className="h-1 border-t-2"></div>
      <div className="flex text-2xl">
        <p>Team</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="p-6 flex flex-col items-center border-2 gap-4 h-fit max-w-full lg:w-fit">
          <div>
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="man picture"
              className="rounded-full w-20 h-20 object-cover"
            />
          </div>
          <h1 className="text-xl">Celestin Gardinier</h1>
          <h2 className="text-gray-600">CEO & Co-Founder</h2>
          <div className="flex flex-row text-gray-600 space-x-4">
            <Instagram />
            <Linkedin />
          </div>
        </div>
        <div className="p-6 flex flex-col items-center border-2 gap-4 h-fit max-w-full lg:w-fit">
          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="man picture"
              className="rounded-full w-20 h-20 object-cover"
            />
          </div>
          <h1 className="text-xl">Reynaud Colbert</h1>
          <h2 className="text-gray-600">Co-Founder</h2>
          <div className="flex flex-row text-gray-600 space-x-4">
            <Instagram />
            <Linkedin />
          </div>
        </div>
        <div className="p-6 flex flex-col items-center border-2 gap-4 h-fit max-w-full lg:w-fit">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1670884442192-7b58d513cd55?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="woman picture"
              className="rounded-full w-20 h-20 object-cover object-top"
            />
          </div>
          <h1 className="text-xl">Arienne Lyon</h1>
          <h2 className="text-gray-600">Managing Director</h2>
          <div className="flex flex-row text-gray-600 space-x-4">
            <Instagram />
            <Linkedin />
          </div>
        </div>
        <div className="p-6 flex flex-col items-center border-2 gap-4 h-fit max-w-full lg:w-fit">
          <div>
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
              alt="man picture"
              className="rounded-full w-20 h-20 object-cover"
            />
          </div>
          <h1 className="text-xl">Bernard Alexander</h1>
          <h2 className="text-gray-600">Managing Director</h2>
          <div className="flex flex-row text-gray-600 space-x-4">
            <Instagram />
            <Linkedin />
          </div>
        </div>
        <div className="p-6 flex flex-col items-center border-2 gap-4 h-fit max-w-full lg:w-fit">
          <div>
            <img
              src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="woman picture"
              className="rounded-full w-20 h-20 object-cover"
            />
          </div>
          <h1 className="text-xl">Christine Jhonson</h1>
          <h2 className="text-gray-600">Managing Director</h2>
          <div className="flex flex-row text-gray-600 space-x-4">
            <Instagram />
            <Linkedin />
          </div>
        </div>
      </div>
    </div>
  );
}
