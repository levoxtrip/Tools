import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  to: string;
  text: string;
}

const BackBtn: React.FC<Props> = ({ to, text }) => {
  const navigate = useNavigate();
  return (
    <button className="btn-ghost" onClick={() => navigate(to)} aria-label={text}>
      <span aria-hidden>←</span> {text}
    </button>
  );
};

export default BackBtn;
