import React from "react";
import Services from "../components/Services/Services";
import { Box, Center, Text } from "@chakra-ui/react";

const ServicesPage = () => {
  return (
    <div>
      <Center mt={10}>
        <Box
          width={"90%"}
          textAlign={"center"}
          mb={10}
          p={20}
          bg={"#a6d6ce"}
          borderRadius={5}
        >
          <Text fontSize={40} color="#00024d" display="inline">
            Consulter la liste de nos services
          </Text>
        </Box>
      </Center>
      <Box>
        <Services />
      </Box>
    </div>
  );
};

export default ServicesPage;
