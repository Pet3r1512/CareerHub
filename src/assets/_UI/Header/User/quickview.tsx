import { useRouter } from "next/router";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import splitUserName from "@/lib/splitUserName";
import { Typography } from "@material-tailwind/react";

export default function QuickView({ user }: { user: string }) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        </Avatar>
        <Typography className="font-bold">{splitUserName(user)}</Typography>
      </div>
      <Link href="/user/profile">
        <Button className="border-2 border-primary bg-white text-primary lg:hover:bg-primary lg:hover:text-white duration-75 transition-colors ease-linear rounded-xl w-full font-semibold">
          View Profile
        </Button>
      </Link>
    </div>
  );
}
