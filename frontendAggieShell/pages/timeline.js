import React from "react";

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Implementation() {
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
                <div className="text-center my-6">
                <section id="timeline" className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
        <div className="justify-center text-center flex flex-wrap">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="text-white font-semibold text-4xl">Development Timeline</h2>
            <br /> <br />
          </div>
        </div>
          <div class="timeline2">
						<div class="container2 left2">
						  <div class="content2">
							<h3 className="font-semibold text-2xl text-white">Week 1</h3>
							<p className="text-lg">Brainstorm project ideas. Explore market opportunities. Invest related technology.</p>
              <br />
						  </div>
						</div>
						<div class="container2 right2">
						  <div class="content2">
							<h3 className="font-semibold text-2xl text-white">Week 2</h3>
							<p className="text-lg">Finalize the project proposal, business requirements, and use cases. Make technology decisions. Communicate division of work. Make a detailed development plan.</p>
						  <br />
              </div>
						</div>
						<div class="container2 left2">
						  <div class="content2">
							<h3 className="font-semibold text-2xl text-white">Week 3</h3>
							<p className="text-lg">Prepare our development environment. Research and learn about technical implementation.</p>
						  <br />
              </div>
						</div>
						<div class="container2 right2">
						  <div class="content2">
							<h3 className="font-semibold text-2xl text-white">Week 4</h3>
							<p className="text-lg">Work out a draft feasible design of uncertain technology. Explore underlying issues and figure out solutions.</p>
						  <br />
              </div>
						</div>
						<div class="container2 left2">
						  <div class="content2">
							<h3 className="font-semibold text-2xl text-white">Week 5-6</h3>
							<p className="text-lg">Distribute detailed tasks to individuals and work on the first version of each module.</p>
						  <br />
              </div>
						</div>
						<div class="container2 right2">
						  <div class="content2">
							<h3 className="font-semibold text-2xl text-white">Week 7-8</h3>
							<p className="text-lg">Integrate submodules together and fine-tuning problems came across.</p>
						  <br />
              </div>
						</div>
						<div class="container2 left2">
							<div class="content2">
							  <h3 className="font-semibold text-2xl text-white">Week 9</h3>
							  <p className="text-lg">Deploy code to Solana test server. Evaluate and present the final project.</p>
                <br />
              </div>
						  </div>
						  <div class="container2 right2">
							<div class="content2">
							  <h3 className="font-semibold text-2xl text-white">Week 10</h3>
							  <p className="text-lg">Complete the write-up work.</p>
                <br />
							</div>
						</div>
					</div>
        </div>
      </section>
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