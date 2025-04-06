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
          <Link
            key={category}
            to={`/categories/${category}`}
            className="card block" // add block to ensure full clickable area
          >
            <div>
              <h2>{category}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
