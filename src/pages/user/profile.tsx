import React, { useEffect } from "react";
import Page from "@/assets/_UI/Page";
import { useRouter } from "next/router";
import UserDashboardMenu from "@/assets/User/Menu";

export default function Profile() {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <Page pageName="Profile" noMenu noFooter className="h-screen">
      <div className="flex pt-8 h-full">
        <UserDashboardMenu />
        <div className="flex-1"></div>
      </div>
    </Page>
  );
}
