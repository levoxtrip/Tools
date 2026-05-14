import React from "react";

interface Props {
  category: string;
  className?: string;
}

const iconPaths: Record<string, React.ReactNode> = {
  Action: (
    <path d="M5 12l5 5L20 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  Creativity: (
    <path
      d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
      strokeWidth="2"
      strokeLinecap="round"
    />
  ),
  "Decision Making": (
    <>
      <circle cx="12" cy="12" r="3" strokeWidth="2" />
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  Dopamin: (
    <path
      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  ),
  Emotions: (
    <>
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeWidth="2" strokeLinecap="round" />
      <circle cx="9" cy="10" r="0.8" fill="currentColor" />
      <circle cx="15" cy="10" r="0.8" fill="currentColor" />
    </>
  ),
  Energy: (
    <path
      d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  ),
  "Self-love": (
    <path
      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  ),
  Mindfullness: (
    <>
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" strokeWidth="2" />
    </>
  ),
  Anxiety: (
    <path
      d="M3 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "Problem solving": (
    <>
      <circle cx="11" cy="11" r="7" strokeWidth="2" />
      <path d="M21 21l-4.3-4.3" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  Happiness: (
    <>
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 9l.01 0M15 9l.01 0" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  Habit: (
    <>
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <path d="M12 7v5l3 2" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  Focus: (
    <>
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" strokeWidth="2" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
  Motivation: (
    <path
      d="M5 21l3-3m0 0l4-13 4 13m-8 0h8m-8 0a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  ),
  Relaxation: (
    <path
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  ),
};

const CategoryIcon: React.FC<Props> = ({ category, className }) => {
  const path = iconPaths[category] ?? (
    <circle cx="12" cy="12" r="4" strokeWidth="2" />
  );
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      {path}
    </svg>
  );
};

export default CategoryIcon;
