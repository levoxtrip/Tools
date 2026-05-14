import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tools } from "../data/tools";
import { CategoryMeta } from "../data/CategoryMeta";
import { useStreak } from "../hooks/useStreak";

const formatTime = (sec: number): string => {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const FocusPage = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const navigate = useNavigate();
  const { markToday } = useStreak();

  const tool = tools.find((t) => t.id === toolId);
  const meta = tool ? CategoryMeta[tool.feeling] : undefined;

  const initialSeconds = Math.min((tool?.durationMinutes ?? 0) * 60, 600);
  const [secondsLeft, setSecondsLeft] = useState<number>(initialSeconds);
  const [running, setRunning] = useState<boolean>(true);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!running || secondsLeft <= 0) return;
    intervalRef.current = window.setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [running, secondsLeft]);

  if (!tool || !meta) {
    return <div className="page"><h1>We couldn't find that.</h1></div>;
  }

  const instruction =
    tool.description.split("\n").map((s) => s.trim()).filter(Boolean)[0] ?? tool.title;

  const handleDone = () => {
    markToday();
    navigate(`/categories/${tool.feeling}/${tool.id}/done`);
  };

  const handleClose = () => {
    navigate(`/categories/${tool.feeling}/${tool.id}`);
  };

  const totalSec = initialSeconds || 1;
  const radius = 62;
  const circ = 2 * Math.PI * radius;
  const dashoffset = initialSeconds > 0 ? circ * (1 - secondsLeft / totalSec) : 0;

  return (
    <div className="focus-screen" style={{ ["--cat-color" as string]: meta.accent }}>
      <span className="focus-glow-1" aria-hidden />
      <span className="focus-glow-2" aria-hidden />

      <button className="focus-close" onClick={handleClose} aria-label="Close">×</button>

      <div className="content-layer">
        <p className="focus-eyebrow">{tool.title} · {meta.label}</p>
        <p className="focus-instr">{instruction}</p>

        {initialSeconds > 0 && (
          <div className="relative" style={{ width: 160, height: 160 }}>
            <svg width="160" height="160" viewBox="0 0 160 160">
              <circle cx="80" cy="80" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3"/>
              <circle cx="80" cy="80" r={radius} fill="none" strokeWidth="3"
                strokeDasharray={circ} strokeDashoffset={dashoffset}
                strokeLinecap="round" transform="rotate(-90 80 80)"
                style={{ stroke: meta.accent, filter: `drop-shadow(0 0 6px ${meta.accent})`, transition: "stroke-dashoffset 1s linear" }}
              />
              <text x="80" y="78" textAnchor="middle" fill="#f5f5f7"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", fontSize: 38 }}>
                {formatTime(secondsLeft)}
              </text>
              <text x="80" y="100" textAnchor="middle" fill="rgba(245,245,247,0.5)"
                style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}>
                {secondsLeft > 0 ? "remaining" : "complete"}
              </text>
            </svg>
          </div>
        )}

        <div className="focus-actions">
          {initialSeconds > 0 && secondsLeft > 0 && (
            <button className="focus-btn focus-btn-secondary" onClick={() => setRunning(!running)}>
              {running ? "Pause" : "Resume"}
            </button>
          )}
          <button className="focus-btn focus-btn-primary" onClick={handleDone}>I did it ✓</button>
        </div>
      </div>
    </div>
  );
};

export default FocusPage;
