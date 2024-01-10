"use client";

import Page from "@/assets/_UI/Page";
import Logo from "@/assets/_UI/_logo";
import ButtonBlock from "@/assets/_UI/_button";
import Link from "next/link";
import ImageWithLoading from "@/assets/_UI/_imageWithLoading";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

enum GenderEnum {
  female = "female",
  male = "male",
  hide = "hide",
}

const formSchema = z
  .object({
    full_name: z
      .string()
      .min(2, { message: "Name must have at least 2 characters!" })
      .max(50, { message: "Your name is too long!" }),
    gender: z.nativeEnum(GenderEnum),
    email: z.string().email({ message: "Invalid email address!" }),
    phone_number: z
      .string()
      .length(10, { message: "Phone number must be 10 letters long!" })
      .startsWith("0", { message: "Phone number must starts with 0!" }),
    password: z
      .string()
      .min(8, { message: "Password must have at least 8 characters" }),
    confirm_password: z
      .string()
      .min(8, { message: "Password must have at least 8 characters" }),
  })
  .refine(
    (values) => {
      return values.confirm_password === values.confirm_password;
    },
    {
      message: "Confirm password must match Password",
      path: ["confirm_password"],
    }
  );

export default function SignUp() {
  return (
    <Page className="py-0 max-w-none">
      <section className="lg:flex min-h-screen">
        <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col items-center justify-center">
          <ImageWithLoading
            src="https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/Illustrations/signup.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL0lsbHVzdHJhdGlvbnMvc2lnbnVwLnBuZyIsImlhdCI6MTcwNDUyMjM0MCwiZXhwIjoxNzM2MDU4MzQwfQ.hYZ7c9ZGBYiBydT464e3TO__WgtVMdM4MINrr6cxZsY&t=2024-01-06T06%3A25%3A38.637Z"
            width={800}
            height={600}
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
          <div className="flex items-center justify-center h-full md:my-auto lg:my-0">
            <SignUpForm />
          </div>
        </div>
      </section>
    </Page>
  );
}

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone_number: "",
      password: "",
      confirm_password: "",
    },
  });

  type SignupFormSchemaType = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormSchemaType>();

  const onSubmit: SubmitHandler<SignupFormSchemaType> = (data) =>
    console.log(data);

  return (
    <div className="bg-white p-8 rounded shadow-md w-full md:w-48 lg:w-full">
      <h2 className="text-3xl lg:text-5xl font-semibold mb-4 text-primary">
        Create New Account
      </h2>
      <h3 className="mb-8 md:text-md lg:text-lg">
        Nice to meet you! Please create an account to explore amazing jobs just
        for you!
      </h3>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex w-full items-center gap-4">
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-md font-semibold">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <>
                      <div className="grid w-full items-center gap-1.5">
                        <Input
                          type="text"
                          id="full_name"
                          placeholder="John Doe"
                          {...(register("full_name"), { required: true })}
                          aria-invalid={errors.full_name ? "true" : "false"}
                        />
                      </div>
                      {errors.full_name?.type === "required" && (
                        <p role="alert">Full name is required</p>
                      )}
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md font-semibold">
                    Gender
                  </FormLabel>
                  <FormControl>
                    <div className="relative inline-block text-left w-max">
                      <select
                        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md leading-tight focus:outline-none focus:border-black focus:border-2 focus:bg-white focus:shadow-outline-indigo transition duration-300 ease-in-out"
                        {...register("gender")}
                      >
                        <option defaultChecked hidden>
                          Select Your Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="hide">Hide Your Gender</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z" />
                        </svg>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-md font-semibold">
                  Email Address
                </FormLabel>
                <FormControl>
                  <div className="grid w-full items-center gap-1.5">
                    <Input
                      type="email"
                      id="email"
                      placeholder="johndoe.careerhub@mail.com"
                      {...register("email")}
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
                <FormLabel className="text-md font-semibold">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="flex w-full items-center gap-4">
                    <Input
                      // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      {...register("password")}
                    />
                    <Button
                      className="bg-white hover:bg-white"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? <Eye /> : <EyeOff />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-md font-semibold">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <div className="flex w-full items-center gap-4">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirm_password"
                      {...register("confirm_password")}
                    />
                    <Button
                      className="bg-white hover:bg-white"
                      onClick={() => {
                        setShowConfirmPassword(!showConfirmPassword);
                      }}
                    >
                      {showConfirmPassword ? <Eye /> : <EyeOff />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="text-white rounded-xl px-6 py-4 text-lg font-semibold"
          >
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
  );
}

// https://github.com/ByteGrad/react-hook-form-with-zod-and-server-side/blob/main/components/form-with-rhf-and-zod-and-server.tsx
