// src/App.tsx

import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MonumentsPage from "./pages/MonumentsPage";
import Stories from "./pages/Stories.js";
import DancePage from "./pages/DancePage";

import StatesPage from "./pages/StatesPage";


// Naye Monument Detail Pages ko import karein
import RedFortPageDynamic from "./pages/RedFortPageDynamic";
import QutubMinar from "./pages/QutubMinar.jsx"; // Agar ye file aapne banayi hai
import TajMahalPage from "./pages/TajMahalPage";
import HawaMahalPage from "./pages/HawaMahalPage.js";
import IndiaGatePage from "./pages/IndiaGatePage.js";
import GatewayOfIndiaPage from "./pages/GatewayOfIndiaPage.js";
import AjantaCavesPage from "./pages/AjantaCavesPage.js";
import CharminarPage from "./pages/CharminarPage.js";
import KonarkSunTemplePage from "./pages/KonarkSunTemplePage.js";
import SambhajiMaharajPage from "./pages/SambhajiMaharajPage.js"; // Naya import
import AshokaPage from "./pages/AshokaPage.js";
import KhalsaBirthPage from "./pages/KhalsaBirthPage.js";
import MaharanaPratapPage from "./pages/MaharanaPratapPage.js";
import PunjabPage from "./pages/PunjabPage"; // PunjabPage ko import karein
import DelhiPage from "./pages/DelhiPage"; // DelhiPage ko import karein

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/monuments" element={<MonumentsPage />} />
      
      {/* Har monument detail page ke liye dedicated route */}
      <Route path="/monuments/red-fort" element={<RedFortPageDynamic />} />
      <Route path='/monuments/qutub-minar' element={<QutubMinar />} />
      <Route path='/monuments/taj-mahal' element={<TajMahalPage />} />
      <Route path='/monuments/hawa-mahal' element={<HawaMahalPage />} />
      <Route path='/monuments/india-gate' element={<IndiaGatePage />} />
      <Route path='/monuments/gateway-of-india' element={<GatewayOfIndiaPage />} />
      <Route path='/monuments/charminar' element={<CharminarPage />} />
      <Route path='/monuments/ajanta-caves' element={<AjantaCavesPage />} />
      <Route path='/monuments/konark-sun-temple' element={<KonarkSunTemplePage />} />
      <Route path='/stories/ashoka-the-great' element={<AshokaPage />} />
      <Route path='/stories/sambhaji-maharaj' element={<SambhajiMaharajPage />} />
      <Route path='/stories/khalsa-birth' element={<KhalsaBirthPage />} />
      <Route path='/stories/maharana-pratap' element={<MaharanaPratapPage />} />
      <Route path="/states/punjab" element={<PunjabPage />} /> {/* PunjabPage ke liye route */}
      <Route path="/union-territories/delhi" element={<DelhiPage />} />

      {/* Baaki routes */}
      <Route path="/stories" element={<Stories />} />
      <Route path="/dance" element={<DancePage />} />
      
      <Route path="/states" element={<StatesPage />} />
      
    </Routes>
  );
};

export default App;