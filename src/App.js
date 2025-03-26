import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import TimeSelector from "./components/TimeForm";
import Footer from "./components/Footer";
import LegalLinks from "./components/LegalLinks";
import Form from "./components/Form";
import SummaryPage from "./components/SummaryPage";

const App = () => {
  return (
    <Router>
      {" "}
      <div className="flex flex-col min-h-screen justify-between text-gray-900">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center px-4">
          <Routes>
            <Route path="/" element={<TimeSelector />} />
            <Route path="/form" element={<Form />} />{" "}
            <Route path="/summary" element={<SummaryPage />} />
          </Routes>
        </main>
        <LegalLinks />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
