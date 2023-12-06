import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import { twMerge } from "tailwind-merge";

export default function Page({
  children,
  pageName = "Home",
  className,
}: {
  children: ReactNode;
  pageName?: string;
  className?: string;
}) {
  return (
    <div>
      <Head>
        <title>JobParadise - {pageName}</title>
      </Head>
      <main
        className={twMerge(
          "max-w-[100rem] mx-auto py-5 md:min-h-screen",
          className
        )}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
