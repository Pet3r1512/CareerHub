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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

const validationSchema = z.object({
  company_name: z
    .string()
    .trim()
    .min(1, {
      message: "Organization name is required",
    })
    .max(255),
  image: z.any().optional(),
  URLs: z.array(
    z.object({ label: z.string(), value: z.string().url().min(1) })
  ),
  location: z
    .string()
    .trim()
    .min(1, {
      message: "Organization location is required.",
    })
    .max(255),
  company_type: z.string().min(1, {
    message: "Please select an organization type.",
  }),
  description: z.string().trim().min(1, {
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
      company_type: "",
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
                      <FormLabel className="text-sm lg:text-base">
                        Company Details
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
                            <FormLabel htmlFor="company_name">
                              Company Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Full legal name of the organization."
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
                            <FormLabel htmlFor="location">Location</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Organization's address"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <FormLabel>URLs</FormLabel>
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
                        name="company_type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="company_type">
                              Organization Type
                            </FormLabel>
                            <FormControl>
                              <Select onValueChange={field.onChange}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Company Type</SelectLabel>
                                    <SelectItem value="non-profit">
                                      Non-Profit
                                    </SelectItem>
                                    <SelectItem value="for-profit">
                                      For-Profit
                                    </SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
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
                      <FormLabel className="text-sm lg:text-base">
                        About Company
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
                            <FormLabel htmlFor="description">
                              Description
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Brief description of the organization."
                                className="resize-none"
                                {...field}
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
                        <div className="flex flex-row items-start space-x-3 space-y-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="text-white border-gray-500 mt-2 data-[state=checked]:border-primary"
                              id="terms"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-black">
                              I agree to the{" "}
                              <Link href="#" className="text-blue">
                                terms and conditions
                              </Link>
                              .
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
                      disabled={!isSubmittable}
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