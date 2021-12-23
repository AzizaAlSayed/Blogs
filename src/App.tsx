import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./components/ArticlePage/articles";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <Articles ></Articles>
    </div>
  );
};

export default App;
