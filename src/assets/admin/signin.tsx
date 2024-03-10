import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { twMerge } from "tailwind-merge";
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
import { toast } from "@/components/ui/use-toast";
import { trpc } from "@/server/utils/trpc";
import { Toaster } from "@/components/ui/toaster";
import { useRouter } from "next/router";

const router = useRouter();

export function Signin({
  admin,
  setAdmin,
}: {
  admin: string;
  setAdmin: React.Dispatch<React.SetStateAction<string>>;
}) {
  const mutation = trpc.isAdmin.useMutation({
    onSuccess: (admin) => {
      setAdmin(admin);
      localStorage.setItem("admin", admin);
      toast({
        title: "Log in successfully!",
        className: "bg-green",
      });
      router.push("/admin/dashboard");
    },
    onError: () => {
      toast({
        title: "Login Failed!",
        variant: "destructive",
      });
    },
  });

  const formSchema = z.object({
    username: z.string({ required_error: "Username is required!" }),
    password: z.string().min(8, "Password must has at least 8 characters!"),
  });

  useEffect(() => {
    if (
      !localStorage.getItem("admin") ||
      localStorage.getItem("admin") === undefined
    ) {
      mutation.isError = true;
    }
  }, []);

  const {
    register,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    clearErrors();
    mutation.mutate(values);
  };

  return (
    <Card className="w-[400px] flex flex-col items-center justify-center p-4">
      <CardHeader>
        <CardTitle>Admin Log In</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel
                    htmlFor="username"
                    className="text-md font-semibold"
                  >
                    Username
                  </FormLabel>
                  <FormControl>
                    <div className="grid w-full items-center gap-1.5">
                      <Input type="text" id="username" {...field} />
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
                    <Input
                      // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+"
                      type="password"
                      id="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            className="text-white rounded-xl px-6 py-4 text-lg font-semibold flex items-center gap-1 justify-between mt-8"
            disabled={mutation.isLoading ? true : false}
            type="submit"
          >
            {mutation.isLoading ? "Loading" : "Sign In"}
            <RefreshCw
              className={twMerge(
                "w-[18px] h-[18px] animate-spin",
                mutation.isLoading ? "block" : "hidden"
              )}
            />
          </Button>
        </form>
      </Form>
      <Toaster />
    </Card>
  );
}
