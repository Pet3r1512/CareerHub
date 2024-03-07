import Page from "@/assets/_UI/Page";
import Header from "@/assets/admin/header";
import { useEffect, useState } from "react";
import { Signin } from "@/assets/admin/signin";

export default function AdminPage() {
  const [admin, setAdmin] = useState("");

  useEffect(() => {
    if (localStorage.getItem("admin")) {
      return setAdmin(localStorage.getItem("admin")!);
    }
  }, []);

  return (
    <Page noHeader>
      <Header admin={admin} />
      <section className="flex min-h-[80dvh] w-full items-center justify-center">
        {admin === "" ? <Signin admin={admin} setAdmin={setAdmin} /> : <></>}
      </section>
    </Page>
  );
}
