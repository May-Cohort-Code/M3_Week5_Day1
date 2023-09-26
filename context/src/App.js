 
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import { useState } from "react";
 
function App() {
  // const [theme,setTheme] = useState('light')
  return (
    <div className={`App `}>
      <Navbar />
 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}
 
export default App;