import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import Features from "./Features";
import Team from "./Team";
import Faq from "./Faq";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Banner />
            <About />
            <Features />
            <Team />
            <Faq />
            <ContactUs />
            <Footer />
          </>
        } />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
