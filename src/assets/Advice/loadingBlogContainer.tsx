import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingBlogContainer() {
  return (
    <>
      <Skeleton className="h-[308px] w-full" />
      <Skeleton className="h-[49px] w-[308px]" />
      <div className="flex items-center justify-between">
        <Skeleton className="w-[80px] h-[19.5] rounded-full" />
        <Skeleton className="w-[74.44px] h-[21px]" />
      </div>
    </>
  );
}
