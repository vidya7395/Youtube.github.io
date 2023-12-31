import React from "react";

const Button = ({ name }) => {
  //   const { name } = props;
  return (
    <button className="px-4 py-1 me-2 bg-gray-200 rounded-lg font-medium">
      {name}
    </button>
  );
};

export default Button;
