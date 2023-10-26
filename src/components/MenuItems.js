import React from "react";
import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <>
      <ul className="border-b p-2 mx-0 mt-3">
        <Link to="/">
          <li className="px-3 py-2 font-semibold cursor-pointer hover:bg-gray-100 flex items-center rounded">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png"
              className="h-[20px] me-3"
              alt=""
            />
            Home
          </li>
        </Link>
        <li className="px-3 py-2 font-semibold cursor-pointer hover:bg-gray-100 flex items-center rounded">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5856/5856419.png"
            className="h-[20px] me-3"
            alt=""
          />
          Shorts
        </li>
        <li className="px-3 py-2 font-semibold cursor-pointer hover:bg-gray-100 flex items-center rounded">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2989/2989849.png"
            className="h-[20px] me-3"
            alt=""
          />
          Subscription
        </li>
      </ul>
      <ul className=" mt-2 p-2">
        <li className="px-3 py-2 font-semibold cursor-pointer hover:bg-gray-100 flex items-center rounded">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3503/3503786.png"
            className="h-[20px] me-3"
            alt=""
          />
          History
        </li>
      </ul>
    </>
  );
};

export default MenuItems;
