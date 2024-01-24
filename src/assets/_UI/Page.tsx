import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

export default function Page({
  children,
  pageName = "Home",
  className,
}: {
  children: ReactNode;
  pageName?: string;
  className?: string;
}) {
  const renderedPageName = `CareerHub - ${pageName}`;
  const variants = {
    hidden: { opacity: 0, x: 300, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 300, y: 0 },
  };

  return (
    <div>
      <Head>
        <title>{renderedPageName}</title>
      </Head>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
        >
          <main
            className={twMerge(
              "max-w-[100rem] mx-auto pt-6 pb-14 px-2 lg:px-0 lg:min-h-screen",
              className
            )}
          >
            {children}
          </main>
        </motion.main>
        <Footer />
      </AnimatePresence>
    </div>
  );
}
