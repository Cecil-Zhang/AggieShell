import React from "react";
import { Progress } from 'antd';

// components

export default function CardProjPre({
  ProjectID,
  ProjectName,
  ProjectProgress
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                {ProjectName}
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See details
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
            <div className="py-3">
            <Progress
              type="circle"
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={90}
            />
            </div>
            <p>Total needed: $100</p>
            <p>Currently raised: $90</p>
          </div>
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            Brief Discription
          </div>
        </div>
      </div>
    </>
  );
}
