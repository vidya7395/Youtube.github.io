import React, { useEffect } from "react";
import {
  GOOGLE_API_KEY,
  MERGE_WITH_GOOGLE_API_KEY,
  MERGE_WITH_GOOGLE_API_KEY_CHANNEL,
  YOUTUBE_CHANNEL_API,
  YOUTUBE_CHANNEL_DETAILS,
} from "../utils/constant";
import { useSearchParams } from "react-router-dom";
import YoutubeBanner from "./YoutubeBanner";
import ChannelDetails from "./ChannelDetails";
import ChannelPlayList from "./ChannelPlayList";

const YoutubeChannel = () => {
  const [channelIdParam, setchannelIdParam] = useSearchParams();

  return (
    <div className="w-full overflow-auto">
      <YoutubeBanner id={channelIdParam.get("c")} />
      <ChannelDetails id={channelIdParam.get("c")} />
      <ChannelPlayList id={channelIdParam.get("c")} />
    </div>
  );
};

export default YoutubeChannel;
