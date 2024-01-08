import {
  BadgeDollarSign,
  Banknote,
  BarChart2,
  BookOpen,
  Code,
  MoveRight,
  PencilRuler,
  PersonStanding,
  Router,
} from "lucide-react";
import CategoryContainer from "./CategoryContainer";

export default function Category() {
  const sampleCategoryData = [
    {
      id: 1,
      icon: <PencilRuler size={32} />,
      name: "Design",
      jobs: 235,
    },
    {
      id: 2,
      icon: <BarChart2 size={32} />,
      name: "Sales",
      jobs: 756,
    },
    {
      id: 3,
      icon: <BadgeDollarSign size={32} />,
      name: "Marketing",
      jobs: 140,
    },
    {
      id: 4,
      icon: <Banknote size={32} />,
      name: "Finace",
      jobs: 90,
    },
    {
      id: 5,
      icon: <Code size={32} />,
      name: "Engineering",
      jobs: 540,
    },
    {
      id: 6,
      icon: <PersonStanding size={32} />,
      name: "Human Resources",
      jobs: 210,
    },
    {
      id: 7,
      icon: <Router size={32} />,
      name: "Technology",
      jobs: 112,
    },
    {
      id: 8,
      icon: <BookOpen size={32} />,
      name: "Education",
      jobs: 310,
    },
  ];

  return (
    <section className="flex flex-col gap-y-8 md:gap-y-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4">
        <h1 className="font-extrabold text-5xl sm:text-4xl lg:text-5xl">
          Explore by <span className="text-blue">category</span>
        </h1>
        <div className="flex items-center gap-x-2 text-primary">
          <a href="" className="font-semibold sm:text-md lg:text-lg">
            Show all jobs
          </a>
          <MoveRight />
        </div>
      </div>
      <div className="grid grid-cols-1 px-6 md:px-0 sm:grid-cols-3 justify-items-center lg:grid-cols-4 w-full lg:grid-rows-2 grid-flow-row auto-rows-auto lg:gap-8 gap-4 sm:gap-4">
        {/* Containers here */}
        {sampleCategoryData.map((category) => {
          return (
            <CategoryContainer
              icon={category.icon}
              categoryName={category.name}
              avalibleJobs={category.jobs}
              key={category.id}
            />
          );
        })}
      </div>
    </section>
  );
}
