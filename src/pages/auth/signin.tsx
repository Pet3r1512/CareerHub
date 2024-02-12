import Page from "@/assets/_UI/Page";
import Logo from "@/assets/_UI/_logo";
import { Card, Typography } from "@material-tailwind/react";
import ButtonBlock from "@/assets/_UI/_button";
import Link from "next/link";
import ImageWithLoading from "@/assets/_UI/_imageWithLoading";
import { Eye, EyeOff, RefreshCw } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useState, KeyboardEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/router";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { login, useAppDispatch, useAppSelector } from "@/lib/store";

export default function SignIn() {
  return (
    <Page className="py-0 max-w-none" noHeader>
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
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useAppDispatch();

  const router = useRouter();

  const formSchema = z.object({
    email: z.string({ required_error: "Email is required!" }).email(),
    password: z.string().min(8, "Password must has at least 8 characters!"),
  });

  const {
    register,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    clearErrors();
    setSubmitting(true);
    let userPassword = "";
    await fetch("/api/auth/signin", {
      method: "Post",
      body: values.email,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          if (data.result === "Done") {
            userPassword = data.message;
            localStorage.setItem("user", data.user_full_name);
            localStorage.setItem("user_id", data.uuid);
            dispatch(
              login({ full_name: data.user_full_name, uuid: data.uuid })
            );
          } else {
            toast({
              variant: "destructive",
              title: "Email or password is incorrect!",
            });
          }
        }
        return;
      });
    await fetch("/api/checkPassword", {
      method: "Post",
      body: JSON.stringify({ plain: values.password, hash: userPassword }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.result === true) {
          localStorage.setItem("token", data.token);
          toast({
            title: "Log in successfully",
            className: "bg-green",
          });
          setTimeout(() => {
            router.push("/user/profile");
          }, 1000);
        } else {
          toast({
            variant: "destructive",
            title: "Email or password is incorrect!",
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
    setSubmitting(false);
  };

  // Submiting form by Pressing "Enter"
  const handleKeyPress = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      form.handleSubmit(handleSubmit);
    }
  };

  // Toggle show/hidden password input
  const handleTogglePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetElement = e.target as HTMLButtonElement;
    if (targetElement.tagName.toLowerCase() !== "button") {
      e.preventDefault();
      setShowPassword(!showPassword);
    }
  };

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
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="email" className="text-md font-semibold">
                    Email
                  </FormLabel>
                  <FormControl>
                    <div className="grid w-full items-center gap-1.5">
                      <Input
                        type="email"
                        id="email"
                        placeholder="johndoe.careerhub@mail.com"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel
                    htmlFor="password"
                    className="text-md font-semibold"
                  >
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="flex w-full items-center gap-3 lg:gap-4">
                      <Input
                        // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        {...field}
                      />
                      <Button
                        className="bg-white hover:bg-white shadow-xl text-black px-0 lg:px-4"
                        tabIndex={-1}
                        onClick={handleTogglePassword}
                      >
                        {showPassword ? <Eye /> : <EyeOff />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            className="text-white rounded-xl px-6 py-4 text-lg font-semibold flex items-center gap-1 justify-between mt-8"
            disabled={submitting ? true : false}
            type="submit"
            onKeyDown={handleKeyPress}
          >
            Sign In
            <RefreshCw
              className={twMerge(
                "w-[18px] h-[18px] animate-spin",
                submitting ? "block" : "hidden"
              )}
            />
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
      </Form>
      <Toaster />
    </Card>
  );
}
