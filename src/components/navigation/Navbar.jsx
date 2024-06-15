import {
  HStack,
  Text,
  Flex,
  Box,
  Image,
  Button,
  Badge,
  Avatar,
  useColorModeValue,
  Stack,
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
  const ProfileAvatar = ({ src, name, title }) => {
    return (
      <Flex align={"center"} mt={8} direction={"column"}>
        <Avatar src={src} mb={2} />
        <Stack spacing={-1} align={"center"}>
          <Text fontWeight={600}>{name}</Text>
          <Text
            fontSize={"xs"}
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {title}
          </Text>
        </Stack>
      </Flex>
    );
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
              height={24}
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
          <ProfileAvatar
            src={
              "https://img.freepik.com/photos-gratuite/portrait-homme-sensible_23-2149444507.jpg?t=st=1718427102~exp=1718430702~hmac=e71dd5c0aaa1f513b7a5e5fa1b666f7b8461528a7e02706e96e6a4906989a645&w=1380"
            }
            name={connectedUser}
          ></ProfileAvatar>
          <Button onClick={disconnect}>Disconnect</Button>
        </HStack>
      )}
    </HStack>
  );
};

export default NavBar;
