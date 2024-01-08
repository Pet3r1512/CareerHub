import Page from "@/assets/_UI/Page";
import Logo from "@/assets/_UI/_logo";
import Image from "next/image";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import ButtonBlock from "@/assets/_UI/_button";
import Link from "next/link";
import ImageWithLoading from "@/assets/_UI/_imageWithLoading";

export default function SignIn() {
  return (
    <Page className="py-0 max-w-none">
      <section className="lg:flex min-h-screen">
        <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col items-center justify-center">
          <ImageWithLoading
            src="https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/Illustrations/signin.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL0lsbHVzdHJhdGlvbnMvc2lnbmluLnBuZyIsImlhdCI6MTcwNDU0MjM5OCwiZXhwIjoxNzM2MDc4Mzk4fQ.MppPGCJHsg4-YJ-RqCV9WAtiKqsv0oQVWgGZMwERkR0&t=2024-01-06T11%3A59%3A56.612Z"
            width={(800 * 4) / 5}
            height={(600 * 4) / 5}
            priority
          />
        </div>
        <div className="lg:w-1/2 p-6 min-h-screen flex flex-col items-center gap-y-4 lg:gap-y-0">
          <div className="flex w-full justify-between items-center">
            <Link href="/">
              <ButtonBlock content="Home" />
            </Link>
            <Logo />
          </div>
          <div className="flex items-center justify-center h-full md:my-auto lg:my-0 mt-24 sm:mt-0">
            <SignInForm />
          </div>
        </div>
      </section>
    </Page>
  );
}

function SignInForm() {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex flex-col items-center"
    >
      <Typography variant="h1" className="text-primary self-start">
        Log In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal w-full self-start">
        Welcome back! Please sign in to find your dream position!
      </Typography>
      <form className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 flex items-center gap-x-1"
          >
            Your Email <span className="text-red-500">*</span>
          </Typography>
          <Input
            crossOrigin={true}
            size="lg"
            placeholder="me.careerhub@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 flex items-center gap-x-1"
          >
            Password <span className="text-red-500">*</span>
          </Typography>
          <Input
            crossOrigin={true}
            type="password"
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button className="mt-6 bg-primary text-md" fullWidth>
          sign up
        </Button>
        <Typography color="black" className="mt-4 text-center font-normal">
          Do not have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-semibold underline text-gray-900"
          >
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
