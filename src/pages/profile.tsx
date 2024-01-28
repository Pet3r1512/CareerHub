import React, { useEffect } from "react";
import Page from "@/assets/_UI/Page";
import Header from "@/assets/_UI/Header";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

function Profile() {
  const router = useRouter();

  useEffect(() => {
    if (!Cookies.get().token) {
      router.push("/auth/signin");
    }
  }, []);

  return (
    <Page pageName="Careerhub - Profile">
      <></>
    </Page>
  );
}

export default Profile;
