import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Modal, Button, Form, Input, InputNumber, DatePicker } from 'antd';
import { createCampaign } from "components/Solana/solana";
import { PhantomBar } from "components/Solana/phantom";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  const [showModal, setShowModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [projectName, setProjectName] = React.useState("");
  const [simpleDes, setSimpleDes] = React.useState("");
  const [fullDes, setFullDes] = React.useState("");
  const [target, setTarget] = React.useState(0);
  const handleOk = async () => {
    setLoading(true);
    if (target === 0) {
      console.log("target is 0");
      return
    }
    await createCampaign(projectName, simpleDes, fullDes, "", target, 1);
    setLoading(false);
    setShowModal(false);
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };
  const handleCancel = () => {
    setShowModal(false);
  };
  const onNameChange = e => {
    setProjectName(e.target.value);
  };
  const onSimpDesChange = e => {
    setSimpleDes(e.target.value);
  };
  const onFullDesChange = e => {
    setFullDes(e.target.value);
  };
  function onTotalChange(value) {
    console.log(value);
    setTarget(value);
  };
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="/"
              className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            >
              <img className="inline-block align-middle float-left w-6" src="/img/brand/CowLogo.png" />
              <span className="inline-block align-middle float-left">AggieShell</span>
            </a>
          </Link>
          {/* User */}
          {/* <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul> */}
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="/"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      <img className="inline-block align-middle float-left w-6" src="/img/brand/CowLogo.png" />
                      <span className="inline-block align-middle float-left">AggieShell</span>
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* User Wallet */}
            <ul className="md:hidden items-center flex flex-wrap list-none">
              <PhantomBar />
            </ul>
            {/* Form */}
            {/* <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form> */}

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Operations
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    onClick={() => setShowModal(true)}
                  >
                    <i
                      className={
                        "fas fa-plus-square mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-400")
                      }
                    ></i>{" "}
                    Create New
                  </a>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Navigation
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/">
                  <a
                    href="/"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-home text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Home
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/#about">
                  <a
                    href="/"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-users text-blueGray-400 mr-2 text-sm"></i>{" "}
                    About
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/deliverables">
                  <a
                    href="/deliverables"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-question-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
                    How to get started
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <a
                  href="https://github.com/Cecil-Zhang/AggieShell/"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                >
                  <i className="fab fa-github text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Star GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal
        title="Creat a New Project"
        centered
        visible={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
        width={'60%'}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Confirm
          </Button>,
        ]}
      >
        <Form
          name="create new"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            label="Project Name"
            name="projectName"
            rules={[{ required: true, message: 'Please input your project name!' }]}
          >
            <Input onChange={onNameChange} />
          </Form.Item>
          <Form.Item
            label="Brief Introduction"
            name="briefIntro"
            rules={[{ required: true, message: 'Please input one line of introduction!' }]}
          >
            <Input placeholder="one line of introduction" onChange={onSimpDesChange} />
          </Form.Item>
          <Form.Item
            label="Total funds Needed(in SOL)"
            name="total"
            rules={[{ required: true, message: 'Please input how much funds you need!' }]}
          >
            <InputNumber onChange={onTotalChange}/>
          </Form.Item>
          <Form.Item
            label="Project Details"
            name="details"
            rules={[{ required: true, message: 'Please input details of your project!' }]}
          >
            <Input.TextArea showCount maxLength={800} placeholder="No more than 800 words" onChange={onFullDesChange} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
