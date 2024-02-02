import React, { useEffect } from "react";
import Page from "@/assets/_UI/Page";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import UserDashboard from "@/assets/User/Dashboard";

export default function Profile() {
  const router = useRouter();

  useEffect(() => {
    if (!Cookies.get().token) {
      router.push("/auth/signin");
    }
  }, []);

  return (
    <Page pageName="Profile" noMenu>
      <UserDashboard />
    </Page>
  );
}
