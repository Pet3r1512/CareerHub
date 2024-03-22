export default function Categories() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl">Categories</h1>
        <div className="flex gap-2">
          <div className="w-fit rounded-full bg-deep-orange-50 px-[10px] py-[6px]">
            <p className="flex items-center text-md text-orange-500">
              Marketing
            </p>
          </div>
          <div className="w-fit rounded-full bg-light-green-50 px-[10px] py-[6px]">
            <p className="flex items-center text-md text-light-green-500">
              Design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
