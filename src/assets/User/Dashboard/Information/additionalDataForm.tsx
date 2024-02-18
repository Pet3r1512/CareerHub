import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

const phoneRegex = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/);

function reverseDate(date: string) {
  var dateParts = date.split("-");
  var year = dateParts[0];
  var month = dateParts[1];
  var day = dateParts[2];

  // Construct the new date string in "DDMMYYYY" format
  var newDateString = day + "-" + month + "-" + year;

  return newDateString;
}

function canUpdate(lastUpdateDateString: string): boolean {
  const lastUpdateDate = new Date(lastUpdateDateString);
  const currentDate = new Date();
  const thirtyDaysAgo = new Date(currentDate);
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30); // Subtract 30 days

  // Check if the last update date is within the last 30 days
  return lastUpdateDate >= thirtyDaysAgo;
}

const formSchema = z.object({
  uuid: z.string(),
  phone_number: z.string().regex(phoneRegex, "Invalid Number!"),
  birth_day: z.string(),
  location: z.string(),
  occupation: z.string(),
});

export default function AdditionalDataForm() {
  const [isDone, setIsDone] = useState(false);
  const [details, setDetails] = useState({
    phone_number: "",
    birth_day: "",
    location: "",
    occupation: "",
    age: 0,
    nextValidUpdate: "",
  });
  const {
    register,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<AdditionalFormData>();

  type AdditionalFormData = z.infer<typeof formSchema>;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("user_id");
        if (!userId) {
          // Handle case where user ID is not available
          return;
        }

        const response = await fetch("/api/user/getUpdateUser", {
          method: "POST",
          body: JSON.stringify(userId),
          mode: "cors",
          headers: { "Content-type": "application/json" },
        });

        if (response.ok) {
          const data = await response.json();
          setDetails({
            phone_number: data.user_detail.phone_number,
            birth_day: data.user_detail.birth_day,
            location: data.user_detail.location,
            occupation: data.user_detail.occupation,
            age: data.user_detail.age,
            nextValidUpdate: data.nextChangeValidOn,
          });
        } else {
          // Handle error response
        }
      } catch (error) {
        // Handle fetch error
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
    setIsDone(true);
  }, []);

  return (
    <div className="w-full h-full">
      {!isDone ? (
        <></>
      ) : (
        <AdditionalForm details={details} setDetails={setDetails} />
      )}
    </div>
  );
}

function AdditionalForm({
  details,
  setDetails,
}: {
  details: {
    phone_number: string;
    birth_day: string;
    location: string;
    occupation: string;
    age: number;
    nextValidUpdate: string;
  };
  setDetails: React.Dispatch<
    SetStateAction<{
      phone_number: string;
      birth_day: string;
      location: string;
      occupation: string;
      age: number;
      nextValidUpdate: string;
    }>
  >;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [updated, setUpdated] = useState(false);
  const [loading, setLoading] = useState(false);

  const departments = [
    { name: "Information Technology (IT)", code: "IT" },
    { name: "Marketing", code: "MK" },
    { name: "Design", code: "DS" },
    { name: "Sales", code: "SL" },
    { name: "Human Resources (HR)", code: "HR" },
    { name: "Finance and Accountant", code: "FA" },
    { name: "Operations", code: "OP" },
    { name: "Customer Service", code: "CS" },
    { name: "Research and Development (R&D)", code: "RD" },
    { name: "Administration", code: "AD" },
    { name: "Student", code: "ST" },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      uuid: localStorage.getItem("user_id")!,
      phone_number: "",
      birth_day: "",
      location: "",
      occupation: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/api/auth/getUser", {
        method: "POST",
        body: JSON.stringify(localStorage.getItem("user_id")),
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const user = data.user;

          setDetails({
            phone_number: user.phone_number,
            birth_day: user.birth_day,
            location: user.location,
            occupation: user.occupation,
            age: user.age,
            nextValidUpdate: user.nextChangeValidOn,
          });
          console.log(details);
        });
    };
    fetchData();
  }, []);

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setSubmitting(true);
    await fetch("/api/user/updateUser", {
      method: "POST",
      body: JSON.stringify({ values }),
      mode: "cors",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDetails({
          phone_number: data.user.phone_number,
          birth_day: data.user.birth_day,
          location: data.user.location,
          occupation: data.user.occupation,
          age: data.user.age,
          nextValidUpdate: data.nextChangeValidOn,
        });
        toast({
          title: "Update Successfully!!!",
          description:
            "Next update: " + details.nextValidUpdate.toString().slice(0, 10),
          className: "bg-green",
        });
        setUpdated(true);
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Failed!",
          description: error.message,
        });
      });
    setSubmitting(false);
  };

  return (
    <Form {...form}>
      <h1 className="text-xl font-bold cursor-default mb-8">
        Additional Information
      </h1>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 relative flex flex-col gap-y-4"
      >
        <div className="flex items-center gap-x-2">
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem className="w-3/5">
                <FormLabel
                  htmlFor="phone_number"
                  className="text-md font-semibold"
                >
                  Phone Number
                </FormLabel>
                <FormControl>
                  <div className="grid w-full items-center gap-1.5">
                    {!details.phone_number ? (
                      <Input type="tel" id="phone_number" {...field} />
                    ) : (
                      <Input
                        value={details.phone_number}
                        className="border-green border-2 font-extrabold text-black"
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birth_day"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel
                  htmlFor="birth_date"
                  className="text-md font-semibold"
                >
                  Birth Day
                </FormLabel>
                <FormControl>
                  {!details.birth_day ? (
                    <Input
                      min="01-01-1800"
                      type="date"
                      id="birth_day"
                      {...field}
                    />
                  ) : (
                    <Input
                      value={details.birth_day.toString().slice(0, 10)}
                      className="border-green border-2 font-extrabold text-black"
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel
                htmlFor="phone_number"
                className="text-md font-semibold"
              >
                Location
              </FormLabel>
              <FormControl>
                <div className="grid w-full items-center gap-1.5">
                  {!details.location ? (
                    <Input
                      type="text"
                      id="location"
                      placeholder="Your home address"
                      {...field}
                    />
                  ) : (
                    <Input
                      value={details.location}
                      className="border-green border-2 font-extrabold text-black"
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="occupation"
          render={({ field }) => (
            <FormItem className="lg:w-1/3">
              <FormLabel htmlFor="gender" className="text-md font-semibold">
                Occupation
              </FormLabel>

              {!details.occupation ? (
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        id="occupation"
                        placeholder="Select Department"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent id="occupation">
                    {departments.map((dep) => {
                      return (
                        <SelectItem
                          key={dep.code}
                          value={dep.code + "-" + dep.name}
                        >
                          {dep.name}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  value={details.occupation}
                  className="border-green border-2 font-extrabold text-black"
                />
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={details.birth_day == null ? false : true}
          className={twMerge(
            "bg-green lg:hover:bg-green rounded-xl font-bold absolute bottom-0 right-0",
            submitting || loading ? "cursor-not-allowed opacity-70" : ""
          )}
        >
          Update
        </Button>
      </form>
      <Toaster />
    </Form>
  );
}
