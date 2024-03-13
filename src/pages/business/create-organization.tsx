import Page from "@/assets/Business/_UI/Page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import ImageWithLoading from "@/assets/_UI/_imageWithLoading";
import { Suspense } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Minus } from "lucide-react";
import ContactCombobox from "@/components/organization-form/contact-combobox";
import ImageDropzone from "@/components/organization-form/image-dropzone";
import TipTapDescription from "@/components/organization-form/tiptap-description";
import IndustrySelect from "@/components/organization-form/industry-select";
import EmployeeSelect from "@/components/organization-form/employee-select";
import DateSelect from "@/components/organization-form/date-select";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const validationSchema = z.object({
  company_name: z
    .string()
    .trim()
    .min(1, {
      message: "Organization name is required",
    })
    .max(255),
  image: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  URLs: z
    .array(
      z.object({ label: z.string(), value: z.string().trim().url().min(1) })
    )
    .nonempty({ message: "Please add at least one URL." }),
  location: z
    .string()
    .trim()
    .min(1, {
      message: "Organization location is required.",
    })
    .max(255),
  company_size: z
    .string()
    .min(1, { message: "Please select the number of employees." }),
  date_founded: z
    .string()
    .refine((str) => !isNaN(new Date(str).getTime()), "Invalid date.")
    .transform((str) => new Date(str)),
  industry_type: z
    .array(z.string())
    .nonempty({ message: "Please select at least one industry type." }),
  description: z.string().min(1, {
    message: "Organization description is required.",
  }),
  terms: z.literal<boolean>(true, {
    errorMap: () => ({
      message: "Please accept the terms and conditions to proceed.",
    }),
  }),
});

export type FormValues = z.infer<typeof validationSchema>;

export default function CreateOrganization() {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
    mode: "onBlur",
    defaultValues: {
      company_name: "",
      URLs: [
        {
          label: "Add links to your website, social media, etc.",
          value: "",
        },
      ],
      location: "",
      company_size: "",
      industry_type: [],
      description: "",
      terms: false,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "URLs",
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  const { isValid, isDirty } = form.formState;

  const isSubmittable = !!isValid && !!isDirty;

  const inputClassName =
    "focus-visible:ring-[#2684ff] focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:hover:border-[#2684ff] rounded-sm hover:border-[#b3b3b3] duration-100";

  return (
    <Page pageName="Create Organization" className="p-0">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex items-center justify-center py-16 px-4 relative w-full min-h-screen">
          <ImageWithLoading
            src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Create Organization background image"
            fill
            priority
            className="w-full h-full object-cover rounded-t-lg"
          />
          <Card className="w-full lg:w-2/3 z-10">
            <CardHeader className="pb-0">
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>
                Create a new organization to start using our services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Separator className="my-6" />
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <ImageDropzone name="image" form={form} />
                  <Separator className="my-6" />
                  <FormItem className="flex flex-col lg:flex-row lg:justify-between w-full lg:gap-32 gap-4">
                    <div className="lg:w-1/3">
                      <FormLabel className="text-sm lg:text-base" asChild>
                        <legend>Company Details</legend>
                      </FormLabel>
                      <FormDescription className="text-xs">
                        Introduce your company core info quickly to users by
                        fill up company details
                      </FormDescription>
                    </div>
                    <section className="flex flex-col gap-6 lg:w-2/3">
                      <FormField
                        control={form.control}
                        name="company_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="company_name" asChild>
                              <legend>Company Name</legend>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Full legal name of the organization."
                                className={inputClassName}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="location" asChild>
                              <legend>Location</legend>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Organization's address"
                                className={inputClassName}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company_size"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="company_size" asChild>
                              <legend>Company Size</legend>
                            </FormLabel>
                            <FormControl>
                              <EmployeeSelect field={field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="date_founded"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="date_founded" asChild>
                              <legend>Date Founded</legend>
                            </FormLabel>
                            <FormControl>
                              <DateSelect name="date_founded" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <FormLabel htmlFor="URLs" asChild>
                            <legend>URLs</legend>
                          </FormLabel>
                          <ContactCombobox append={append} />
                        </div>
                        {fields.map((field, index) => (
                          <FormField
                            control={form.control}
                            key={field.id}
                            name={`URLs.${index}.value`}
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <FormControl>
                                  <div className="flex space-x-4 items-center">
                                    <Input
                                      placeholder={fields[index].label}
                                      className={inputClassName}
                                      {...field}
                                    />
                                    <Button
                                      type="button"
                                      onClick={() => remove(index)}
                                      variant="outline"
                                      className="w-fit text-gray-dark"
                                    >
                                      <Minus size={16} />
                                    </Button>
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                      <FormField
                        control={form.control}
                        name="industry_type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="industry_type" asChild>
                              <legend>Industry</legend>
                            </FormLabel>
                            <FormControl>
                              <IndustrySelect />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </section>
                  </FormItem>
                  <Separator className="my-6 mt-8" />
                  <FormItem className="flex flex-col lg:flex-row lg:justify-between w-full lg:gap-32 gap-4">
                    <div className="lg:w-1/3">
                      <FormLabel className="text-sm lg:text-base" asChild>
                        <legend>About Company</legend>
                      </FormLabel>
                      <FormDescription className="text-xs">
                        Brief description for your company. URLs are
                        hyperlinked.
                      </FormDescription>
                    </div>
                    <section className="flex flex-col gap-6 lg:w-2/3">
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="description" asChild>
                              <legend>Description</legend>
                            </FormLabel>
                            <FormControl>
                              <TipTapDescription
                                description={field.name}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </section>
                  </FormItem>
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <div className="flex flex-row items-center space-x-3 space-y-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="text-white border-gray-500 mt-2 data-[state=checked]:border-primary"
                              id="terms"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-black" asChild>
                              <legend>
                                I agree to the{" "}
                                <Link href="#" className="text-blue">
                                  terms and conditions
                                </Link>
                                .
                              </legend>
                            </FormLabel>
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <CardFooter className="w-full flex justify-end p-0">
                    <Button
                      type="submit"
                      // disabled={!isSubmittable}
                      className="text-[#d9d9d9] mt-4"
                    >
                      Create Organization
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <Toaster />
      </Suspense>
    </Page>
  );
}
