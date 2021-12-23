import React, { Fragment, useEffect, useState } from "react";
import Articles from "./component/articles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CommentProps } from "./component/comment";
import axios from "axios";

const App: React.FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/articles/{slug}/comments" element={<Articles />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
