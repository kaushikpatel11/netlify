// Build-In
import React from "react";

const Button = ({ name, className, handleClick }) => {
  return (
    <button type="button" className={className} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
