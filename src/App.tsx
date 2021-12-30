import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./components/ArticlePage/ArticlePage";
import Home from "./components/HomePage/Home";


const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/articles/:slug"
        element={<Articles />}
      />
      <Route path="/articles" element={<Home />} />
    </Routes>
  );
};

export default App;
