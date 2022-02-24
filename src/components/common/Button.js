import React from "react";

const Button = ({ containerStyle, buttonStyle, children }) => {
  return (
    <div className={containerStyle}>
      <button className={buttonStyle}>{children}</button>
    </div>
  );
};

export default Button;
