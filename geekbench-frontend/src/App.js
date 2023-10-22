import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Cpu from "./components/cpu/cpu.js";
import Monitor from "./components/monitor/Monitor.js";
import Gpu from "./components/gpu/Gpu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cpu" element={<Cpu/>}/>
        <Route path="/gpu" element={<Gpu/>}/>
        <Route path="/monitor" element={<Monitor/>}/>
      </Routes>
    </div>
  );
}

export default App;
