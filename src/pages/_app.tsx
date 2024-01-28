import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReduxProvider, store } from "@/lib/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
