import { Routes, Route } from "react-router-dom";
import "./App.css";


import Navbar from "./components/Navbar/Navbar";
import Topnav from "./components/topnav/Topnav";
import Home from "./components/Home/Home";

//components
import Cpu from "./components/cpu/cpu.js";
import Gpu from "./components/gpu/Gpu";
import Ssd from "./components/ssd/Ssd";
import Hdd from "./components/hdd/Hdd";
import Monitor from "./components/monitor/Monitor.js";


//Productivity
import Build from "./components/build/Build.js"
import Compare from "./components/compare/Compare.js"
import Suggest from "./components/suggest/Suggest.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Topnav/>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Component Routes */}
        <Route path="/cpu" element={<Cpu/>}/>
        <Route path="/gpu" element={<Gpu/>}/>
        <Route path="/ssd" element={<Ssd/>}/>
        <Route path="/hdd" element={<Hdd/>}/>
        <Route path="/monitor" element={<Monitor/>}/>

        {/* Productivity routes */}
        <Route path="/build" element={<Build/>}/>
        <Route path="/compare" element={<Compare/>}/>
        <Route path="/suggest" element={<Suggest/>}/>
      </Routes>
    </div>
  );
}

export default App;
