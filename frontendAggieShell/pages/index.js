/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import DocumentationTabs from "components/Tabs/DocumentationTabs.js";
import { VerticalAlignTopOutlined } from "@ant-design/icons";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section id="introduction" className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                AggieShell: A Blockchain-based Crowdfunding Platform
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                AggieShell is a Decentralized, Free and Open-Sourced Crowdfunding Platform. It is build upon BlockChain {" "}
                <a
                  href="https://solana.com"
                  className="text-blueGray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solana
                </a>
                , and consists of a React web app and Solana smart contracts.
              </p>
              <div className="mt-12">
                <a
                  href="/deliverables"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Learn how to get started
                </a>
                <a
                  href="/main/mainApp"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  Launch Demo App
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />
      </section>

      <section className="py-20 mt-24 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Our Goal
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                AggieShell aims to be a crowdfunding platform similar to Kickstarter or Indiegogo
                minus the campaign fees and data collection. This is achieved through smart contracts,
                a decentralized and trustless tool that is both transparent and easy to use through
                our app.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Our codebase is available at GitHub, you can either try it out through our demo, 
                or build and modify your own.
              </p>
              <a
                href="https://github.com/Cecil-Zhang/AggieShell/"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                GitHub Repo
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-24 py-16 px-12 relative z-10">
            <div className="w-ful text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <img
                  href="/img/aggiecoin.jpg"
                  className="max-w-full rounded-lg shadow-xl"
                />
              </p>
              <h3 className="font-semibold text-3xl">
                Why AggieShell?
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Although our app is mainly built for UC Davis students, AggieShell uses
                state-of-the-art blockchain technology to ensure privacy while retaining
                fast and efficient throughput.
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://www.youtube.com/watch?v=ZE2HxTmxfrI"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  What is a Smart Contract?
                </a>
                <a
                  href="https://www.ibm.com/topics/smart-contracts"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab text-lg mr-1"></i>
                  <span>Why Smart Contracts?</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>

      <section className="mt-48 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4 mt-6">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Smart Contracts built on Solana
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    AggieShell emphasizes decentralization, transparency, and security
                    through Smart Contracts on Solana, as well as ease of use for
                    UC Davis students.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Solana Chain
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      The Solana chain is one of the fastest scalable and user-friendly
                      permissionless blockchains, offerring up to 710,000 TPS
                      and $0.00025 per transaction.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Wallet
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Our platform uses Phantom wallet, a simple way to transfer
                      funds on the AggieShell platform.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Smart Contracts
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Smart contracts are deployed and tested using Rust, a language
                        similar to C++, and allow
                        for users to be refunded if funding threshold is not met.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Aggie Coin (Coming)
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Transactions and funding on the Aggie Shell platform is done
                        through Aggie Coin, a crypto specifically made for our app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="deliverables" className="container mx-auto px-5 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Deliverables
                </h3>
                <p className="mt-4 mb-8 text-lg leading-relaxed text-blueGray-500">
                  The AggieShell web application dashboard allow users to create,
                  edit, and donate to new and existing fundraising campaign projects.
                  <br />
                  <a
                    href="/deliverables"
                    className="text-sm font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                  >
                    Read more{" "}
                    <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                  </a>
                </p>
                <h2 className="text-xl font-semibold">
                  Dependencies
                </h2>
                <DocumentationTabs />
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/app_dashboard.png"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div id="implementation" className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href="https://solana.com"
                    target="_blank"
                  >
                    <div className="bg-purple-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://cryptologos.cc/logos/solana-sol-logo.png?v=014"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Solana
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.rust-lang.org/"
                    target="_blank"
                  >
                    <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Rust
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="https://www.creative-tim.com/product/notus-js"
                    target="_blank"
                  >
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Notus JS
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://phantom.app/"
                    target="_blank"
                  >
                    <div className="bg-indigo-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/sqzgmbkggvc1uwgapeuy"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Phantom Wallet
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Implementation
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                The smart contract portion of our app is written in most Rust and deployed
                on the Solana network. We use Phantom Wallet and its browser extension to
                communicate between the wallet, client, and network via JSON RPC API.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                The frontend of our app uses Ant Design as well as Notus JS, a UI
                toolkit that uses React, TailwindCSS, and NextJs.
              </p>
              <a
                href="/implementation"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                Read more{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>

      <div id="future"></div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg py-16 px-12 relative z-10">
          <div className="w-full text-center lg:w-8/12">
            <p className="text-4xl text-center">
              <img
                href="/img/aggiecoin.jpg"
                className="max-w-full rounded-lg shadow-xl"
              />
            </p>
            <h3 className="font-semibold text-3xl">
              What's Next?
            </h3>
            <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              Our next main goals include supporting multiple coins apart from SOLs, such as Aggie Coin, Ethereums, etc.; 
              publishing our app to Solana's Main Net. 
            </p>
            <div className="text-center mt-16"></div>
          </div>
        </div>
      </div>
      </section>

      <section id="about" className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Contributors</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  ECS265 Fall 2021 - Prof Mohammad Sadoghi, TA Sajjad Rahnama
                </p>
                <a
                  href="/timeline"
                  className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                >
                  Read more about development timeline{" "}
                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/pfp/wenchang.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Wenchang Liu</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Web Developer / UX Design
                    </p>
                    <div className="mt-6">
                      <a
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        target="_blank"
                        href="https://github.com/williamlwclwc"
                      >
                        <i style={{verticalAlign: 'bottom'}} className="fab fa-github"></i>
                      </a>
                      <a
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        target="_blank"
                        href="https://www.linkedin.com/in/wenchang-liu-938a6bb2"
                      >
                        <i style={{verticalAlign: 'bottom'}} className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/pfp/shuxian.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Shuxian Zhang</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Web Developer / Wallet Integration
                    </p>
                    <div className="mt-6">
                      <a
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        target="_blank"
                        href="https://github.com/Cecil-Zhang"
                      >
                        <i style={{verticalAlign: 'bottom'}} className="fab fa-github"></i>
                      </a>
                      <a
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        target="_blank"
                        href="https://www.linkedin.com/in/shuxian-zhang-927b8b157/"
                      >
                        <i style={{verticalAlign: 'bottom'}} className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/pfp/zhixuan.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Zhixuan Li</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Smart Contract Developer / API Design
                    </p>
                    <div className="mt-6">
                      <a
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        target="_blank"
                        href="https://github.com/29Esther"
                      >
                        <i style={{verticalAlign: 'bottom'}} className="fab fa-github"></i>
                      </a>
                      <a
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        target="_blank"
                        href="https://www.linkedin.com/in/lizhixuan"
                      >
                        <i style={{verticalAlign: 'bottom'}} className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/pfp/jinxiao.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jinxiao Yu</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Product Manager / Smart Contract Developer
                    </p>
                    <div className="mt-6">
                      {/* <a
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        target="_blank"
                        href="https://github.com/williamlwclwc"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      <a
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        target="_blank"
                        href="https://www.linkedin.com/in/wenchang-liu-938a6bb2"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/pfp/justin.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Justin Xu</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Web Developer / Landing Page Design
                    </p>
                    <div className="mt-6">
                      {/* <a
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        target="_blank"
                        href="https://github.com/williamlwclwc"
                      >
                        <i className="fab fa-github"></i>
                      </a> */}
                      <a
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        target="_blank"
                        href="https://www.linkedin.com/in/justin-x-88bb1b103"
                      >
                        <i style={{verticalAlign: 'bottom'}} className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <div className="py-10">
      </div>
      <Footer />
    </>
  );
}
