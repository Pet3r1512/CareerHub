import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReduxProvider, store } from "@/lib/store";

export default function App({ Component, pageProps }: AppProps) {
  const hours: number = 48;
  const now: number = new Date().getTime();
  const setupTime: string | null = localStorage.getItem("setupTime");

  if (setupTime === null) {
    localStorage.setItem("setupTime", now.toString());
  } else {
    const setupTimeNumber: number = parseInt(setupTime, 10);
    if (now - setupTimeNumber > hours * 60 * 60 * 1000) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.setItem("setupTime", now.toString());
    }
  }

  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
