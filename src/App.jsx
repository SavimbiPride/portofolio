import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import PortofolioSatu from "./page/PortofolioSatu";
import PortofolioDua from "./page/PortofolioDua";
import Navbar from "./components/Navbar";

function AppContent() {
  const [lang, setLang] = useState("id");

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === "id" ? "en" : "id"));
  };

  return (
    <>
      <Navbar lang={lang} toggleLanguage={toggleLanguage} />
      
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