import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { tools } from "../data/tools";
import { CategoryMeta } from "../data/CategoryMeta";
import Breadcrumb from "../component/Breadcrumb";
import StartButton from "../component/StartButton";

const ToolsOverviewPage: React.FC = () => {
  const { toolsOverview } = useParams<{ toolsOverview: string }>();
  const navigate = useNavigate();
  const feeling = toolsOverview ?? "";
  const meta = CategoryMeta[feeling];

  const filtered = tools.filter((t) => t.feeling === feeling);

  if (!meta || filtered.length === 0) {
    return (
      <div className="page stack-md">
        <Breadcrumb items={[{ to: "/", label: "Home" }, { label: "Unknown" }]} />
        <h1>We couldn't find that.</h1>
      </div>
    );
  }

  // Group by category within this feeling
  const byCategory = filtered.reduce<Record<string, typeof filtered>>((acc, t) => {
    (acc[t.category] ||= []).push(t);
    return acc;
  }, {});

  // Sort each group by duration
  Object.values(byCategory).forEach((arr) =>
    arr.sort((a, b) => (a.durationMinutes ?? 999) - (b.durationMinutes ?? 999))
  );

  const handleStart = (toolId: string) => {
    navigate(`/categories/${feeling}/${toolId}`);
  };

  let quickestSeen = false;

  return (
    <div
      className="page stack-md"
      style={{ ["--cat-color" as string]: meta.accent }}
    >
      <Breadcrumb items={[{ to: "/", label: "Home" }, { label: meta.label }]} />

      <section className="cat-hero">
        <div className="glow-bg" aria-hidden>
          <span className="hero-glow" />
        </div>
        <div className="content-layer">
          <p className="cat-eyebrow">I want to {meta.label}</p>
          <h1>{meta.tagline}</h1>
          <p className="text-soft mt-4 max-w-md">
            {filtered.length} practices across {Object.keys(byCategory).length} areas.
          </p>
        </div>
      </section>

      {Object.entries(byCategory).map(([category, items]) => (
        <section key={category} className="stack-sm">
          <h2 className="serif-italic" style={{ marginTop: "1rem" }}>{category}</h2>
          {items.map((tool) => {
            const isQuickest = !quickestSeen;
            if (isQuickest) quickestSeen = true;
            const preview = tool.description
              .split("\n")
              .map((s) => s.trim())
              .filter(Boolean)[0];

            return (
              <article
                key={tool.id}
                className="tool-card"
                style={{ ["--cat-color" as string]: meta.accent }}
              >
                <div className="tool-row">
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p className="tool-meta">
                      <span>{tool.durationMinutes ?? "—"} min</span>
                      {isQuickest && <span className="tool-pill">Quickest</span>}
                    </p>
                    <h3>{tool.title}</h3>
                    {preview && <p className="text-soft text-sm mt-2">{preview}</p>}
                  </div>
                  <StartButton
                    onClick={() => handleStart(tool.id)}
                    text="Start"
                    glowing={isQuickest}
                  />
                </div>
              </article>
            );
          })}
        </section>
      ))}

      <footer className="text-center pt-4">
        <Link to="/" className="btn-ghost">
          <span aria-hidden>←</span> Back home
        </Link>
      </footer>
    </div>
  );
};

export default ToolsOverviewPage;
