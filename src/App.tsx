import { BrowserRouter as Router, Routes, Route } from "react-router";
import BannerDashBoard from "../src/pages/BannerDashBoard.jsx";
import HomePage from "../src/pages/HomePage.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<BannerDashBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
