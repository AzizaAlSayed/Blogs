import Home from "./components/HomePage/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import SignIn from "./components/login/singin";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/articles" element={<Home />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/login/f" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
