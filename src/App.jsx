import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
        <Route path="/portofolio" element={<PortofolioSatu />} />
        <Route path="*" element={<Navigate to="/" replace />} />
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