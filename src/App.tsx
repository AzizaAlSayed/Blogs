import Articles from "./component/articles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CommentProps } from "./component/comment";
import axios from "axios";
import React, { FC, ReactElement, useEffect, useState } from "react";
import Home from "./components/home";
import { ArticleProps } from "./components/article";

const App: React.FC = () => {
  const [comments, setComments] = useState<CommentProps[]>([]);

  useEffect(() => {
    axios
      .get<CommentProps[]>(
        "https://api.realworld.io/api/articles/{slug}/comments"
      )
      .then((response) => {
        setComments(response.data);
      });
  }, []);

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/aticles/{slug}/comments"
            element={<Articles commentLists={comments} />}
          />
                    <Route path="/articles" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
