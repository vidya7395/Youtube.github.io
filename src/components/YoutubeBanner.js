import React, { useEffect, useState } from "react";
import {
  BANNER_API,
  GOOGLE_API_KEY,
  MERGE_WITH_GOOGLE_API_KEY,
} from "../utils/constant";
import { json } from "react-router-dom";

const YoutubeBanner = ({ id }) => {
  const [bannerUrl, setBannerUrl] = useState("");
  useEffect(() => {
    fetchChannelBanner();
  }, [id]);
  const fetchChannelBanner = async () => {
    const data = await fetch(
      `${BANNER_API}+${id}+${MERGE_WITH_GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setBannerUrl(json.items[0].brandingSettings.image.bannerExternalUrl);
  };
  return (
    <>
      {bannerUrl ? (
        <img src={bannerUrl} alt="" className="w-full  object-cover h-[40%]" />
      ) : (
        <div className="w-full  object-cover h-[40%] bg-neutral-400 "></div>
      )}
    </>
  );
};

export default YoutubeBanner;
