import React, { FC, ReactElement, useEffect, useState } from "react";
import Home from "./components/HomePage/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ArticleProps } from "./components/HomePage/article";
import axios from "axios";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/articles" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
