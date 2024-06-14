import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, HStack, useColorModeValue } from "@chakra-ui/react";
import "./nav.css";

const NavigationMenu = () => {
  const activeColor = useColorModeValue("red.500", "red.300");

  return (
    <HStack spacing={4} borderBottom="2px solid #dfd7d6">
      <div className="menu">
        <Link to={"/"}>
          <Button bg="none" fontSize="lg">
            Accueil
          </Button>
        </Link>
        <Link to={"/about"}>
          <Button bg="none" fontSize="lg">
            A propos
          </Button>
        </Link>
        <Link to={"/services"}>
          <Button bg="none" fontSize="lg">
            Services
          </Button>
        </Link>
        <Link to={"/contact"}>
          <Button bg="none" fontSize="lg">
            Contact
          </Button>
        </Link>
        <Link to={"/help"}>
          <Button bg="none" fontSize="lg">
            Aide
          </Button>
        </Link>
      </div>
    </HStack>
  );
};

export default NavigationMenu;
