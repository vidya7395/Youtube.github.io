import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-full p-4">
      <ButtonList />
      <VideoContainer></VideoContainer>
    </div>
  );
};

export default MainContainer;
