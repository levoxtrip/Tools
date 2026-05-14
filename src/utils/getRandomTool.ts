import { ToolDataT } from "../data/ToolDataT";

export const getRandomTool = (tools: ToolDataT[]): ToolDataT => {
  const index = Math.floor(Math.random() * tools.length);
  return tools[index];
};
