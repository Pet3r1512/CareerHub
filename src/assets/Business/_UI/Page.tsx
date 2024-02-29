import Footer from "@/assets/_UI/Footer";
import { mitr } from "@/assets/_UI/Page";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import Header from "../Header";
import Head from "next/head";

export default function Page({
  pageName,
  children,
  className,
}: {
  pageName: string;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const variants = {
    hidden: { opacity: 0, x: 300, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 300, y: 0 },
  };

  return (
    <div>
      <Head>
        <title>{"CareerHub Business - " + pageName}</title>
      </Head>
      <AnimatePresence
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.main
          key="main"
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
        >
          <main
            id="body"
            className={twMerge(
              "max-w-[100rem] mx-auto pt-0 pb-14 px-2 lg:px-0 min-h-screen sm:min-h-max lg:min-h-screen",
              `${mitr.variable} font-sans`,
              className
            )}
          >
            <div>
              <Header open={open} setOpen={setOpen} />
            </div>
            {children}
          </main>
        </motion.main>
        <Footer className={twMerge(`${mitr.variable} font-sans`)} />
      </AnimatePresence>
    </div>
  );
}
