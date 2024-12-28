import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Portfolio from "./pages/Portfolio";
import Freelance from "./pages/Freelance";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/freelancing" element={<Freelance />} />
    </Routes>
  );
}

export default App;
