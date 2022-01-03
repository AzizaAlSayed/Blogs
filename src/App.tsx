import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import Home from "./components/HomePage/Home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/:slug" element={<ArticlePage />} />
    </Routes>
  );  
};

export default App;
