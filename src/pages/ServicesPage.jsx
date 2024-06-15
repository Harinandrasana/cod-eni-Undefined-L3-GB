import React from "react";
import Services from "../components/Services/Services";
import { Box, Center, Container, Text } from "@chakra-ui/react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <div>
      <Container maxW={"full"}>
        <Center mt={10}>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
            width={"100%"}
          >
            <Box
              textAlign={"center"}
              mb={10}
              p={20}
              bg={"#a6d6ce"}
              borderRadius={5}
              minW={1500}
            >
              <Text fontSize={40} color="#00024d" display="inline">
                Consulter la liste de nos services
              </Text>
            </Box>
          </motion.div>
        </Center>
        <Box>
          <Services />
        </Box>
      </Container>
    </div>
  );
};

export default ServicesPage;
