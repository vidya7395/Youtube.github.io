import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
  return (
    <>
      <Head></Head>
      <div className="flex h-full overflow-hidden">
        <Sidebar></Sidebar>
        {/* <MainContainer></MainContainer> */}
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Body;
