import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";

export default function Logo({
  className,
  imgClassName,
  src = "https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/CareerHub_Light-removebg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL0NhcmVlckh1Yl9MaWdodC1yZW1vdmViZy5wbmciLCJpYXQiOjE3MDg2NjcwMjEsImV4cCI6MTc0MDIwMzAyMX0.IYxGHCEFweXM-ZytSR8p2cG4aQ-LDujangBsev2ll2U&t=2024-02-23T05%3A43%3A41.925Z",
}: {
  className?: string;
  imgClassName?: string;
  src?: string;
}) {
  const router = useRouter();

  return (
    <div
      className={twMerge("flex items-center gap-x-2 cursor-pointer", className)}
      onClick={() => {
        router.push("/");
      }}
    >
      <img
        src={src}
        alt=""
        className={twMerge("lg:h-32 h-24 w-auto", imgClassName)}
      />
    </div>
  );
}
