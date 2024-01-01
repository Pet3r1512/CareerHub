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
  const renderedPageName = `JobParadise - ${pageName}`;
  return (
    <div>
      <Head>
        <title>{renderedPageName}</title>
      </Head>
      <main
        className={twMerge(
          "max-w-[100rem] mx-auto pt-6 pb-14 px-2 lg:px-0 lg:min-h-screen",
          className
        )}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
