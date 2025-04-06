import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import ToolPage from "./pages/ToolPage";
import NotFound from "./pages/NotFound";
import "./App.css";
import ToolsOverviewPage from "./pages/ToolsOverviewPage";

function App() {
  return (
    <BrowserRouter basename="/Home">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />} />

        <Route
          path="/categories/:toolsOverview"
          element={<ToolsOverviewPage />}
        />
        <Route
          path="/categories/:toolsOverview/:toolId"
          element={<ToolPage />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
