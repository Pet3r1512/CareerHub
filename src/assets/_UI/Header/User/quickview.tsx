import { useRouter } from "next/router";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import splitUserName from "@/lib/splitUserName";
import { Typography } from "@material-tailwind/react";
import { twMerge } from "tailwind-merge";
import { mitr } from "../../Page";

export default function QuickView({ user }: { user: string }) {
  const router = useRouter();

  const stUserName=splitName(user)
  const userNameChar=stUserName[stUserName.length - 1].charAt(0)
  function splitName(userName: string){
    const userN=userName.split(' ');
    return userN;
  }

  return (
    <div
      className={twMerge("flex flex-col gap-y-2", `${mitr.variable} font-sans`)}
    >
      <div className="flex items-center justify-between">
        <Avatar className="bg-primary text-white text-xl justify-center items-center">
          {userNameChar}
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
