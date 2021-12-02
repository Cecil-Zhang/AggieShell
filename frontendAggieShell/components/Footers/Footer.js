import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-6/12 px-4">
              <h4 className="text-3xl font-semibold">AggieShell @ UCDavis</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                AggieShell is a group project of ECS265 Distributed Database
              </h5>
              <div className="mx-0 w-6/12">
                <script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=300&t=m&d=E1eQgQwX3onCpHvtW7v3nW6arkVu26s_AKah_u7XeL0'></script>
              </div>
            </div>
            <div className="w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    References
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://expolab.org"
                        target="_blank"
                      >
                        Expolab Official
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://expolab.org/ecs265-fall2021.html"
                        target="_blank"
                      >
                        ECS265 Fall 2021
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.youtube.com/channel/UCqOUegtInlaSsiwL9QQJwjg"
                        target="_blank"
                      >
                        Expolab Youtube
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.chain.link/how-to-build-and-deploy-a-solana-smart-contract/"
                        target="_blank"
                      >
                        Smart Contract Tutorial
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://learn.figment.io/tutorials/crowdfunding-with-solana#writing-a-function-to-invoke-create_campaign-instruction"
                        target="_blank"
                      >
                        Solana App Tutorial
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/product/notus-js"
                        target="_blank"
                      >
                        Notus NextJs
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Navigation
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/main/mainApp"
                      >
                        Main App
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/deliverables"
                      >
                        How to Get started
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/#about"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/timeline"
                      >
                        Timeline
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/timeline"
                      >
                        Implementation Details
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} AggieShell by{" "}
                <a
                  href="https://github.com/Cecil-Zhang/AggieShell"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Wenchang Liu, Justin Xu, Shuxian Zhang, Zhixuan Li, Jinxiao Yu
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
