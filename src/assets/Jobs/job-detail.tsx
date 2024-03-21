import { CheckCircle2 } from "lucide-react";
import Content from "./content";

export default function JobDetail() {
  const Responsibilities = [
    "Community engagement to ensure that is supported and actively represented online",
    "Focus on social media content development and publication",
    "Marketing and strategy support",
    "Stay on top of trends on social media platforms, and suggest content ideas to the team",
    "Engage with online communities",
  ];
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Description</h1>
        <p>
          Stripe is looking for Social Media Marketing expert to help manage our
          online networks. You will be responsible for monitoring our social
          media channels, creating content, finding effective ways to engage the
          community and incentivize others to engage on our channels.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Responsibilities</h1>
        {Responsibilities.map((item, index) => {
          return (
            <Content item={item}/>
          );
        })}
      </div>
    </div>
  );
}
