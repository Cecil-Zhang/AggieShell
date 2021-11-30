import React from "react";

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Deliverables() {
  return (
    <>
      <Navbar transparent />
      <main className="deliverables-page">
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
        <section className="relative pb-6 bg-blueGray-200">
          <div className="container mx-auto px-4 pb-6">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="text-center mt-5">
                  <h3 className="text-4xl font-semibold leading-normal py-2 text-blueGray-700">
                    Gallery
                  </h3>
                  <div className="mt-4 border-t border-blueGray-200">
                    <img
                      alt="..."
                      className="shadow-xl rounded-lg mx-auto h-auto mt-8"
                      src="img/deliverables/wallet_authorization.png"
                      width="20%"
                    />
                    <h3 className="text-xs font-normal uppercase mt-6 leading-normal">
                      Wallet authorization
                    </h3>
                  </div>
                  <div className="mt-4 border-t border-blueGray-200">
                    <img
                      alt="..."
                      className="shadow-xl rounded-lg w-1/6 mx-auto h-auto mt-8"
                      src="img/deliverables/create_new.png"
                      width="60%"
                    />
                    <h3 className="text-xs font-normal uppercase mt-6 leading-normal">
                      Create new campaign page
                    </h3>
                  </div>
                  <div className="mt-4 border-t border-blueGray-200">
                    <img
                      alt="..."
                      className="shadow-xl rounded-lg w-1/6 mx-auto h-auto mt-8"
                      src="img/deliverables/dashboard.png"
                      width="70%"
                    />
                    <h3 className="text-xs font-normal uppercase mt-6 leading-normal">
                      Dashboard
                    </h3>
                  </div>
                  <div className="mt-4 border-t border-blueGray-200">
                    <img
                      alt="..."
                      className="shadow-xl rounded-lg w-1/6 mx-auto h-auto mt-8"
                      src="img/deliverables/campaign_description.png"
                      width="70%"
                    />
                    <h3 className="text-xs font-normal uppercase mt-6 leading-normal">
                      Campaign description
                    </h3>
                  </div>
                  <div className="mt-4 border-t border-blueGray-200">
                    <img
                      alt="..."
                      className="shadow-xl rounded-lg w-1/6 mx-auto h-auto mt-8"
                      src="img/deliverables/approve_transaction.png"
                      width="55%"
                    />
                    <h3 className="text-xs font-normal uppercase mt-6 leading-normal">
                      Making and approving donation
                    </h3>
                  </div>
                  <div className="mt-4 border-t border-blueGray-200">
                    <img
                      alt="..."
                      className="shadow-xl rounded-lg w-1/6 mx-auto h-auto mt-8"
                      src="img/deliverables/completed_campaign.png"
                      width="55%"
                    />
                    <h3 className="text-xs font-normal uppercase mt-6 leading-normal">
                      Completed campaign screen
                    </h3>
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
