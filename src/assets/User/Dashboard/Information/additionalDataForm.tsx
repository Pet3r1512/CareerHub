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
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const phoneRegex = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/);

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
  const [submitting, setSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [updated, setUpdated] = useState(false);
  const [validUpadte, setValidUpadte] = useState(false);
  const [loading, setLoading] = useState(false);
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

  type AdditionalFormData = z.infer<typeof formSchema>;

  useEffect(() => {
    setLoading(true);
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
          setValidUpadte(canUpdate(details.nextValidUpdate));
        } else {
          // Handle error response
        }
      } catch (error) {
        // Handle fetch error
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
    setLoading(false);
  }, []);

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setSubmitting(true);
    await fetch("/api/user/updateUser", {
      method: "POST",
      body: JSON.stringify({ values }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUpdated(true);
        setDetails({
          phone_number: data.info.full_name,
          birth_day: data.info.birth_day,
          location: data.info.location,
          occupation: data.info.occupation,
          age: data.info.age,
          nextValidUpdate: data.nextChangeValidOn,
        });
        toast({
          title: "Update Successfully!!!",
          className: "bg-green",
        });
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Failed!",
          description: error,
        });
      });
    setSubmitting(false);
  };

  if (loading) {
    return <></>;
  }

  return (
    <Form {...form}>
      <h1 className="text-xl font-bold cursor-default">
        Additional Information
      </h1>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 relative"
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
                    {details.phone_number === "" ? (
                      <Input type="tel" id="phone_number" {...field} />
                    ) : (
                      <Input
                        value={details.phone_number}
                        className="border-green border-2 font-extrabold text-black"
                        disabled
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
                  {details.birth_day === "" ? (
                    <Input type="date" id="birth_day" {...field} />
                  ) : (
                    <Input
                      value={details.birth_day.toString().slice(0, 9)}
                      className="border-green border-2 font-extrabold text-black"
                      disabled
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
                  {details.location === "" ? (
                    <Input
                      type="text"
                      id="location"
                      placeholder="Quan 7, TP.HCM"
                      {...field}
                    />
                  ) : (
                    <Input
                      value={details.location}
                      className="border-green border-2 font-extrabold text-black"
                      disabled
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

              {details.occupation === "" ? (
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
                  disabled
                />
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={submitting ? true : false || !validUpadte}
          className="bg-green lg:hover:bg-green rounded-xl font-bold absolute bottom-0 right-0"
        >
          Update
        </Button>
      </form>
      <Toaster />
      {!validUpadte && (
        <p className="text-red-400 text-right cursor-default">
          ***You can not update until{" "}
          <span className="font-bold">
            {details.nextValidUpdate.toString().slice(0, 9)}
          </span>
        </p>
      )}
    </Form>
  );
}
