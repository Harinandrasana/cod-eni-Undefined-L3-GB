import { Stack, Center, HStack, Box } from "@chakra-ui/react";
import React from "react";
import CardService from "./CardService";
import { services } from "../../data/serviceData";

const Services = () => {
  return (
    <Stack spacing={4} maxH={800} mb={20} overflow={"auto"} px={20}>
      {services.map((service) => (
        <Center key={service.id}>
          <HStack spacing={10}>
            <Box>
              <CardService text={service.name} index={service.id} />
            </Box>
            <Box>
              <CardService text={service.name} index={service.id} />
            </Box>
            <Box>
              <CardService text={service.name} index={service.id} />
            </Box>
          </HStack>
        </Center>
      ))}
    </Stack>
  );
};

export default Services;
