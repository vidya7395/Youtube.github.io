import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import {
  MERGE_WITH_GOOGLE_API_KEY,
  YOUTUBE_SEARCH_LIST,
} from "../utils/constant";

const SearchPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getVideos();
  }, [searchParams]);

  const getVideos = async () => {
    // console.log(searchParams.get("s"));
    const data = await fetch(
      YOUTUBE_SEARCH_LIST + searchParams.get("s") + MERGE_WITH_GOOGLE_API_KEY
    );
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="mt-4 grid  grid-4-part gap-x-7 gap-y-7 p-4 w-full overflow-auto">
      {videos.map((data) => {
        return (
          <Link to={"/watch?v=" + data.id.videoId} key={data.id.videoId}>
            <div>
              <img
                src={data.snippet.thumbnails.high.url}
                alt=""
                className="rounded-xl w-full h-[300px]"
              />
              <div>
                <h5 className="font-bold ellipsis-2-line">
                  {data.snippet.title}
                </h5>
                <h6 className="font-medium text-gray-500 ">
                  {data.snippet.channelTitle}
                </h6>
                <small className="text-base text-gray-500">
                  {data.snippet.description} views
                </small>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchPage;
