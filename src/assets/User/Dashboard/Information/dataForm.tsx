import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetStateAction, useEffect, useState } from "react";
import DashboardLoading from "../_loading";

const formSchema = z.object({
  uuid: z.string(),
  full_name: z.string(),
  gender: z.string(),
  email: z
    .string({
      required_error: "Email is required!",
    })
    .email(),
});

interface User {
  uuid: string;
  email: string;
  full_name: string;
  gender: string;
}

export default function DataForm({
  fetching,
  setFetching,
}: {
  fetching: boolean;
  setFetching: React.Dispatch<SetStateAction<boolean>>;
}) {
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    setFetching(true);
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("user_id");
        if (!userId) {
          // Handle case where user ID is not available
          return;
        }

        const response = await fetch("/api/auth/getUser", {
          method: "POST",
          body: JSON.stringify(userId),
          mode: "cors",
          headers: { "Content-type": "application/json" },
        });

        if (response.ok) {
          const data = await response.json();
          setCurrentUser(data.user);
        } else {
          // Handle error response
        }
      } catch (error) {
        // Handle fetch error
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
    setFetching(false);
  }, []);

  return (
    <div className="h-full w-full">
      {/* Render component content */}
      {currentUser ? (
        <RegisteredFormData currentUser={currentUser!} />
      ) : (
        <DashboardLoading />
      )}
    </div>
  );
}

function RegisteredFormData({ currentUser }: { currentUser: User }) {
  const [editMode, setEditMode] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      uuid: localStorage.getItem("user_id")!,
      full_name: "",
      gender: "",
      email: "",
    },
  });

  const {} = useForm<PublicProfile>();

  type PublicProfile = z.infer<typeof formSchema>;

  return (
    <Form {...form}>
      <h1 className="text-xl font-bold cursor-default mb-8">
        Register Information
      </h1>
      <form className="space-y-8">
        <div className="flex items-center gap-x-2 w-full">
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem className="w-[80%]">
                <FormLabel
                  htmlFor="full_name"
                  className="text-md font-semibold"
                >
                  Full Name
                </FormLabel>
                <FormControl>
                  <div className="grid w-full items-center gap-1.5">
                    <Input
                      id="full_name"
                      value={currentUser?.full_name}
                      disabled
                      className="border-green border-2 font-extrabold text-black"
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
              <FormItem className="flex-1">
                <FormLabel htmlFor="gender" className="text-md font-semibold">
                  Gender
                </FormLabel>
                <FormControl>
                  <div className="grid w-full items-center gap-1.5">
                    <Input
                      value={currentUser?.gender}
                      disabled
                      className="border-green border-2 font-extrabold text-black"
                    />
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
              <FormLabel htmlFor="email" className="text-md font-semibold">
                Email
              </FormLabel>
              <FormControl>
                <div className="grid w-full items-center gap-1.5">
                  <Input
                    value={currentUser?.email}
                    id="email"
                    disabled
                    className="border-green border-2 font-extrabold text-black"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
