import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";

export default function Logo({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <div
      className={twMerge("flex items-center gap-x-2 cursor-default", className)}
      onClick={() => {
        router.push("/");
      }}
    >
      <img
        src="https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/CareerHubLogo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL0NhcmVlckh1YkxvZ28ucG5nIiwiaWF0IjoxNzA0NDIwNTc5LCJleHAiOjE3MzU5NTY1Nzl9.KRIc3FWlTw2qUVGoHfpL1OjUND5BTIjcn6QYUfmKL-s&t=2024-01-05T02%3A09%3A38.278Z"
        alt=""
        className="lg:h-10 h-8 w-auto"
      />
      <p className="font-mono font-extrabold lg:text-3xl text-xl text-primary cursor-default">
        CareerHub
      </p>
    </div>
  );
}
