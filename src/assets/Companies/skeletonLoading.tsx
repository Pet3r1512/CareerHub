export default function SkeletonCompanyItem() {
  return (
    <div className="border p-4 flex flex-col gap-4 lg:hover:bg-gray-100 duration-700 rounded-md animate-pulse lg:w-full lg:h-[240px] w-full">
      <div className="flex justify-between items-start">
        <div className="rounded-full bg-gray-400 w-12 h-12"></div>
        <div className="bg-gray-400 p-1 px-2 lg:w-[70px] lg:h-8 w-16 h-6 rounded-md lg:text-base font-normal"></div>
      </div>
      <div className="bg-gray-400 w-1/2 h-4 rounded-md"></div>
      <div className="bg-gray-400 w-[90%] h-2 rounded-md"></div>
      <div className="bg-gray-400 w-[90%] h-2 rounded-md"></div>
      <div className="bg-gray-400 w-[90%] h-2 rounded-md"></div>
      <div className="bg-gray-400 p-1 px-2 w-20 h-6 rounded-lg lg:text-base font-normal mt-2"></div>
    </div>
  );
}
