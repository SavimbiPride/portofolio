import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PortofolioSatu from "./page/PortofolioSatu";
import PortofolioDua from "./page/PortofolioDua";
import Navbar from "./components/Navbar";

function AppContent() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PortofolioSatu />} />
        <Route path="/FPE_style" element={<PortofolioDua />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;