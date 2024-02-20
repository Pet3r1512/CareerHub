import React, { useEffect } from "react";
import Page from "@/assets/_UI/Page";
import UserDashboardMenu from "@/assets/User/Menu";
import { usePathname, useSearchParams } from "next/navigation";
import AccountSetting from "@/assets/User/Dashboard/AccountSetting";
import Resume from "@/assets/User/Dashboard/Resume";
import { useRouter } from "next/router";
import Information from "@/assets/User/Dashboard/Information";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const getStaticProps = async () => {
  try {
    // Fetch user data from the API endpoint
    if (localStorage.getItem("user_id")) {
      const response = await fetch("/api/auth/getUser", {
        method: "POST",
        body: JSON.stringify(localStorage.getItem("user_id")),
        headers: { "Content-type": "application/json" },
      });

      // Check if the response is successful
      if (response.ok) {
        const data = await response.json();

        // Ensure that the fetched data is serializable
        const serializedData = JSON.parse(JSON.stringify(data));

        // Return the fetched user data as props
        return {
          props: {
            user: serializedData,
          },
        };
      }
    } else {
      return { props: { user: null } };
    }
  } catch (error) {
    return {
      props: {
        user: null, // or handle error state as needed
      },
    };
  }
};

export default function Profile() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // loading = true
    if (!localStorage.getItem("token")) {
      // false
      router.push("/auth/signin");
    }
    // false
    router.push(pathname + `?.replace("-", "")}&section=public_profile`);
  }, []);

  return (
    <div>
      <Page
        pageName="Profile"
        noMenu
        noFooter
        className="h-screen hidden sm:block"
      >
        <div className="pt-8 h-full gap-2 flex">
          <UserDashboardMenu />
          <div className="flex-1 shadow-2xl rounded-2xl">
            {searchParams.get("section") === "public_profile" && (
              <Information key={"information"} />
            )}
            {searchParams.get("section") === "account_settings" && (
              <AccountSetting key={"account_setting"} />
            )}
            {searchParams.get("section") === "your_resumes" && (
              <Resume key={"resumes"} />
            )}
          </div>
        </div>
      </Page>
      <div className="sm:hidden flex flex-col items-center gap-y-4 justify-center h-screen px-4">
        <p className="text-2xl font-semibold text-center">
          We only allow your profile to be accessed on devices with larger
          screens to ensure that you can access all information in the most
          complete and accurate way.
        </p>
        <p className="text-center text-lg">Sorry for the inconvenience</p>
        <Link href={"/"}>
          <Button className="text-white hover:bg-primary">Home</Button>
        </Link>
      </div>
    </div>
  );
}
