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
                  <h3 className="text-4xl font-semibold leading-normal py-2 text-blueGray-700">
                    Gallery
                  </h3>
                  <table class="table-auto">
                    <thead>
                      <tr>
                        <th class="px-4 py-2 text-emerald-600">Title</th>
                        <th class="px-4 py-2 text-emerald-600">Author</th>
                        <th class="px-4 py-2 text-emerald-600">Views</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Intro to CSS</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Adam</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                      </tr>
                      <tr class="bg-emerald-200">
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Adam</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
                      </tr>
                      <tr>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Intro to JavaScript</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Chris</td>
                        <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1,280</td>
                      </tr>
                    </tbody>
                  </table>
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
