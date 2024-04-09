import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  trustWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";

const customChain = {
  chainId: 80002,
  rpc: ["https://80002.rpc.thirdweb.com"],
  nativeCurrency: {
    decimals: 18,
    name: "Polygon Amoy Testnet",
    symbol: "MATIC",
  },
  shortName: "amoy",
  slug: "amoy",
  testnet: true,
  chain: "Amoy",
  name: "Polygon Amoy Testnet",
};

//const activeChain = "mumbai";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={customChain}
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
