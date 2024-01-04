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
      icon: <PencilRuler />,
      name: "Design",
      jobs: 235,
    },
    {
      id: 2,
      icon: <BarChart2 />,
      name: "Sales",
      jobs: 756,
    },
    {
      id: 3,
      icon: <BadgeDollarSign />,
      name: "Marketing",
      jobs: 140,
    },
    {
      id: 4,
      icon: <Banknote />,
      name: "Finace",
      jobs: 90,
    },
    {
      id: 5,
      icon: <Code />,
      name: "Engineering",
      jobs: 540,
    },
    {
      id: 6,
      icon: <PersonStanding />,
      name: "Human Resources",
      jobs: 210,
    },
    {
      id: 7,
      icon: <Router />,
      name: "Technology",
      jobs: 112,
    },
    {
      id: 8,
      icon: <BookOpen />,
      name: "Education",
      jobs: 310,
    },
  ];

  return (
    <section className="flex flex-col gap-y-16">
      <div className="flex items-center justify-between">
        <h1 className="font-extrabold text-5xl">
          Explore by <span className="text-blue">category</span>
        </h1>
        <div className="flex items-center gap-x-2 text-primary">
          <a href="" className="font-semibold text-lg">
            Show all jobs
          </a>
          <MoveRight />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 justify-items-center lg:grid-cols-4 w-full lg:grid-rows-2 grid-flow-row auto-rows-auto lg:gap-8">
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
