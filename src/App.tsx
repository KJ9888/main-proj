import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MonumentsPage from "./pages/MonumentsPage";
import ManuscriptsPage from "./pages/ManuscriptsPage";
import DancePage from "./pages/DancePage";
import CulturePage from "./pages/CulturePage";
import StatesPage from "./pages/StatesPage";
import StateDetailPage from "./pages/StateDetailPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/monuments" element={<MonumentsPage />} />
      <Route path="/manuscripts" element={<ManuscriptsPage />} />
      <Route path="/dance" element={<DancePage />} />
      <Route path="/culture" element={<CulturePage />} />
      <Route path="/states" element={<StatesPage />} />
      <Route path="/states/:stateId" element={<StateDetailPage />} />
      {/* you can add more routes here */}
    </Routes>
  );
};

export default App;
