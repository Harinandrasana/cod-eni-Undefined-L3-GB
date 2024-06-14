import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, HStack, useColorModeValue } from "@chakra-ui/react";

const NavigationMenu = () => {
  const activeColor = useColorModeValue("red.500", "red.300");
  const location = useLocation();

  return (
    <HStack spacing={4} borderBottom="2px solid #dfd7d6">
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
  );
};

const NavLink = ({ to, children, activeColor, currentPath }) => {
  const isActive = currentPath === to;

  return (
    <Link to={to} style={{ textDecoration: "none" }}>
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
