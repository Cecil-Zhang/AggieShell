import React from "react";

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Implementation() {
  return (
    <>
      <Navbar transparent />
      <main className="implemetation-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-1 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="text-center mt-5">
                  <h3 className="text-4xl font-semibold leading-normal py-2 text-blueGray-700">
                    Implementation Details
                  </h3>
                  <div className="mt-4 border-t border-blueGray-200">
                    <img
                      alt="..."
                      className="shadow-xl rounded-lg mx-auto h-auto mt-8"
                      src="img/overview_architecture.png"
                      width="60%"
                    />
                    <img
                      alt="..."
                      className="shadow-xl rounded-lg mx-auto h-auto mt-8"
                      src="img/communication.png"
                      width="50%"
                    />
                    <h3 className="text-xs font-normal uppercase mt-6 leading-normal">
                      Communication flow
                    </h3>
                  </div>
                </div>
                <div className="mt-6 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        With Solana, a smart contract (or program) is read-only or stateless
                        and contains just program logic. We wrote our smart contract in
                        Rust. After deployment, our smart contracts can be interacted
                        with by external accounts. The accounts that interact with the
                        programs store all the necessary data, such as fundraising campaigns,
                        donations, and so on.
                        <br />
                        <br />
                        On our decentralized application side, we use a JSON RPC API from
                        Solana to interact with the Solana blockchain. As a consequence,
                        our decentralized app can now both interact with smart contracts and
                        wallets on Solana blockchain.

                        <br />
                        <br />
                        Phantom is a wallet and browser extension that can be used to manage 
                        digital assets and access decentralized applications on the Solana blockchain.
                        Phantom extension in browsers such as Chrome, FireFox, and Edge injects a solana 
                        object into the javascript context so that our app can manipulate it to trigger 
                        transactions and sign transactions on behalf of users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
