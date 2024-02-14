import React, { useEffect } from "react";
import Page from "@/assets/_UI/Page";
import UserDashboardMenu from "@/assets/User/Menu";
import { usePathname, useSearchParams } from "next/navigation";
import AccountSetting from "@/assets/User/Dashboard/AccountSetting";
import Resume from "@/assets/User/Dashboard/Resume";
import { useRouter } from "next/router";
import Information from "@/assets/User/Dashboard/Information";

export const getStaticProps = async () => {
  try {
    // Fetch user data from the API endpoint
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
    } else {
      // Handle error response
      console.error("Failed to fetch user data:", response.statusText);
      return {
        props: {
          user: null, // or handle error state as needed
        },
      };
    }
  } catch (error) {
    // Handle fetch error
    console.error("Error fetching user data:", error);
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
    if (!localStorage.getItem("token")) {
      router.push("/auth/signin");
    }
    router.push(
      pathname +
        `?user_token=${localStorage
          .getItem("user_id")
          ?.replace("-", "")}&section=public_profile`
    );
  }, []);

  return (
    <Page pageName="Profile" noMenu noFooter className="h-screen">
      <div className="flex pt-8 h-full gap-2">
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
  );
}
