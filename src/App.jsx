import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Side from "./components/Side";
import Trend from "./components/Trend";
function App() {
  return (
    <div className=" flex  ">
      <div className="h-screen shadow-xl border-r w-1/4 flex flex-col sticky inset-0 ">
        <Side/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Trend/>
    </div>
  );
}

export default App;
