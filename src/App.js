import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import CreateCrewmate from "./pages/CreateCrewmate";
import CrewmateGallery from "./pages/CrewmateGallery";
import CrewmateDetail from "./pages/CrewmateDetail";
import EditCrewmate from "./pages/EditCrewmate";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateCrewmate />} />
            <Route path="/gallery" element={<CrewmateGallery />} />
            <Route path="/detail/:id" element={<CrewmateDetail />} />
            <Route path="/edit/:id" element={<EditCrewmate />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
