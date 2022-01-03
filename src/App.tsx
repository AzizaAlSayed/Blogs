import React, { FC, ReactElement, useEffect, useState } from "react";
import Home from "./components/HomePage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ArticleProps } from "./components/HomePage/Article";
import axios from "axios";
import SignUp from "./components/Auth/Registration";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/articles" element={<Home />} />
          <Route path="/users" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
