import React, { useEffect, useState } from "react";

// components

import CardProjPre from "components/Cards/CardProjPre";
import { Spin } from "antd";
// layout for page

import MainBoard from "layouts/MainBoard.js";

import { getAllCampaigns } from "components/Solana/solana";
export default function Dashboard() {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(async () => {
    setLoading(true);
    await getAllCampaigns().then((val) => {
      setCardsData(val);
      console.log(val);
    });
    setLoading(false);
  }, []);
  return (
    <>
    <Spin spinning={loading} tip="fetching projects..." size="large">
      <div className="flex flex-wrap">
        {
          cardsData.map(item => (
            <div key={item.pubId} className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
              <CardProjPre 
                ProjectID={item.pubId}
                ProjectName={item.name} 
                ProjectSimpleDes={item.description}
                ProjectFullDes={item.long_description}
                ProjectRaisedAmount={parseInt(item.amount_donated.toString())}
                ProjectTotalAmount={parseInt(item.target.toString())}
                ProjectOnGoing={parseInt(item.ongoing.toString())}
              />
            </div>
          ))
        }
      </div>
    </Spin>
    </>
  );
}

Dashboard.layout = MainBoard;