import React from "react";

const Button = ({title}) => {
  return (
    <div>
      <button className="bg-brightColor rounded-md text-white px-4 py-2 hover:bg-hoverColor transition duration-300 ease-in-out">
        {title}
      </button>
    </div>
  );
};

export default Button;
