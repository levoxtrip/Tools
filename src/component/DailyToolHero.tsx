import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tools } from "../data/tools";
import { getRandomTool } from "../utils/getRandomTool";

const DailyToolHero: React.FC = () => {
  const navigate = useNavigate();
  const [seed, setSeed] = useState<number>(0);
  const tool = useMemo(() => getRandomTool(tools), [seed]);

  const handleBegin = () => {
    navigate(`/categories/${tool.category}/${tool.id}`);
  };

  const handleShuffle = () => {
    setSeed((s) => s + 1);
  };

  return (
    <section className="hero">
      <div className="hero-icon">
        <svg
          width="84"
          height="84"
          viewBox="0 0 84 84"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="42" cy="42" r="22" />
          <circle cx="42" cy="42" r="10" />
          <path d="M42 12v6M42 66v6M12 42h6M66 42h6" />
        </svg>
      </div>

      <p className="hero-eyebrow">Today's Tool</p>
      <h1 className="hero-title">{tool.title}</h1>

      <button className="hero-cta" onClick={handleBegin}>
        Begin
      </button>

      <button
        onClick={handleShuffle}
        className="mt-5 text-sm text-gray-400 hover:text-white transition"
      >
        Try another →
      </button>
    </section>
  );
};

export default DailyToolHero;
