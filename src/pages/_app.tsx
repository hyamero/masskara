import Layout from "@/components/Layout";
import { GlobalContextProvider } from "@/hooks/useGlobalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import SEO from "../../next-seo-config";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />;
      </Layout>
    </GlobalContextProvider>
  );
}
