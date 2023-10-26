import React from "react";
import MenuItems from "./MenuItems";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => {
    return store.toggleSelector.isOpen;
  });
  //-------------------------------------------------------------------------------------//
  // ternary operator
  // return isMenuOpen ? (
  //     <div className="w-[240px]">
  //       <MenuItems></MenuItems>
  //     </div>
  //   ) : null;
  //-------------------------------------------------------------------------------------//
  // This type of coding pattern is known as Early return
  if (!isMenuOpen) return null;
  return (
    <div className="w-[240px] overflow-auto">
      <MenuItems></MenuItems>
    </div>
  );
};

export default Sidebar;
