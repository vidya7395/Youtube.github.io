import React from "react";

const Shimmer = () => {
  return (
    <div className="card h-[228px]">
      <div className="banner  shimmer-animation"></div>
      <div className="content">
        <div className="header">
          <div className="title p-2 shimmer-animation"></div>
          <div className="rating p-2 shimmer-animation"></div>
        </div>
        <div className="list p-2 shimmer-animation"></div>
        <div className="info p-2 shimmer-animation"></div>
      </div>
    </div>
  );
};

export default Shimmer;
