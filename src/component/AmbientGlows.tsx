import React from "react";

const AmbientGlows: React.FC = () => {
  return (
    <div className="ambient-glows" aria-hidden>
      <span
        className="ag"
        style={{
          background: "var(--color-action)",
          width: 420,
          height: 420,
          top: "-10%",
          left: "-10%",
        }}
      />
      <span
        className="ag"
        style={{
          background: "var(--color-mind)",
          width: 360,
          height: 360,
          top: "30%",
          right: "-15%",
        }}
      />
      <span
        className="ag"
        style={{
          background: "var(--color-connection)",
          width: 320,
          height: 320,
          bottom: "-10%",
          left: "30%",
        }}
      />
    </div>
  );
};

export default AmbientGlows;
