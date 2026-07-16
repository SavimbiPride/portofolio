import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import PortofolioSatu from "./page/PortofolioSatu";
import PortofolioDua from "./page/PortofolioDua";
import Navbar from "./components/Navbar";

function AppContent() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('app_language') || 'id';
  });

  useEffect(() => {
    localStorage.setItem('app_language', lang);
  }, [lang]);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
    
      <Routes>
        <Route path="/" element={<PortofolioSatu lang={lang} />} />
        <Route path="/FPE_style" element={<PortofolioDua lang={lang} />} />
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