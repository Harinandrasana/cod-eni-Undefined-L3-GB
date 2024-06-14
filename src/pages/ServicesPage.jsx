import React from "react";
import Services from "../components/Services/Services";
import { Box, Center, Text } from "@chakra-ui/react";

const ServicesPage = () => {
  return (
    <div>
      <Center mt={10}>
        <Box mb={10}>
          <Text>Consulter la liste de nos services</Text>
        </Box>
      </Center>
      <Box>
        <Services />
      </Box>
    </div>
  );
};

export default ServicesPage;
