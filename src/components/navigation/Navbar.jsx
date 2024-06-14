import { HStack, Text, Flex, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import NavigationMenu from "./NavigationMenu";
import ConnectionButton from "./ConnectionButton";

const NavBar = () => {
  return (
    <HStack spacing={4} align="center">
      <Box pb={5}>
        <Link to="/">
          <Image
            src="/OIP.jpeg"
            alt="Logo"
            width={"auto"}
            objectFit="cover"
            height={111}
            paddingBottom={2}
          />
        </Link>
      </Box>
      <Flex flex="1" justifyContent="center" p={2}>
        <NavigationMenu />
      </Flex>
      <Box>
        <ConnectionButton />
      </Box>
    </HStack>
  );
};

export default NavBar;
