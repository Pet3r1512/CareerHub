import { MoveRight } from "lucide-react";

export default function CategoryContainer({
  icon,
  categoryName,
  avalibleJobs,
}: {
  icon: React.JSX.Element;
  categoryName: string;
  avalibleJobs: number;
}) {
  return (
    <div className="border-2 w-full group border-gray-light hover:border-primary hover:bg-primary hover:text-white duration-150 transition-all ease-linear px-8 py-6 rounded-xl">
      <p className="text-xl text-primary group-hover:text-white transition-all duration-150 ease-linear">
        {icon}
      </p>
      <p className="font-bold text-lg mt-5 group-hover:text-xl transition-all duration-150 ease-linear">
        {categoryName}
      </p>
      <div className="flex items-center gap-4">
        {avalibleJobs} jobs avalible
        <MoveRight />
      </div>
    </div>
  );
}
