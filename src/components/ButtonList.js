import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["All", "Cricket", "Mixes", "Music", "News", "Cooking", "Songs"];
  return (
    <div className="flex overflow-auto">
      {list.map((element) => {
        return <Button name={element} key={element}></Button>;
      })}
    </div>
  );
};

export default ButtonList;
