import Home from "./components/HomePage/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import SignUp from "./components/login/singup";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/articles" element={<Home />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/login/f" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
