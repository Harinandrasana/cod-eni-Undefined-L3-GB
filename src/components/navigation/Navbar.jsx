import { HStack, Text, Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import NavigationMenu from "./NavigationMenu";

const NavBar = () => {
  return (
    <HStack p={2}>
      <Box>
        <Link to="/">logo</Link>
      </Box>
      <Box ml={"auto"} mr={"auto"}>
        <NavigationMenu />
      </Box>
      <Box>connection</Box>
    </HStack>
  );
};

export default NavBar;
