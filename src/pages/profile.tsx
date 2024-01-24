import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Page from "@/assets/_UI/Page";
import { useAppSelector } from "@/lib/store";

function Profile() {
  const router = useRouter();

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const user = useAppSelector((state) => state.auth.user);

  // Add routing for unAuthenticated user

  useEffect(() => {
    if (!user) {
      router.push("/auth/signin");
    }
  }, []);

  return (
    <Page pageName="Careerhub - Profile">
      <p>{user?.full_name}</p>
    </Page>
  );
}

export default Profile;
