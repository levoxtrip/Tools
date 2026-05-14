import { useNavigate, useParams, Link } from "react-router-dom";
import { tools } from "../data/tools";
import { CategoryMeta } from "../data/CategoryMeta";
import { useStreak } from "../hooks/useStreak";
import StartButton from "../component/StartButton";

const DonePage = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const navigate = useNavigate();
  const { week, weekCount } = useStreak();

  const tool = tools.find((t) => t.id === toolId);
  const meta = tool ? CategoryMeta[tool.feeling] : undefined;

  const handleAnother = () => {
    if (tool) navigate(`/categories/${tool.feeling}`);
    else navigate("/");
  };

  const message =
    weekCount === 1
      ? "First one this week. The rest get easier."
      : weekCount <= 3
      ? `${weekCount} days this week. Small steps add up.`
      : `${weekCount} days this week. You're building something.`;

  return (
    <div className="page" style={{ ["--cat-color" as string]: meta?.accent ?? "var(--color-ink)" }}>
      <div className="done-screen">
        <span className="done-glow" aria-hidden />
        <div className="done-content">
          <div className="done-check" aria-hidden>✓</div>
          <p className="eyebrow" style={{ color: meta?.accent }}>Action taken</p>
          <h1 className="mt-3">Nice. <span className="serif-italic">That counts.</span></h1>
          <p className="text-soft mt-4 max-w-xs mx-auto">{message}</p>

          <div className="streak-row" aria-label={`${weekCount} of 7 days this week`}>
            {week.map((done, i) => (
              <span key={i} className={`streak-dot ${done ? "on" : ""}`} aria-hidden />
            ))}
          </div>

          <div className="flex gap-3 justify-center">
            <Link to="/" className="start-btn start-btn-ghost">Home</Link>
            <StartButton onClick={handleAnother} text="One more" glowing />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonePage;
