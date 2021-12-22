import React, { FC, ReactElement, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import NewArticle from "./components/newArticle";

const App: React.FC = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
      <NewArticle></NewArticle>
    </div>
  );
};

export default App;