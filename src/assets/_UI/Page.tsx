import Head from "next/head";
import { ReactNode, useEffect, useState } from "react";
import Footer from "./Footer";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";

export default function Page({
  children,
  pageName = "Home",
  noHeader = false,
  noMenu = false,
  noFooter = false,
  className,
}: {
  children: ReactNode;
  pageName?: string;
  noHeader?: boolean;
  noMenu?: boolean;
  noFooter?: boolean;
  className?: string;
}) {
  const [openSidebar, setOpenSidebar] = useState(false);

  const renderedPageName = `CareerHub - ${pageName}`;
  const variants = {
    hidden: { opacity: 0, x: 300, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 300, y: 0 },
  };

  useEffect(() => {
    const hours: number = 48;
    const now: number = new Date().getTime();
    const setupTime: string | null = localStorage.getItem("setupTime");

    if (setupTime === null) {
      window.localStorage.setItem("setupTime", now.toString());
    } else {
      const setupTimeNumber: number = parseInt(setupTime, 10);
      if (now - setupTimeNumber > hours * 60 * 60 * 1000) {
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("token");
        window.localStorage.setItem("setupTime", now.toString());
      }
    }
  }, []);

  return (
    <div>
      <Head>
        <title>{renderedPageName}</title>
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
              "max-w-[100rem] mx-auto pt-9 pb-14 px-2 lg:px-0 lg:min-h-screen",
              className,
              openSidebar ? "h-full overflow-hidden" : ""
            )}
          >
            <div className={noHeader ? "hidden" : ""}>
              <Header
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
                noMenu={noMenu}
              />
            </div>
            {children}
          </main>
        </motion.main>
        <Footer
          className={twMerge(
            openSidebar ? "hidden" : "",
            noFooter ? "hidden" : ""
          )}
        />
      </AnimatePresence>
    </div>
  );
}
