import { useState } from "react";
import { tools } from "../data/tools";
import { useParams } from "react-router";
import BackBtn from "../component/BackBtn";
import { InformationData } from "../data/informations";
import InfoBtn from "../component/InfoBtn";
const ToolPage = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const [showTool, setShowTool] = useState<Boolean>(true);
  const tool = tools.find((tool) => tool.id === toolId);

  const handleInfoBtnClicked = () => {
    setShowTool(!showTool);
  };
  if (!tool) {
    // Handle the case where tool is undefined
    return <div>Tool not found</div>; // or some other fallback UI
  }
  const info = InformationData[tool.information];
  return (
    <div>
      <BackBtn to={`/categories/${tool.category}`} text={"Back"} />
      <div className="card">
        {info && <InfoBtn onToogleShowTool={handleInfoBtnClicked} />}

        {tool && showTool && (
          <>
            <h1>{tool.title}</h1>
            <p className="whitespace-pre-line">{tool.description}</p>
          </>
        )}
        {info && !showTool && (
          <>
            <h1>{info.title}</h1>
            <p className="whitespace-pre-line">{info.content}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ToolPage;
