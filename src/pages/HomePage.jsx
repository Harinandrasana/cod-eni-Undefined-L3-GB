import React from "react";

import AboutBanner from "./AboutBanner";
import Home from "./Home";
import AboutPage from "./AboutPage";
import Services from "../components/Services/Services";
import ContactPage from "./ContactPage";
import HelpPage from "./HelpPage";
import Publicitaire from "./Publicitaire";
const HomePage = () => {
  return (
    <div>
      <Home />
      <Publicitaire/>
      <AboutPage />
      <Services />
      <ContactPage />
      <HelpPage />
      {/* <AboutBanner /> */}
    </div>
  );
};

export default HomePage;
