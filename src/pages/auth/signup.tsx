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
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const formSchema = z.object({
  full_name: z.string().min(2).max(50),
  gender: z.string(),
  email: z.string().email(),
  phone_number: z.string().length(10).startsWith("0"),
  password: z.string().min(8).includes("!@#$%^&*_"),
  confirm_password: z.string().min(8),
});

interface SignUpFormValues {
  full_name: string;
  gender: string;
  email: string;
  phone_number: string;
  password: string;
}

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
      gender: "",
      email: "",
      phone_number: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex w-full items-center gap-1">
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem className="w-2/3">
                  <FormLabel className="text-md font-semibold">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <div className="grid w-full items-center gap-1.5">
                      <Input
                        type="text"
                        id="full_name"
                        placeholder="John Doe"
                        required
                      />
                    </div>
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
                    <Select required>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Choose Your Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="hide">Hide Your Gender</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
                      required
                      type="email"
                      id="email"
                      placeholder="johndoe.careerhub@mail.com"
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
                      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+"
                      required
                      type={showPassword ? "text" : "password"}
                      id="password"
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
                <FormDescription>
                  &#x2022; Must have at least 8 characters
                </FormDescription>
                <FormDescription>
                  &#x2022; Must have at least 1 uppercase and 1 lowercase letter
                </FormDescription>
                <FormDescription>
                  &#x2022; Must have at least 1 number
                </FormDescription>
                <FormDescription>
                  &#x2022; Must have at least 1 special characters (e.g., !, @,
                  #, $, %, ^, &)
                </FormDescription>
                <FormDescription>
                  &#x2022; Spaces are not allowed
                </FormDescription>
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
                  <div className="flex w-full items-center gap-1">
                    <Input
                      required
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirm_password"
                    />
                    <Button
                      className="bg-white hover:bg-white"
                      onClick={() => {
                        setShowConfirmPassword(!showConfirmPassword);
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
