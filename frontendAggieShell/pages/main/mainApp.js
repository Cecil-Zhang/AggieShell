import React from "react";

// components

import CardProjPre from "components/Cards/CardProjPre";

// layout for page

import MainBoard from "layouts/MainBoard.js";

export default function Dashboard() {
  const mockData = [
    {
      'projectName': 'Project 1',
    },
    {
      'projectName': 'Project 2',
    },
    {
      'projectName': 'Project 3',
    },
    {
      'projectName': 'Project 4',
    },
    {
      'projectName': 'Project 5',
    },
    {
      'projectName': 'Project 6',
    },
    {
      'projectName': 'Project 7',
    },
    {
      'projectName': 'Project 8',
    },
    {
      'projectName': 'Project 9',
    },
  ]
  return (
    <>
      <div className="flex flex-wrap">
        {
          mockData.map(item => (
            <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
              <CardProjPre ProjectName={item.projectName} />
            </div>
          ))
        }
        {/* <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
          <CardProjPre ProjectName="Project 1" />
        </div>
        <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
          <CardProjPre ProjectName="Project 2" />
        </div>
        <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
          <CardProjPre ProjectName="Project 3" />
        </div> */}
      </div>
    </>
  );
}

Dashboard.layout = MainBoard;