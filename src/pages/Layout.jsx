import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/navigation/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box>
      <Grid
        templateAreas={{
          base: `"header header"
                  "main main"
                  "footer footer"`,
          md: `"header header"
                  "main main"
                  "footer footer"`,
          xl: `"header header"
                  "main main"
                  "footer footer"`,
          lg: `"header header"
                  "main main"
                  "footer footer"`,
        }}
        gridTemplateRows={"65px 1fr 30px"}
        gridTemplateColumns={"120px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem
          p={2}
          h={82}
          verticalAlign="middle"
          bg="gray"
          area={"header"}
          position="fixed"
          width={"full"}
          zIndex={3}
        >
          <NavBar />
        </GridItem>
        <GridItem
          alignItems={"center"}
          mr={0}
          p={2}
          ml={-2}
          rounded={21}
          area={"main"}
        >
          <Outlet />
        </GridItem>
        <GridItem
          alignItems={"center"}
          mr={2}
          p={2}
          rounded={21}
          area={"footer"}
        >
          footer
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Layout;
