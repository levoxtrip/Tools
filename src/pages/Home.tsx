import React from "react";
import { Link } from "react-router-dom";
import { CategoryMeta } from "../data/CategoryMeta";
import AmbientGlows from "../component/AmbientGlows";

const greeting = () => {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
};

const Home: React.FC = () => {
  const feelings = Object.values(CategoryMeta);

  return (
    <>
      <AmbientGlows />
      <div className="page stack-lg">
        <header className="stack-sm">
          <p className="eyebrow">{greeting()}</p>
          <h1>
            What do you want
            <br />
            <span className="serif-italic">to do right now?</span>
          </h1>
          <p className="text-soft max-w-md">
            Pick an intention. We'll suggest one small thing.
          </p>
        </header>

        <section>
          <div className="feel-grid">
            {feelings.map((f) => (
              <Link
                key={f.feeling}
                to={`/categories/${f.feeling}`}
                className="feel-card"
                style={{ ["--cat-color" as string]: f.accent }}
              >
                <span className="corner-glow" aria-hidden />
                <div className="content-layer">
                  <span className="feel-label">I want to</span>
                  <div className="feel-name">{f.label}</div>
                  <div className="feel-hint">{f.hint}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
