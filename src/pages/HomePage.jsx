import React from "react";

import AboutBanner from "./AboutBanner";
import Home from "./Home";
import AboutPage from "./AboutPage";
import Services from "../components/Services/Services";
import ContactPage from "./ContactPage";
import HelpPage from "./HelpPage";
const HomePage = () => {
  return (
    <div>
      <Home />
      <AboutPage />
      <Services />
      <ContactPage />
      <HelpPage />
      {/* <AboutBanner /> */}
    </div>
  );
};

export default HomePage;
