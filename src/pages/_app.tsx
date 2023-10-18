import Loading from "@/components/Loading";
import { GlobalContextProvider } from "@/hooks/useGlobalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Suspense } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<Loading />}>
      <GlobalContextProvider>
        <Component {...pageProps} />;
      </GlobalContextProvider>
    </Suspense>
  );
}
