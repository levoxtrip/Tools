import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tools } from "../data/tools";
import { InformationData } from "../data/informations";
import { CategoryMeta } from "../data/CategoryMeta";
import Breadcrumb from "../component/Breadcrumb";
import StartButton from "../component/StartButton";

const ToolPage = () => {
  const { toolId, toolsOverview } = useParams<{
    toolId: string;
    toolsOverview: string;
  }>();
  const navigate = useNavigate();
  const [showWhy, setShowWhy] = useState<boolean>(false);

  const tool = tools.find((t) => t.id === toolId);

  if (!tool) {
    return (
      <div className="page stack-md">
        <Breadcrumb items={[{ to: "/", label: "Home" }, { label: "Not found" }]} />
        <h1>We couldn't find that.</h1>
      </div>
    );
  }

  const info = InformationData[tool.information];
  const meta = CategoryMeta[tool.feeling];

  const handleBegin = () => {
    navigate(`/categories/${tool.feeling}/${tool.id}/focus`);
  };

  return (
    <div
      className="page stack-md"
      style={{ ["--cat-color" as string]: meta?.accent ?? "var(--color-ink)" }}
    >
      <Breadcrumb
        items={[
          { to: "/", label: "Home" },
          { to: `/categories/${toolsOverview}`, label: meta?.label ?? tool.feeling },
          { label: tool.title },
        ]}
      />

      <article>
        <p className="eyebrow" style={{ color: meta?.accent }}>
          {tool.durationMinutes ?? "—"} minutes · {tool.category}
        </p>
        <h1 className="mt-3">{tool.title}</h1>

        <p className="whitespace-pre-line mt-6 max-w-xl text-lg leading-relaxed">
          {tool.description}
        </p>

        <div className="mt-8 flex items-center gap-4 flex-wrap">
          <StartButton onClick={handleBegin} text="Begin" size="lg" glowing />
          {info && (
            <button
              type="button"
              className="info-link"
              onClick={() => setShowWhy(!showWhy)}
              aria-expanded={showWhy}
            >
              {showWhy ? "Hide why this matters" : "Why this matters"}
            </button>
          )}
        </div>

        {info && showWhy && (
          <aside className="why-drawer">
            <p className="why-eyebrow">Why this matters</p>
            <p className="whitespace-pre-line text-sm leading-relaxed text-soft">
              {info.content}
            </p>
          </aside>
        )}
      </article>
    </div>
  );
};

export default ToolPage;
