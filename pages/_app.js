import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  trustWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";

const activeChain = "polygon";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      supportedWallets={[metamaskWallet(), coinbaseWallet(), trustWallet()]}
    >
      <Layout>
        <Head>
          <title>PigeonPost</title>
          <meta name="description" content="Decentralized social media app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThirdwebProvider>
  );
}

export default MyApp;
