import {
  HStack,
  Text,
  Flex,
  Box,
  Image,
  Button,
  Badge,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import NavigationMenu from "./NavigationMenu";
import ConnectionButton from "./ConnectionButton";
import InscriptionButton from "./InscriptionButton";
import { connectedUser } from "../../constant";
import { FaUser } from "react-icons/fa"; // Importing FaUser from react-icons

const NavBar = () => {
  console.log("L'utilisateur connecté est", connectedUser);

  const disconnect = () => {
    localStorage.removeItem("users");
    window.location.reload();
  };

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
            <Box fontSize={30}>Citizen Connect</Box>
          </HStack>
        </Link>
      </Box>
      <Flex flex="1" justifyContent="center" p={2}>
        <NavigationMenu />
      </Flex>
      {connectedUser === null ? (
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
      ) : (
        <HStack spacing={2} align="center">
          <Badge colorScheme="green" display="flex" alignItems="center">
            <FaUser size="24px" /> {/* Enlarging the icon */}
          </Badge>
          <Button onClick={disconnect}>Disconnect</Button>
        </HStack>
      )}
    </HStack>
  );
};

export default NavBar;
