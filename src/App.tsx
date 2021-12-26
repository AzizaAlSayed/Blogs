import Home from "./components/HomePage/home";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/ProfilePage/profile";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/articles" element={<Home />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
