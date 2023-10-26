import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics, id } = info;
  const { channelTitle, title, thumbnails, channelId } = snippet;
  return (
    <div>
      <Link to={"../watch?v=" + id} relative={false}>
        <img src={thumbnails.medium.url} alt="" className="rounded-xl w-full" />
      </Link>
      <div>
        <h5 className="font-bold ellipsis-2-line">{title}</h5>
        <Link
          // preventScrollReset={true}
          to={"../channel?c=" + channelId}
          onClick={(e) => {
            // e.preventDefault();
            window.scrollTo(0, 0);
            // scrollTo(0)
          }}
        >
          <h6 className="font-medium text-gray-500 ">{channelTitle}</h6>
        </Link>
        <small className="text-base text-gray-500">
          {statistics?.viewCount} views
        </small>
      </div>
    </div>
  );
};

export const AddVideoCard = ({ info }) => {
  return (
    <div className="hover:bg-neutral-300 rounded-2xl">
      <VideoCard info={info}></VideoCard>
      <small>This is ad</small>
    </div>
  );
};
export default VideoCard;
