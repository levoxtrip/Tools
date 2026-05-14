import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import ToolsOverviewPage from "./pages/ToolsOverviewPage";
import ToolPage from "./pages/ToolPage";
import FocusPage from "./pages/FocusPage";
import DonePage from "./pages/DonePage";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/">
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
        <Route
          path="/categories/:toolsOverview/:toolId/focus"
          element={<FocusPage />}
        />
        <Route
          path="/categories/:toolsOverview/:toolId/done"
          element={<DonePage />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
