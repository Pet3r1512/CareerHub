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
    <div className="border-2 w-full group border-gray-light lg:hover:border-primary lg:hover:bg-primary lg:hover:text-white duration-150 transition-all ease-linear p-4 py-6 lg:px-8 lg:py-6 rounded-xl flex flex-col justify-between">
      <p className="text-xl text-primary lg:group-hover:text-white transition-all duration-150 ease-linear">
        {icon}
      </p>
      <p className="font-bold text-lg mt-5 lg:group-hover:text-xl transition-all duration-150 ease-linear">
        {categoryName}
      </p>
      <div className="flex items-center gap-4 justify-between">
        {avalibleJobs} jobs avalible
        <MoveRight />
      </div>
    </div>
  );
}
