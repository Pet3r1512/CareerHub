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
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

const phoneRegex = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/);

const formSchema = z.object({
  uuid: z.string(),
  full_name: z.string(),
  gender: z.string(),
  email: z
    .string({
      required_error: "Email is required!",
    })
    .email(),
  phone_number: z.string().regex(phoneRegex, "Invalid Number!"),
});

interface User {
  uuid: string;
  email: string;
  full_name: string;
  gender: string;
}

export default function DataForm() {
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
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
  }, []);

  return (
    <div>
      {/* Render component content */}
      {currentUser ? (
        <RegisteredFormData currentUser={currentUser!} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

function RegisteredFormData({ currentUser }: { currentUser: User }) {
  const [editMode, setEditMode] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      uuid: "",
      full_name: "",
      gender: "",
      email: "",
    },
  });

  const {
    register,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<PublicProfile>();

  type PublicProfile = z.infer<typeof formSchema>;

  return (
    <Form {...form}>
      <h1 className="text-lg font-bold cursor-default mb-8">
        Register Information
      </h1>
      <form onSubmit={() => {}} className="space-y-8">
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
                      value={currentUser?.full_name}
                      disabled={!editMode}
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
                <FormLabel
                  htmlFor="full_name"
                  className="text-md font-semibold"
                >
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
                    disabled={!editMode}
                    className="border-green border-2 font-extrabold text-black"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-x-2 items-center justify-end">
          <Button
            onClick={(e) => {
              e.preventDefault();
              setEditMode(!editMode);
            }}
            className={twMerge(
              "bg-gray-400 text-black font-semibold lg:hover:bg-gray-400 lg:hover:text-black",
              editMode
                ? "bg-red-500 lg:hover:bg-red-500 lg:hover:text-black"
                : ""
            )}
          >
            {editMode ? "Cancel" : "Edit"}
          </Button>
          <Button className="bg-green font-bold" disabled={!editMode}>
            Update
          </Button>
        </div>
      </form>
    </Form>
  );
}
