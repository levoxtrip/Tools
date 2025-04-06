import React from "react";
import { useParams, Link } from "react-router-dom";
import { tools } from "../data/tools";
import BackBtn from "../component/BackBtn";

const ToolsOverviewPage: React.FC = () => {
  const { toolsOverview } = useParams<{ toolsOverview: string }>();
  const filtered = tools.filter((tool) => tool.category === toolsOverview);

  return (
    <div>
      <h1>{toolsOverview}</h1>
      <BackBtn to={`/categories/`} text={"Back"} />

      <div className="cat-view">
        {filtered.map((tool) => (
          <Link
            key={tool.id}
            to={`/categories/${toolsOverview}/${tool.id}`}
            className="card"
          >
            <div>
              <h2>{tool.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ToolsOverviewPage;
