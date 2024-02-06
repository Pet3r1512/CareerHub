import React, { useEffect } from "react";
import Page from "@/assets/_UI/Page";
import { useRouter } from "next/router";
import UserDashboard from "@/assets/User/Dashboard";

export default function Profile() {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <Page pageName="Profile" noMenu>
      <UserDashboard />
    </Page>
  );
}
