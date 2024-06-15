import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  HStack,
  useColorModeValue,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavigationMenu = () => {
  const activeColor = useColorModeValue("red.500", "red.300");
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        spacing={4}
        borderBottom="2px solid #dfd7d6"
        display={{ base: "none", md: "flex" }}
      >
        <div className="menu">
          <NavLink
            to={"/"}
            activeColor={activeColor}
            currentPath={location.pathname}
          >
            Accueil
          </NavLink>
          <NavLink
            to={"/about"}
            activeColor={activeColor}
            currentPath={location.pathname}
          >
            A propos
          </NavLink>
          <NavLink
            to={"/services"}
            activeColor={activeColor}
            currentPath={location.pathname}
          >
            Services
          </NavLink>
          <NavLink
            to={"/contact"}
            activeColor={activeColor}
            currentPath={location.pathname}
          >
            Contact
          </NavLink>
          <NavLink
            to={"/help"}
            activeColor={activeColor}
            currentPath={location.pathname}
          >
            Aide
          </NavLink>
        </div>
      </HStack>

      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign={"center"}>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <NavLink
                to={"/"}
                activeColor={activeColor}
                currentPath={location.pathname}
                onClick={onClose}
              >
                Accueil
              </NavLink>
              <NavLink
                to={"/about"}
                activeColor={activeColor}
                currentPath={location.pathname}
                onClick={onClose}
              >
                A propos
              </NavLink>
              <NavLink
                to={"/services"}
                activeColor={activeColor}
                currentPath={location.pathname}
                onClick={onClose}
              >
                Services
              </NavLink>
              <NavLink
                to={"/contact"}
                activeColor={activeColor}
                currentPath={location.pathname}
                onClick={onClose}
              >
                Contact
              </NavLink>
              <NavLink
                to={"/help"}
                activeColor={activeColor}
                currentPath={location.pathname}
                onClick={onClose}
              >
                Aide
              </NavLink>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Fermer
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const NavLink = ({ to, children, activeColor, currentPath, onClick }) => {
  const isActive = currentPath === to;

  return (
    <Link to={to} style={{ textDecoration: "none" }} onClick={onClick}>
      <Button
        bg="none"
        fontSize="lg"
        _hover={{ bg: "none", color: activeColor }}
        color={isActive ? activeColor : "inherit"}
        borderBottom={isActive ? `2px solid ${activeColor}` : "none"}
        borderColor={isActive ? activeColor : "transparent"}
        fontWeight={isActive ? "bold" : "normal"}
        paddingX={2}
        paddingY={1}
      >
        {children}
      </Button>
    </Link>
  );
};

export default NavigationMenu;
