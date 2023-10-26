import React, { useEffect, useState } from "react";
import {
  MERGE_WITH_GOOGLE_API_KEY,
  YOUTUBE_CHANNEL_DETAILS,
} from "../utils/constant";

const ChannelDetails = ({ id }) => {
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    // try {
    const data = await fetch(
      YOUTUBE_CHANNEL_DETAILS + id + MERGE_WITH_GOOGLE_API_KEY
    );
    const json = await data.json();
    setDetails(json.items[0]);
    // console.log("details", json); // Log the updated value of details
    // } catch (error) {
    //   console.error("Error fetching data: ", error);
    // }
  };
  return (
    <>
      {details ? (
        <div className="flex items-center  my-4 px-5">
          <img
            className="h-[128px] w-[128px] rounded-full"
            src={details?.snippet?.thumbnails?.default?.url}
            alt="logo"
          />
          <div className="flex justify-between w-full items-baseline">
            <div className="ms-3">
              <h2 className="font-semibold mb-2 text-2xl">
                {details?.snippet?.title}
              </h2>
              <div className="flex">
                <span>{details?.snippet?.customUrl} </span>

                <span className="mx-2 flex">
                  {details?.statistics?.subscriberCount >= 1000
                    ? details?.statistics?.subscriberCount >= 100000
                      ? details?.statistics?.subscriberCount / 1000000 + "M"
                      : details?.statistics?.subscriberCount / 1000 + "K"
                    : details?.statistics?.subscriberCount}{" "}
                  subscribers
                </span>
                <span>{details?.statistics?.videoCount} videos</span>
              </div>
              {/* <p>{details?.statistics?.description}</p> */}
            </div>
            <button className="rounded-lg bg-neutral-300 px-3 py-1">
              Subscribed
            </button>
          </div>
        </div>
      ) : (
        "Not rendered"
      )}
    </>
  );
};

export default ChannelDetails;
