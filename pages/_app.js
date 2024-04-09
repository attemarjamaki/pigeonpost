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
  // Required information for connecting to the network
  chainId: 80002, // Chain ID of the network
  rpc: ["https://80002.rpc.thirdweb.com"], // Array of RPC URLs to use

  // Information for adding the network to your wallet (how it will appear for first time users) === \\
  // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
  nativeCurrency: {
    decimals: 18,
    name: "Polygon Amoy Testnet",
    symbol: "MATIC",
  },
  shortName: "amoy", // Display value shown in the wallet UI
  slug: "amoy", // Display value shown in the wallet UI
  testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
  chain: "Amoy", // Name of the network
  name: "Polygon Amoy Testnet", // Name of the network
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
