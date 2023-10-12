import React from "react";
import { hamburger, youtubeLogo } from "../utils/constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/Store/toggleSidebarSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <header className="flex justify-between items-center px-3 py-2 shadow-lg">
      {/*start: first section  */}
      <div className="flex items-center">
        <button className="" onClick={() => toggleMenuHandler()}>
          <img
            className="h-[40px] w-[40px]"
            src={hamburger}
            alt="Hamburger menu icon"
          />
        </button>
        <a href="/" className="">
          <img className="h-[70px]" src={youtubeLogo} alt="Logo of youtube" />
        </a>
      </div>
      {/*end: first section  */}

      {/*start:  middle section */}
      <div className="w-[50%] flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 p-3 w-full rounded-l-3xl border-r-0 text-xl"
        />
        <button className="rounded-r-3xl border border-gray-300 p-3 text-xl bg-gray-200">
          🔍
        </button>
      </div>
      {/*end:   middle section*/}

      {/*start: last section   */}
      <div className="flex items-center">
        <button className="w-[40px] h-[40px] rounded bg-gray-100 text-3xl me-3 flex items-center justify-center">
          📸
        </button>
        <button className="w-[40px] h-[40px] rounded bg-gray-50 text-2xl me-3 flex items-center justify-center">
          🔔
        </button>
        <button className="w-[40px] h-[40px]  text-2xl rounded-full border border-gray-500 border-s-4">
          V
        </button>
      </div>

      {/*end:  section */}
    </header>
  );
};

export default Head;
