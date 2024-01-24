import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function Profile() {
  const router = useRouter();

  useEffect(() => {
    if (!Cookies.get("token")) {
      router.push("/auth/signin");
    }
  }, []);

  return (
    <div>
      <p>Check the console for cookie information.</p>
      <button
        onClick={() => {
          Cookies.remove("token");
          router.push("/auth/signin");
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Profile;
