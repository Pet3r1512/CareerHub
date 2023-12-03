import Head from "next/head";
import { ReactNode } from "react";

export default function Page({
  children,
  pageName = "Home",
}: {
  children: ReactNode;
  pageName?: string;
}) {
  return (
    <div>
      <Head>
        <title>JobParadise - {pageName}</title>
      </Head>
      <main className="max-w-[100rem] mx-auto py-5">{children}</main>
    </div>
  );
}
