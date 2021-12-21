import React, { FC, ReactElement, useEffect, useState } from "react";
import Home from "./components/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ArticleProps } from "./components/article";
import axios from "axios";

const App: React.FC = () => {
  const [articles, setArticles] = useState<ArticleProps[]>([]);

  useEffect(() => {
    axios
      .get<ArticleProps[]>("https://api.realworld.io/api/articles")
      .then((response) => {
        setArticles(response.data);
      });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/articles" element={<Home ArticleList={articles} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
