import React, { FC, ReactElement, useEffect, useState } from "react";
import Home from "./components/HomePage/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ArticleProps } from "./components/HomePage/article";
import axios from "axios";
import Profile from "./components/ProfilePage/profile";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/articles" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
