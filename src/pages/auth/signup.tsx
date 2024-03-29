import Page from "@/assets/_UI/Page";
import Logo from "@/assets/_UI/_logo";
import ButtonBlock from "@/assets/_UI/_button";
import Link from "next/link";
import ImageWithLoading from "@/assets/_UI/_imageWithLoading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, KeyboardEvent } from "react";
import { Eye, EyeOff, RefreshCw } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { twMerge } from "tailwind-merge";

export enum GenderEnum {
  female = "Female",
  male = "Male",
  hide = "Hide",
}

const formSchema = z
  .object({
    full_name: z
      .string({
        required_error: "Full name is required!",
      })
      .min(2)
      .max(50),
    gender: z.nativeEnum(GenderEnum),
    email: z
      .string({
        required_error: "Email is required!",
      })
      .email(),
    password: z.string().min(8, "Password must has at least 8 characters!"),
    confirm_password: z.string().min(8),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export default function SignUp() {
  return (
    <Page className="py-0 max-w-none relative" noHeader>
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
  const [submitting, setSubmitting] = useState(false); //for loading

  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  type SignupFormSchemaType = z.infer<typeof formSchema>;

  const {
    register,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormSchemaType>();

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setSubmitting(true);
    clearErrors();
    // hash password
    const hasedPassword = await fetch("/api/hashPassword", {
      method: "Post",
      body: values.password,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          values.password = data.hashedPassword;
          values.confirm_password = data.hashedPassword;
        }
      })
      .catch((err) => console.error(err));
    // add new user to db
    const createUser = await fetch("/api/auth/createUser", {
      method: "Post",
      body: JSON.stringify({ values }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          if (data.result === "Done") {
            toast({
              title: "Create Account Successfully!",
              className: "bg-green",
            });
            setTimeout(() => {
              router.push("/");
            }, 1000);
          }
          if (data.result === "Conflict") {
            toast({
              variant: "destructive",
              title: "Create Account Conflict",
              description: data.message,
            });
          }
        }
      })
      .catch((error) => {
        return toast({
          variant: "destructive",
          title: error.name,
          description: error.message,
        });
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

  const handleToggleConfirmPassword = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const targetElement = e.target as HTMLButtonElement;
    if (targetElement.tagName.toLowerCase() !== "button") {
      e.preventDefault();
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full md:w-full">
      <h2 className="text-3xl lg:text-5xl font-semibold mb-4 text-primary">
        Create New Account
      </h2>
      <h3 className="mb-8 md:text-md lg:text-lg">
        Nice to meet you! Please create an account to explore amazing jobs just
        for you!
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <div className="flex lg:flex-row flex-col w-full lg:items-center gap-4">
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel
                    htmlFor="full_name"
                    className="text-md font-semibold"
                  >
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <div className="grid w-full items-center gap-1.5">
                      <Input
                        type="text"
                        id="full_name"
                        placeholder="John Doe"
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
              name="gender"
              render={({ field }) => {
                return (
                  <FormItem className="lg:w-1/3">
                    <FormLabel htmlFor="gender">Gender</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue id="gender" placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent id="gender">
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Hide">Hide Your Gender</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="email" className="text-md font-semibold">
                  Email Address
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
                <FormLabel htmlFor="password" className="text-md font-semibold">
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
                      className="bg-white hover:bg-white px-0 lg:px-4"
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
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel
                  htmlFor="confirm_password"
                  className="text-md font-semibold"
                >
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <div className="flex w-full items-center gap-3 lg:gap-4">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirm_password"
                      {...field}
                    />
                    <Button
                      className="bg-white hover:bg-white px-0 lg:px-4"
                      tabIndex={-1}
                      onClick={handleToggleConfirmPassword}
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
            disabled={submitting ? true : false}
            onKeyDown={handleKeyPress}
            className="text-white rounded-xl px-6 py-4 text-lg font-semibold flex items-center gap-1 justify-between"
          >
            Sign Up
            <RefreshCw
              className={twMerge(
                "w-[18px] h-[18px] animate-spin",
                submitting ? "block" : "hidden"
              )}
            />
          </Button>
          <p>
            {`By logging in with my social media account, I have read and agree to CareerHub's `}
            <Link href="/terms" className="text-primary underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-primary underline">
              Privacy Policy
            </Link>
          </p>
          <Typography
            placeholder=""
            color="black"
            className="mt-4 font-normal text-right"
          >
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="font-bold underline text-gray-900"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Form>
      <Toaster />
    </div>
  );
}

// https://github.com/ByteGrad/react-hook-form-with-zod-and-server-side/blob/main/components/form-with-rhf-and-zod-and-server.tsx
