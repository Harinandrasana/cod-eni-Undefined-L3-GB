import { Stack, Center, Box, SimpleGrid, HStack } from "@chakra-ui/react";
import React from "react";
import CardService from "./CardService";
import { services } from "../../data/serviceData";
import ServiceDescription from "./ServiceDescription";

const Services = () => {
  // Diviser les services en groupes de trois
  const groupedServices = [];
  for (let i = 0; i < services.length; i += 3) {
    groupedServices.push(services.slice(i, i + 3));
  }

  return (
    <Stack spacing={4} px={20}>
      {groupedServices.map((group, groupIndex) => (
        <Center key={groupIndex}>
          <SimpleGrid columns={1} spacing="50px">
            {group.map((service) => (
              <Box key={service.id}>
                <HStack spacing={10} verticalAlign={"top"}>
                  <CardService
                    text={service.name}
                    index={service.id}
                    image_url={service.image_url}
                  />
                  <Box mb={35}>
                    <ServiceDescription />
                  </Box>
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        </Center>
      ))}
    </Stack>
  );
};

export default Services;
