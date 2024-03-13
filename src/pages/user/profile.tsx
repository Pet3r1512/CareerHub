import React, { useEffect, useState } from "react";
import Page from "@/assets/_UI/Page";
import UserDashboardMenu, { SectionItem } from "@/assets/User/Menu";
import { usePathname, useSearchParams } from "next/navigation";
import AccountSetting from "@/assets/User/Dashboard/AccountSetting";
import Resume from "@/assets/User/Dashboard/Resume";
import { useRouter } from "next/router";
import Information from "@/assets/User/Dashboard/Information";
import AppliedJob from "@/assets/User/Dashboard/AppliedJobs";
import SavedJobs from "@/assets/User/Dashboard/SavedJobs";
import Notifications from "@/assets/User/Dashboard/Notifications";
import { LogOut, Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { twMerge } from "tailwind-merge";

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
  const [expandMenu, setExpandMenu] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // loading = true
    if (!localStorage.getItem("token")) {
      // false
      router.push("/auth/signin");
    }
  }, []);

  return (
    <div>
      <Page
        pageName="Profile"
        noMenu
        noFooter
        noHeader
        className="h-screen relative"
      >
        <MobileSideBar
          searchParams={searchParams}
          expandMenu={expandMenu}
          setExpandMenu={setExpandMenu}
        />
        <div className="gap-2 flex min-h-screen max-h-screen lg:max-h-none lg:h-screen py-4 lg:py-16">
          <UserDashboardMenu
            expandMenu={expandMenu}
            setExpandMenu={setExpandMenu}
          />
          <ProfileSections searchParams={searchParams} />
        </div>
      </Page>
    </div>
  );
}

function ProfileSections({ searchParams }: { searchParams: any }) {
  return (
    <div className="flex-1 shadow-2xl rounded-2xl">
      {!searchParams.get("section") && (
        <div className="h-full w-full flex items-center justify-center">
          <p className="font-semibold text-primary text-xl">Your Profile</p>
        </div>
      )}
      {searchParams.get("section") === "public_profile" && (
        <Information key={"information"} />
      )}
      {searchParams.get("section") === "account_settings" && (
        <AccountSetting key={"account_setting"} />
      )}
      {searchParams.get("section") === "your_resumes" && (
        <Resume key={"resumes"} />
      )}
      {searchParams.get("section") === "applied_jobs" && (
        <AppliedJob key={"applied_job"} />
      )}
      {searchParams.get("section") === "saved_jobs" && (
        <SavedJobs key={"saved_jobs"} />
      )}
      {searchParams.get("section") === "notifications" && (
        <Notifications key={"notifications"} />
      )}
    </div>
  );
}

function MobileSideBar({
  expandMenu,
  setExpandMenu,
  searchParams,
}: {
  expandMenu: boolean;
  setExpandMenu: React.Dispatch<React.SetStateAction<boolean>>;
  searchParams: any;
}) {
  const router = useRouter();

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Menu className="md:hidden absolute top-8 left-8" />
      </DrawerTrigger>
      <DrawerContent className="h-full w-2/3 outline-none border-none pt-4">
        <section
          className={twMerge(
            "shadow-2xl h-full rounded-r-2xl relative transition-all duration-175 ease-linear flex flex-col justify-between",
            expandMenu ? "sm:w-52 lg:w-60" : "w-16"
          )}
        >
          <div className="flex flex-col justify-between">
            <SectionItem
              expandMenu={expandMenu}
              setExpandMenu={setExpandMenu}
            />
          </div>
          <button
            className="flex items-center gap-x-2 cursor-default lg:hover:bg-red-500 lg:hover:text-white transition-colors duration-150 rounded-l-2xl ease-linear py-2 px-4 text-red-500 w-full"
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("token");
              router.push("/auth/signin");
            }}
          >
            <LogOut />
            <span
              className={twMerge("font-semibold", expandMenu ? "" : "hidden")}
            >
              Sign Out
            </span>
          </button>
        </section>
      </DrawerContent>
    </Drawer>
  );
}
