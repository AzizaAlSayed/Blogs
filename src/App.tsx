import React, { FC, ReactElement, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Articles from "./component/articles";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <Articles ></Articles>
    </div>
  );
};

export default App;
