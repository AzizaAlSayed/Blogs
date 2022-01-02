import Home from "./components/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/ProfilePage/Profile";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
