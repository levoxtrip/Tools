import React from "react";

interface Props {
  onClick?: () => void;
  text?: string;
  size?: "default" | "lg";
  variant?: "solid" | "ghost";
  glowing?: boolean; // neon variant — picks up --cat-color
  type?: "button" | "submit";
}

const StartButton: React.FC<Props> = ({
  onClick,
  text = "Start",
  size = "default",
  variant = "solid",
  glowing = false,
  type = "button",
}) => {
  const cls = [
    "start-btn",
    size === "lg" ? "start-btn-lg" : "",
    variant === "ghost" ? "start-btn-ghost" : "",
    glowing ? "start-btn-glow" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={cls} onClick={onClick}>
      {text} <span aria-hidden>→</span>
    </button>
  );
};

export default StartButton;
