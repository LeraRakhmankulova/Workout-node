import Login from "./pages/authPage/Login";
import Registration from "./pages/authPage/Registration";
import Home from "./pages/homePage/Home";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Registration />} />
      </Routes>
    </Router>
  );
};

export default App;
