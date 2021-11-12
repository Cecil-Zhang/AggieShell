import React from "react";
import { Progress, Modal, Button } from 'antd';

// components

export default function CardProjPre({
  ProjectID,
  ProjectName,
  ProjectProgress
}) {
  const [showDetails, setShowDetails] = React.useState(false);
  const onShowDetails = () => {
    setShowDetails(true)
  }
  const [loading, setLoading] = React.useState(false);
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowDetails(false);
    }, 3000);
  };
  const handleCancel = () => {
    setShowDetails(false);
  };
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
              percent={90}
            />
            </div>
            <p>Need: $100</p>
            <p>Raised: $90</p>
            <br />
          </div>
          <div className="w-full xl:w-8/12 px-4 m-auto text-center">
            Brief Discription
          </div>
        </div>
      </div>
      <Modal
        title="Project X"
        centered
        visible={showDetails}
        onOk={handleOk}
        onCancel={handleCancel}
        width={'60%'}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Donate
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
              percent={90}
            />
            </div>
            <h3>Total Funds Need: $100</h3>
            <h3>Current Raised: $90</h3>
            <h3>Days Remaining: 10</h3>
            <br />
          </div>
          <div className="w-full xl:w-8/12 px-4 m-auto text-center">
            <p> <h3>Brief Discription:</h3> one line of brief intro </p>
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
