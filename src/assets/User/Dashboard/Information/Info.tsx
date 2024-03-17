import UserAvatar from "@/assets/_UI/Header/_avatar";
import Section from "./section";
import { trpc } from "@/server/utils/trpc";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Loading from "@/assets/_UI/loading";

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

export default function Info() {
  const query = trpc.user.getUserById.useQuery({
    id: localStorage.getItem("user_id")!,
  });

  const mutation = trpc.user.updateUser.useMutation({
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

  const formSchema = z.object({
    uuid: z.string(),
    full_name: z.string().optional(),
    email: z.string().email().optional(),
    gender: z.string().optional(),
    phone_number: z.string().optional(),
    age: z.number().optional(),
    location: z.string().optional(),
    occupation: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      uuid: localStorage.getItem("user_id")!,
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    mutation.mutate(values);
  };

  if (query.isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-y-4">
      <Section title="Basic Information">
        <p>This is your personal information that you can update anytime.</p>
      </Section>
      <Section
        title="Profile Photo"
        className="flex flex-col lg:flex-row gap-x-16 gap-y-6"
      >
        <p className="lg:w-1/3">
          Displaying this image as your profile picture will make you easily
          recognizable to recruiters as it will be publicly visible!
        </p>
        <div className="flex items-center sm:justify-center lg:justify-start flex-1 gap-x-4 sm:gap-x-14 lg:gap-x-16">
          <UserAvatar
            size="lg:w-[124px] lg:h-[124px] w-[80px] h-[80px]"
            fontSize="lg:text-[54px] text-4xl"
            onlyAvatar
          />
          <div className="lg:w-[383px] w-[243px] h-[196px] lg:h-[144px] rounded-[8px] border-2 border-primary border-dashed flex items-center justify-center cursor-default">
            Uploading Image is comming soon!
          </div>
        </div>
      </Section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Section
            title="Personal Details"
            className="flex flex-col lg:flex-row mb-4 gap-y-6 gap-x-16"
          >
            <div className="w-1/3"></div>
            <div className="flex flex-col w-full gap-y-6">
              <div className="flex flex-col gap-y-2 w-full">
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel
                        htmlFor="full_name"
                        className="text-md font-semibold"
                      >
                        <p className="font-semibold">
                          Full Name <span className="text-red-500">*</span>
                        </p>
                      </FormLabel>
                      <FormControl>
                        <div className="grid w-full items-center gap-1.5">
                          <Input
                            {...field}
                            value={field.value ?? query.data?.full_name}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center gap-y-6 gap-x-16">
                <div className="lg:w-1/2">
                  <FormField
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel
                          htmlFor="phone_number"
                          className="text-md font-semibold"
                        >
                          <p className="font-semibold">
                            Phone Number <span className="text-red-500">*</span>
                          </p>
                        </FormLabel>
                        <FormControl>
                          <div className="grid w-full items-center gap-1.5">
                            <Input
                              {...field}
                              value={field.value ?? query.data?.phone_number}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="lg:w-1/2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel
                          htmlFor="email"
                          className="text-md font-semibold"
                        >
                          <p className="font-semibold">
                            Email <span className="text-red-500">*</span>
                          </p>
                        </FormLabel>
                        <FormControl>
                          <div className="grid w-full items-center gap-1.5">
                            <Input
                              {...field}
                              value={field.value ?? query.data?.email}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center gap-y-6 gap-x-16">
                <div className="lg:w-1/2">
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => {
                      return (
                        <FormItem className="w-full">
                          <FormLabel htmlFor="gender">Gender</FormLabel>
                          <Select
                            value={field.value ?? query.data?.gender}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  defaultValue={query.data?.gender}
                                  id="gender"
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent id="gender">
                              <SelectItem value="Male">Male</SelectItem>
                              <SelectItem value="Female">Female</SelectItem>
                              <SelectItem value="Hide">
                                Hide Your Gender
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          </Section>
          <Section
            title="Additional Information"
            className="flex flex-col lg:flex-row gap-y-6 gap-x-16"
          >
            <div className="lg:w-1/3"></div>
            <div className="flex flex-col w-full gap-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-y-6 gap-x-16">
                <div className="lg:w-1/2">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel
                          htmlFor="location"
                          className="text-md font-semibold"
                        >
                          <p className="font-semibold">
                            Location <span className="text-red-500">*</span>
                          </p>
                        </FormLabel>
                        <FormControl>
                          <div className="grid w-full items-center gap-1.5">
                            <Input
                              {...field}
                              value={field.value ?? query.data?.location}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="lg:w-1/2">
                  <FormField
                    control={form.control}
                    name="occupation"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel
                          htmlFor="occupation"
                          className="text-md font-semibold"
                        >
                          <p className="font-semibold">
                            Occupation <span className="text-red-500">*</span>
                          </p>
                        </FormLabel>
                        <FormControl>
                          <div className="grid w-full items-center gap-1.5">
                            <Select
                              value={field.value ?? query.data?.occupation}
                              onValueChange={field.onChange}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue id="occupation" />
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
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </Section>
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
      <Toaster />
    </div>
  );
}
