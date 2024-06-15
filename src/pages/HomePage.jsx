import React from "react";

import AboutBanner from "./AboutBanner";
import Home from "./Home";
import AboutPage from "./AboutPage";
import Services from "../components/Services/Services";
import ContactPage from "./ContactPage";
import HelpPage from "./HelpPage";
import Publicitaire from "./Publicitaire";
import Accueil from "./Accueil";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div>
      {/* <Accueil/> */}
      <Home />
      <motion.div
        variants={fadeIn("up", 1)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h1"
      >
        <Publicitaire />
      </motion.div>
      <AboutPage />
      <Services />
      <motion.div
        variants={fadeIn("up", 1)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h1"
      >
        <ContactPage />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 1)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h1"
      >
        <HelpPage />
      </motion.div>
      {/* <AboutBanner /> */}
    </div>
  );
};

export default HomePage;
