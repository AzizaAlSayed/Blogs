import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewArticle from "./components/newArticle";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/articles" element={<NewArticle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
