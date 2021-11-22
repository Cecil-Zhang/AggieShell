import React from "react";
import { Progress, Modal, Button, Input, InputNumber } from 'antd';
import { donateToCampaign, withdraw } from "components/Solana/solana";
// components

export default function CardProjPre({
  ProjectID,
  ProjectName,
  ProjectSimpleDes,
  ProjectFullDes,
  ProjectRaisedAmount,
  ProjectTotalAmount,
}) {
  const [showDetails, setShowDetails] = React.useState(false);
  const [donateAmount, setDonateAmount] = React.useState(0);
  const onShowDetails = () => {
    setShowDetails(true)
  }
  const [loading, setLoading] = React.useState(false);
  const handleCancel = () => {
    setShowDetails(false);
  };
  const handleDonate = async () => {
    if (donateAmount == 0 || donateAmount == null) {
      console.log("invalid amount");
      return
    }
    setLoading(true);
    await donateToCampaign(ProjectID, donateAmount);
    setLoading(false);
    setShowDetails(false);
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  }
  const onChange = (value) => {
    setDonateAmount(value);
  }
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
                onClick={onShowDetails}
              >
                See details
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full xl:w-4/12 m-auto px-4 text-center">
            <div className="py-3">
            <Progress
              type="circle"
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={(ProjectRaisedAmount/ProjectTotalAmount*100).toFixed(2)}
            />
            </div>
            <br />
          </div>
          <div className="w-full xl:w-8/12 px-4 m-auto text-center">
            <p>{ProjectSimpleDes}</p>
            <br />
            <p>Need: {ProjectTotalAmount}</p>
            <p>Raised: {ProjectRaisedAmount} </p>
          </div>
        </div>
      </div>
      <Modal
        title={ProjectName}
        centered
        visible={showDetails}
        onCancel={handleCancel}
        width={'60%'}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-4/12 m-auto px-4 text-center">
            <h3> Progress: </h3>
            <div className="py-3">
            <Progress
              type="circle"
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={(ProjectRaisedAmount/ProjectTotalAmount*100).toFixed(2)}
            />
            </div>
            <h3>Total Funds Need: {ProjectTotalAmount}</h3>
            <h3>Current Raised: {ProjectRaisedAmount}</h3>
            <Input.Group compact>
              <InputNumber
                style={{width:'60%'}}
                placeholder="Donate in SOL"
                onChange={onChange}
              />
              <Button type="primary" loading={loading} onClick={handleDonate}>Donate</Button>
            </Input.Group>
            <br />
          </div>
          <div className="w-full xl:w-8/12 px-4 m-auto text-center">
            <p> Brief Discription: <span style={{'fontWeight': 'bold'}}>{ProjectSimpleDes}</span> </p>
            <h3> Project Details </h3>
            <p> lines of project details </p>
            <p> lines of project details </p>
            <p> lines of project details </p>
            <p> lines of project details </p>
            <p> lines of project details </p>
            <p> lines of project details </p>
          </div>
        </div>
      </div>
      </Modal>
    </>
  );
}
