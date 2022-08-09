import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { StateProvider } from "../contexts/stateContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main>
        <StateProvider>
          <Component {...pageProps} />
        </StateProvider>
      </main>
    </Layout>
  );
}

export default MyApp;
