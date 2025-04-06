import React from "react";
import { useNavigate } from "react-router-dom";
interface Props {
  to: string;
  text: string;
}
const BackBtn: React.FC<Props> = ({ to, text }) => {
  const navigate = useNavigate();
  return (
    <div className="back-btn">
      <button onClick={() => navigate(to)}>{text}</button>
    </div>
  );
};

export default BackBtn;
