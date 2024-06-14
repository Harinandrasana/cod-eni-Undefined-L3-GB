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
        {/* <Image
            src="/OIP.jpeg"
            alt="Logo"
            width={"auto"}
            objectFit="cover"
<<<<<<< HEAD
            height={55}
          /> */}
          
          <Box 
          fontSize={30}>
            Citezen Connect
          </Box>
=======
            height={111}
            paddingBottom={2}
          />
>>>>>>> d9982495700b43cd0e9ed91c2ca33d312f87822c
        </Link>
      </Box>
      <Flex flex="1" justifyContent="center" p={2}>
        <NavigationMenu />
      </Flex>
      <Box>

        <Link to="/LoginForm">

        <ConnectionButton />
        </Link>
        <Link to="/SignupForm">
        <InscriptionButton/>
        </Link>

      </Box>
    </HStack>
  );
};

export default NavBar;
