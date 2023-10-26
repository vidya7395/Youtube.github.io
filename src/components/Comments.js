import React from "react";

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex items-center bg-gray-200 p-1 rounded mt-4">
      <img
        className="w-[40px] rounded-full me-3"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRip0E-lEk8r4qrtcKWUL3r9v4BpOZ3Gn_oXP4hch8yrA&s"
        alt=""
      />
      <div>
        <div className="font-semibold">{name}</div>
        <span className="text-sm text-gray-600 font-medium">{text}</span>
      </div>
    </div>
  );
};

export default Comments;
