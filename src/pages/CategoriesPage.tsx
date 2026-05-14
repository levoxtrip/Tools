import React from "react";
import { Link } from "react-router-dom";
import { CategoryMeta } from "../data/CategoryMeta";
import Breadcrumb from "../component/Breadcrumb";

const CategoriesPage: React.FC = () => {
  const categories = Object.entries(CategoryMeta);

  return (
    <div className="page stack-md">
      <Breadcrumb
        items={[{ to: "/", label: "Home" }, { label: "All practices" }]}
      />

      <header className="stack-sm">
        <h1>All practices</h1>
        <p className="text-soft max-w-md">
          Choose what you want to nurture today.
        </p>
      </header>

      <div className="feel-grid">
        {categories.map(([key, cat]) => (
          <Link
            key={key}
            to={`/categories/${key}`}
            className="feel-card"
            style={{ ["--cat-color" as string]: cat.accent }}
          >
            <span className="corner-glow" aria-hidden />
            <div className="content-layer">
              <span className="feel-label">For when you're</span>
              <div className="feel-name">{cat.feeling}</div>
              <div className="feel-hint">{cat.hint}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;