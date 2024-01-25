import React, { useEffect } from "react";
import Page from "@/assets/_UI/Page";
import Header from "@/assets/_UI/Header";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useAppSelector } from "@/lib/store";

function Profile() {
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (!Cookies.get().token || !user) {
      router.push("/auth/signin");
    }
  }, []);

  return (
    <Page pageName="Careerhub - Profile">
      <Header />
    </Page>
  );
}

export default Profile;
