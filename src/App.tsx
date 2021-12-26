import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./components/ArticlePage/articles";
import Home from "./components/HomePage/home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/articles" element={<Home />} />
      <Route path="/articles/:slug/comments" element={<Articles />} />
    </Routes>
  );
};

export default App;
