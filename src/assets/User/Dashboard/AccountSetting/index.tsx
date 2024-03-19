import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import UserDashboardSectionLayout from "../_UserDashboardSectionLayout";
import Section from "../section";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/server/utils/trpc";
import Loading from "@/assets/_UI/loading";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function AccountSetting() {
  const query = trpc.user.getUserPassword.useQuery({
    id: localStorage.getItem("user_id")!,
  });

  const mutation = trpc.user.updatePassword.useMutation({
    onSuccess: () => {
      toast({
        title: "Update successfully!",
        className: "bg-green",
      });
    },
    onError: () => {
      toast({
        title: "Update failed! Please try again later!",
        variant: "destructive",
      });
    },
  });

  const formSchema = z
    .object({
      uuid: z.string(),
      password: z.string(),
      new_password: z
        .string()
        .min(8, "Password must has at least 8 characters!"),
      confirm_password: z.string().min(8),
    })
    .refine((data) => data.new_password === data.confirm_password, {
      message: "Passwords do not match",
      path: ["confirm_password"],
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      uuid: localStorage.getItem("user_id")!,
      password: query.data,
      new_password: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    mutation.mutate(values);
  };

  if (query.isLoading) {
    return <Loading />;
  }

  return (
    <UserDashboardSectionLayout sectionTitle="Account Setting">
      <Section title="Update Password" className="!h-full">
        <div className="flex flex-col md:flex-row gap-x-4">
          <p>Manage your password to make sure it safe!</p>
          <Form {...form}>
            <form className="w-full" onSubmit={form.handleSubmit(handleSubmit)}>
              <p className="font-semibold">
                Password <span className="text-red-500">{"(Encrypted)"}</span>
              </p>
              <div className="grid w-full items-center gap-1.5">
                <Input
                  type="password"
                  readOnly
                  className="cursor-not-allowed"
                  value={query.data}
                />
              </div>
              <FormField
                control={form.control}
                name="new_password"
                render={({ field }) => (
                  <FormItem className="w-full mt-4">
                    <FormLabel
                      htmlFor="new_password"
                      className="text-md font-semibold"
                    >
                      <p className="font-semibold">
                        New Password <span className="text-red-500">*</span>
                      </p>
                    </FormLabel>
                    <FormControl>
                      <div className="grid w-full items-center gap-1.5">
                        <Input id="new_password" type="password" {...field} />
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
                      <p className="font-semibold">Confirm Password</p>
                    </FormLabel>
                    <FormControl>
                      <div className="grid w-full items-center gap-1.5">
                        <Input
                          id="confirm_password"
                          type="password"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={mutation.isLoading}
                className="w-fit px-4 py-3 rounded-lg text-white mt-6"
              >
                Save Changes
                {mutation.isLoading ? <Loading className="text-white" /> : ""}
              </Button>
            </form>
          </Form>
        </div>
      </Section>
      <Toaster />
    </UserDashboardSectionLayout>
  );
}
