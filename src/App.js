import React from "react";
import  "./assets/scss/style.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from "pages/LandingPages";
import DetailsPage from "pages/DetailsPage";
import ExampleNumber from "pages/ExampleNumber";
import ExampleDate from "pages/ExampleDate";
import Checkout from "pages/Checkout";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/properties/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/exampleNum" element={<ExampleNumber />} />
          <Route path="/exampleDate" element={<ExampleDate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
