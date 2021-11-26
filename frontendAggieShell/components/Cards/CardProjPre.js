import React from "react";
import { Progress, Modal, Button, Input, InputNumber, Badge, Card } from 'antd';
import { donateToCampaign, withdraw } from "components/Solana/solana";
// components

export default function CardProjPre({
  ProjectID,
  ProjectName,
  ProjectSimpleDes,
  ProjectFullDes,
  ProjectRaisedAmount,
  ProjectTotalAmount,
  ProjectOnGoing
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
  const handleWithdraw = async () => {
    setLoading(true);
    try {
      await withdraw(ProjectID, ProjectRaisedAmount);
      setLoading(false);
      alert('Withdraw successful!');
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
      alert("failed to withdraw, are you the owner of this project?");
    }
  }
  const onChangeDonate = (value) => {
    setDonateAmount(value);
  }

  return (
    <Badge.Ribbon color={ProjectOnGoing?'blue':'green'} text={ProjectOnGoing?'Ongoing':'Closed'}>
    <Card>
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
                Details
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
        width={'80%'}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <Badge.Ribbon color={ProjectOnGoing?'blue':'green'} text={ProjectOnGoing?'Ongoing':'Closed'}>
        <Card>
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
            {ProjectOnGoing !== 0 ? 
              <>
              <Input.Group compact>
                <InputNumber
                  style={{width:'60%'}}
                  placeholder="Donate in SOL"
                  onChange={onChangeDonate}
                />
                <Button type="primary" loading={loading} onClick={handleDonate}>Donate</Button>
              </Input.Group>
              {ProjectRaisedAmount >= ProjectTotalAmount ?
              <>
              <br />
              <Button type="primary" loading={loading} onClick={handleWithdraw}>Withdraw All</Button>
              <br />
              </>:null
              }   
              </>:null
            }
            <br />
          </div>
          <div className="w-full xl:w-8/12 px-4 m-auto text-center">
            <p> Discription: <span style={{'fontWeight': 'bold'}}>{ProjectSimpleDes}</span> </p>
            <h3> Project Details </h3>
            <p className="text-left"> {ProjectFullDes} </p>
          </div>
        </div>
      </div>
      </Card>
      </Badge.Ribbon>
      </Modal>
    </Card>
    </Badge.Ribbon>
  );
}
