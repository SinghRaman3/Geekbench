import { useState } from "react";

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
import Ram from "./components/ram/Ram.js";
import Monitor from "./components/monitor/Monitor.js";

//Productivity
import Build from "./components/build/Build.js";
import Compare from "./components/compare/Compare.js";
import Ai from "./components/ai/Ai.js";
import Footer from "./components/footer/Footer.js";
import Login from "./components/auth/Loginform.js";
import Privroute from "./privateRoute/Privroute.js";
import Signup from "./components/auth/Signupform.js";
import { Usercontext } from "./UserContext.js";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <div className="App">
      <Usercontext.Provider value={{ isSignedIn, setIsSignedIn }}>
        <Privroute>
          <Navbar />
          <Topnav />
        </Privroute>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />

          {/* Component Routes */}
          <Route path="/cpu" element={<Cpu />} />
          <Route path="/gpu" element={<Gpu />} />
          <Route path="/ssd" element={<Ssd />} />
          <Route path="/hdd" element={<Hdd />} />
          <Route path="/ram" element={<Ram />} />
          <Route path="/monitor" element={<Monitor />} />

          {/* Productivity routes */}
          <Route path="/build" element={<Build />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/geekbenchAi" element={<Ai />} />
        </Routes>

        <Privroute>
          <Footer />
        </Privroute>
      </Usercontext.Provider>
    </div>
  );
}

export default App;
