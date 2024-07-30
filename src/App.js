import React from "react";
import "./assets/scss/style.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "pages/LandingPages";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/properties/:propertyName" element={<DetailsPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
