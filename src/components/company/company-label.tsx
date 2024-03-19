import InfoLabel from "@/components/company/info-label";
import { Building2, Calendar, MapPin, Users } from "lucide-react";

type CompanyLabelProps = {
  content: {
    founded: string;
    employees: number;
    location: string;
    industry: string;
  };
};

export default function CompanyLabel({ content }: CompanyLabelProps) {
  const data = [
    {
      icon: <Calendar size={20} className="text-blue" />,
      content: content.founded,
      title: "Founded",
    },

    {
      icon: <Users size={20} className="text-blue" />,
      content: content.employees,
      title: "Employees",
    },

    {
      icon: <MapPin size={20} className="text-blue" />,
      content: content.location,
      title: "Location",
    },

    {
      icon: <Building2 size={20} className="text-blue" />,
      content: content.industry,
      title: "Industry",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-5 lg:gap-20">
      {data.map((item) => {
        return (
          <InfoLabel key={item.title} title={item.title} content={item.content}>
            {item.icon}
          </InfoLabel>
        );
      })}
    </div>
  );
}
