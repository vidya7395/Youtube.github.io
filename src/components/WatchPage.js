import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/Store/toggleSidebarSlice";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_API_URL_BY_ID } from "../utils/constant";
import CommentsContainer from "./CommentsContainer";
import ChatContainer from "./ChatContainer";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
      <div className="p-4 h-full w-full flex flex-col">
        <div className="flex w-full">
          <div className="w-9/12 h-[500px]">
            <iframe
              className="h-full w-full"
              src={
                "https://www.youtube.com/embed/" +
                searchParams.get("v") +
                "?autoplay=1"
              }
              title="YouTube video player"
              // frameBorder="0"
              // autoPlay="on"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-3/12 p-3 h-[500px]">
            <ChatContainer />
          </div>
        </div>
        <div className="w-9/12">
          <CommentsContainer></CommentsContainer>
        </div>
      </div>
    </>
  );
};

export default WatchPage;
