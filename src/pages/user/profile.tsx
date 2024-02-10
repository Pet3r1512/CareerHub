import React, { useEffect } from "react";
import Page from "@/assets/_UI/Page";
import UserDashboardMenu from "@/assets/User/Menu";
import Information from "@/assets/User/Dashboard/Information";
import { usePathname, useSearchParams } from "next/navigation";
import AccountSetting from "@/assets/User/Dashboard/AccountSetting";
import Resume from "@/assets/User/Dashboard/Resume";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    router.push(pathname + "?section=public_profile");
  }, []);

  return (
    <Page pageName="Profile" noMenu noFooter className="h-screen">
      <div className="flex pt-8 h-full gap-2">
        <UserDashboardMenu />
        <div className="flex-1 shadow-2xl rounded-2xl">
          {searchParams.get("section") === "public_profile" && <Information />}
          {searchParams.get("section") === "account_settings" && (
            <AccountSetting />
          )}
          {searchParams.get("section") === "your_resumes" && <Resume />}
        </div>
      </div>
    </Page>
  );
}
