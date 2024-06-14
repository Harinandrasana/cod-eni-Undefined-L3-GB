import { HStack, Text, Flex, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import NavigationMenu from "./NavigationMenu";
import ConnectionButton from "./ConnectionButton";
import InscriptionButton from "./InscriptionButton";

const NavBar = () => {
  return (
    <HStack spacing={4} align="center">
      <Box pb={5}>
        <Link to="/">
          <HStack>
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={"auto"}
              objectFit="cover"
              height={55}
            />
            <Box fontSize={30}>Citezen Connect</Box>
          </HStack>
        </Link>
      </Box>
      <Flex flex="1" justifyContent="center" p={2}>
        <NavigationMenu />
      </Flex>
      <Box>
        <HStack>
          <Link to="/LoginForm">
            <ConnectionButton />
          </Link>
          <Link to="/SignupForm">
            <InscriptionButton />
          </Link>
        </HStack>
      </Box>
    </HStack>
  );
};

export default NavBar;
