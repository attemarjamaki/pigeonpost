import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function Splash() {
  return (
    <>
      <Head>
        <title>PigeonPost</title>
        <meta name="description" content="Decentralized social media app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex items-center justify-center">
        <div className=" rounded-xl py-8 px-16 bg-fb-dark-gray">
          <div className="flex justify-center m-auto mb-4">
            <Image
              className="w-6 h-6"
              src="/images/pigeonpost.png"
              width={250}
              height={250}
              alt="coins"
            />
          </div>
          <h1 className="text-center text-4xl font-bold text-fb-white mb-8">
            Updating...
          </h1>
          <div className="flex justify-center mb-8">
            {/*
            <ConnectWallet
              theme={darkTheme({
                colors: {
                  borderColor: "#3a3b3c",
                  danger: "#dc2626",
                  separatorLine: "#3a3b3c",
                  modalBg: "#242526",
                  dropdownBg: "#242526",
                  accentText: "#628CD6",
                  accentButtonBg: "#628CD6",
                  primaryText: "#ffffff",
                  secondaryText: "#b0b3b8",
                  primaryButtonBg: "#628CD6",
                  primaryButtonText: "#ffffff",
                  connectedButtonBg: "#18191a",
                },
              })}
              modalTitle={"PigeonPost."}
              modalSize={"wide"}
              welcomeScreen={{
                title: "Your gateway to a decentralized social netwok",
                subtitle: "Connect wallet to get started",
              }}
              modalTitleIconUrl={""}
            />
            */}
            <p className="text-center text-fb-silver">
              The Mumbai testent has been deprecated...
              <br />
              Update coming soon to the Amoy testnet
            </p>
          </div>
          <div className="text-center text-fb-silver border-t-2 border-fb-gray py-4">
            <p>{"Don't have a wallet installed?"}</p>
            <Link
              href="https://metamask.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className=" hover:text-fb-white">
                Click here to install Metamask🦊
              </p>
            </Link>
          </div>
          <div className="text-center text-fb-silver border-t-2 border-fb-gray pt-4">
            <p>
              The smart contract is deployed to the
              <br />
              Amoy testnet. To get some testnet MATIC
            </p>
            <Link
              href="https://www.alchemy.com/faucets/polygon-amoy"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className=" hover:text-fb-white">click here</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Splash;
