import Layout from "@/components/Layout";
import { GlobalContextProvider } from "@/hooks/useGlobalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </GlobalContextProvider>
  );
}
