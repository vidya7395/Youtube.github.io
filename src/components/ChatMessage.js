import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="px-3 py-1 flex ">
      <img
        className="rounded-full h-[30px] border shadow"
        src="https://yt3.ggpht.com/dt_7th6zZPzSIeMfBgvkJBgu3NZ4YRZlqFuxLAKsHY7SljR0yLkcXZE-izL_Ds0NY5v1N7eW=s68-c-k-c0x00ffffff-no-rj"
        alt=""
      />
      <span className="font-bold mx-2">
        {name} <span className="font-normal">{message}</span>
      </span>
    </div>
  );
};

export default ChatMessage;
