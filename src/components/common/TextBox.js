import React from "react";

const TextBox = ({ name, nameStyle, boxStyle, containerStyle }) => {
  return (
    <div className={containerStyle}>
      <label className={nameStyle}>{name}</label>
      <input className={boxStyle} type="text" />
    </div>
  );
};

export default TextBox;
