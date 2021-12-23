import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./components/ArticlePage/articles";
import Home from "./components/HomePage/home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/articles/Create-a-new-implementation-1"
        element={<Articles />}
      />
      <Route path="/articles" element={<Home />} />
    </Routes>
  );
};

export default App;
