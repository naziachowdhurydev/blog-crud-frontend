import BannerDashBoard from "../src/pages/BannerDashBoard.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import React from "react";

const ruotes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<BannerDashBoard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default ruotes;
