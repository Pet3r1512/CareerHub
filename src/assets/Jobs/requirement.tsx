import { CheckCircle2 } from "lucide-react";
import Content from "./content";

export default function Requirement() {
  const Whoareyou = [
    "You get energy from people and building the ideal work environment",
    "You have a sense for beautiful spaces and office experiences",
    "You are a confident office manager, ready for added responsibilities",
    "You're detail-oriented and creative",
    "You're a growth marketer and know how to run campaigns",
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Who are you</h1>
        {Whoareyou.map((item, index) => {
          return <Content key={index} item={item} />;
        })}
      </div>
    </div>
  );
}
