import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/homePage/Home';
import styles from './App.module.sass'
import Login from './pages/authPage/Login';
import Registration from './pages/authPage/Registration';

const App = () => {
  return (
    <div className={styles.main}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
