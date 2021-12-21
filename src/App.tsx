import React, { FC, ReactElement } from "react";
import Home from "./components/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes><Route path="/articles" element={<Home />}></Route> </Routes> 
      </BrowserRouter>
    </div>
  );
};

export default App;
