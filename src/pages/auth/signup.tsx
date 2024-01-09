import Page from "@/assets/_UI/Page";
import Logo from "@/assets/_UI/_logo";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
  Radio,
} from "@material-tailwind/react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import ButtonBlock from "@/assets/_UI/_button";
import Link from "next/link";
import ImageWithLoading from "@/assets/_UI/_imageWithLoading";

interface SignUpFormValues {
  full_name: string;
  gender: string;
  email: string;
  phone_number: string;
  password: string;
}

export default function SignUp() {
  return (
    <Page className="py-0 max-w-none">
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
  const initialValues: SignUpFormValues = {
    full_name: "",
    gender: "Hide",
    email: "",
    phone_number: "",
    password: "",
  };

  const CustomFullnameInput = (props: any) => {
    return (
      <Input
        variant="standard"
        crossOrigin={true}
        size="lg"
        placeholder="Career Hub"
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        {...props}
      />
    );
  };

  const CustomGenderInput = (props: any) => {
    return (
      <select {...props}>
        <option value={"Hide"}>Hide your gender</option>
        <option value={"Male"}>Male</option>
        <option value={"Female"}>Female</option>
      </select>
    );
  };

  const CustomEmailInput = (props: any) => {
    return (
      <Input
        variant="standard"
        crossOrigin={true}
        size="lg"
        placeholder="me.careerhub@mail.com"
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        {...props}
      />
    );
  };

  const CustomPhonenumberInput = (props: any) => {
    return (
      <Input
        variant="standard"
        crossOrigin={true}
        size="lg"
        type="tel"
        name="phone_number"
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        {...props}
      />
    );
  };

  const CustomPasswordInput = (props: any) => {
    return (
      <Input
        variant="standard"
        crossOrigin={true}
        type="password"
        size="lg"
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        {...props}
      />
    );
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex flex-col items-center"
    >
      <Typography variant="h1" className="text-primary self-start">
        Create New Account
      </Typography>
      <Typography color="gray" className="mt-1 font-normal w-full self-start">
        Nice to meet you! Please create an account to explore amazing jobs just
        for you!
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
        }}
      >
        <Form className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 flex items-center gap-x-1"
            >
              Your Name <span className="text-red-500">*</span>
            </Typography>
            <Field name="full_name" as={CustomFullnameInput} />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 flex items-center gap-x-1"
            >
              Gender
            </Typography>
            <Field id="gender" name="gender" as={CustomGenderInput} />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 flex items-center gap-x-1"
            >
              Your Email <span className="text-red-500">*</span>
            </Typography>
            <Field name="email" as={CustomEmailInput} />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 flex items-center gap-x-1"
            >
              Your Phone Number <span className="text-red-500">*</span>
            </Typography>
            <Field name="phone_number" as={CustomPhonenumberInput} />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 flex items-center gap-x-1"
            >
              Password <span className="text-red-500">*</span>
            </Typography>
            <Field name="password" as={CustomPasswordInput} />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 flex items-center gap-x-1"
            >
              Confirm Password <span className="text-red-500">*</span>
            </Typography>
            <Input
              crossOrigin={true}
              type="password"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            crossOrigin={true}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the&nbsp;
                <a
                  href="/info/terms"
                  className="font-semibold text-primary underline transition-colors hover:text-gray-900"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6 bg-primary text-md" fullWidth>
            sign up
          </Button>
          <Typography color="black" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="font-semibold underline text-gray-900"
            >
              Sign In
            </Link>
          </Typography>
        </Form>
      </Formik>
    </Card>
  );
}
