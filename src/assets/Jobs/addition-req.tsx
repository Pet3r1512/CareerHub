import { CheckCircle2 } from "lucide-react";
import Content from "./content";

export default function AdditionReq() {
  const Nicetohave = [
    "Fluent in English",
    "Project management skills",
    "Copy editing skills",
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Nice-To-Have</h1>
        {Nicetohave.map((item, index) => {
          return (
            <Content key={index} item={item}/>
          );
        })}
      </div>
    </div>
  );
}
