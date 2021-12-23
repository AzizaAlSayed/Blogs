import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./components/ArticlePage/articles";
import Home from "./components/HomePage/home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/articles/{slug}/comments" element={<Articles />} />
        <Route path="/articles" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
