import React from "react";
import { Route,Routes  } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import Experience from "./routes/Experience";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/experience" element={<Experience />}/>
      <Route path="/project" element={<Project />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    </>
  );
}

export default App;
