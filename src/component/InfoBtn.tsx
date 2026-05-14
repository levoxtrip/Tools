import React from "react";

interface Props {
  onToggle: () => void;
  showingInfo: boolean;
}

const InfoBtn: React.FC<Props> = ({ onToggle, showingInfo }) => {
  return (
    <button
      className="info-btn"
      onClick={onToggle}
      aria-label={showingInfo ? "Show tool" : "Show information"}
    >
      {showingInfo ? "×" : "i"}
    </button>
  );
};

export default InfoBtn;
