import React from "react";

const InfoBtn = ({ onToogleShowTool }) => {
  const toggleTollpageState = () => {
    if (onToogleShowTool) {
      onToogleShowTool();
    }
  };

  return (
    <button className="info-btn" onClick={toggleTollpageState}>
      i
    </button>
  );
};

export default InfoBtn;
