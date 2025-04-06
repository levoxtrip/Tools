import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { tools } from "../data/tools";
import BackBtn from "../component/BackBtn";
const ToolsOverviewPage: React.FC = () => {
  const { toolsOverview } = useParams<{ toolsOverview: string }>();
  const filtered = tools.filter((tool) => tool.category === toolsOverview);

  return (
    <div>
      <h1>{toolsOverview}</h1>
      <BackBtn to={`/categories/`} text={"<"} />
      <div className="cat-view">
        {filtered.map((tool) => (
          <div className="card">
            <Link key={tool.id} to={`/categories/${toolsOverview}/${tool.id}`}>
              <h2>{tool.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsOverviewPage;
