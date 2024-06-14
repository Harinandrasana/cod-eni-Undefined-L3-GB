import { Box, Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <HStack spacing={4}>
      <Link to={"/"}>
        <Button bg="none">Accueil</Button>
      </Link>
      <Link to={"/about"}>
        <Button bg="none">A propos</Button>
      </Link>
      <Link to={"/services"}>
        <Button bg="none">Services</Button>
      </Link>
      <Link to={"/contact"}>
        <Button bg="none">Contact</Button>
      </Link>
      <Link to={"/help"}>
        <Button bg="none">aide</Button>
      </Link>
    </HStack>
  );
};

export default NavigationMenu;
