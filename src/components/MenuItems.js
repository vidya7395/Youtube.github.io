import React from "react";

const MenuItems = () => {
  return (
    <>
      <ul className="border-b pb-2 m-0">
        <li className="p-3 text-xl font-semibold cursor-pointer hover:bg-gray-100">
          🏠 Home
        </li>
        <li className="p-3 text-xl font-semibold cursor-pointer hover:bg-gray-100">
          🍰 Shorts
        </li>
        <li className="p-3 text-xl font-semibold cursor-pointer hover:bg-gray-100">
          🚉 Subscription
        </li>
      </ul>
      <ul className=" mt-2">
        <li className="p-3 text-xl font-semibold cursor-pointer hover:bg-gray-100">
          📚 Library
        </li>
        <li className="p-3 text-xl font-semibold cursor-pointer hover:bg-gray-100">
          🗝️ History
        </li>
        <li className="p-3 text-xl font-semibold cursor-pointer hover:bg-gray-100">
          📺 Your Videos
        </li>
      </ul>
    </>
  );
};

export default MenuItems;
