import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/Store/chatSlice";
import {
  generateRandomEmoji,
  generateRandomNames,
  makeRandomStrings,
} from "../utils/helper";
const ChatContainer = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessage = useSelector((store) => {
    return store.chat.messages;
  });
  const sendMessage = () => {
    dispatch(
      addMessage({
        name: "Vidya Satpute",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };
  useEffect(() => {
    const apiPollingTimer = setInterval(() => {
      // Dispatch an action
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message:
            makeRandomStrings(4) +
            " " +
            makeRandomStrings(8) +
            generateRandomEmoji(),
        })
      );
      // const chatDiv = document.getElementById("chatContainer");
      // chatDiv.scrollTo(0, chatDiv.scrollHeight);
    }, 1000);
    return () => clearInterval(apiPollingTimer);
  }, []);
  return (
    <div className="h-[500px] w-full border rounded flex flex-col">
      <header className="bg-gray-200 p-2">Live Chat</header>
      <div className="overflow-auto flex flex-col-reverse h-[500px]">
        {/* DO NOT USE KEY AS AN INDEX */}
        {chatMessage.map((chatItem, index) => {
          return (
            <ChatMessage
              name={chatItem.name}
              message={chatItem.message}
              key={index}
            />
          );
        })}
      </div>
      <form
        className="p-3 flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="border-b border-gray-300 w-full px-3 py-1 rounded focus:border-b"
          placeholder="Say Something.."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button
          onClick={() => {
            sendMessage();
          }}
          className="text-xs bg-green-100 rounded p-2"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatContainer;
