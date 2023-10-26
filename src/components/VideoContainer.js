import React, { useEffect, useState } from "react";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { YOUTUBE_API_URL, YOUTUBE_SEARCH_LIST } from "../utils/constant";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);

    // setVideos(json.items);
  };

  // return (
  //   <div className="mt-4 grid  grid-4-part gap-x-7 gap-y-7 ">
  //     {videos[0] && (
  //       <Link to={"watch?v=" + videos[0].id}>
  //         <AddVideoCard info={videos[0]} />
  //       </Link>
  //     )}

  //     {videos.map((video) => {
  //       return (
  //         <Link to={"watch?v=" + video.id} key={video.id}>
  //           <VideoCard info={video} />;
  //         </Link>
  //       );
  //     })}
  //   </div>
  // );

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
        <div className="mt-4 grid  grid-4-part gap-x-7 gap-y-7 ">
          {videos[0] && <AddVideoCard info={videos[0]} key={videos[0].id} />}

          {videos.map((video) => {
            return <VideoCard info={video} key={video.id} />;
          })}
        </div>
      )}
    </>
  );
};

export default VideoContainer;
