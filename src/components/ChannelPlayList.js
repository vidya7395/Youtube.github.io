import React, { useEffect, useState } from "react";
import {
  MERGE_WITH_GOOGLE_API_KEY_CHANNEL,
  YOUTUBE_CHANNEL_API,
} from "../utils/constant";
import Shimmer from "./Shimmer";
import VideoCard, { AddVideoCard } from "./VideoCard";

const ChannelPlayList = ({ id }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchDataChannelDetails();
  }, []);

  const fetchDataChannelDetails = async () => {
    const data = await fetch(
      YOUTUBE_CHANNEL_API + id + MERGE_WITH_GOOGLE_API_KEY_CHANNEL
    );

    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <>
      {videos.length === 0 ? (
        <div className="mt-4 grid  grid-4-part gap-x-7 gap-y-7 ">
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </div>
      ) : (
        <div>
          <header className="border-b text-2xl font-semibold px-3 pb-3">
            Playlist
          </header>
          <div className="mt-4 grid  grid-4-part gap-x-7 gap-y-7 p-3">
            {videos.map((video) => {
              return <VideoCard info={video} key={video.id} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ChannelPlayList;
