import React from "react";
import { tools } from "../data/tools";
import { Link } from "react-router-dom";

const CategoriesPage: React.FC = () => {
  const allCategories = Array.from(
    new Set(tools.flatMap((tool) => tool.category))
  );

  return (
    <div>
      <div className="cat-view">
        {allCategories.map((category) => (
          <div className="card">
            <Link key={category} to={`/categories/${category}`}>
              <h2>{category}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
