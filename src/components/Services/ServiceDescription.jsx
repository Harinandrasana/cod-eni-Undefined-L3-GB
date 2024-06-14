import React from "react";
import { Text, Center, Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeIn } from "../../variants";

const ServiceDescription = () => {
  return (
    <Box textAlign="left">
      <motion.h1
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h1 mb-4"
      >
        <Text mb={2} maxW={400}>
          votre plateforme pour des services gouvernementaux en ligne
          simplifiés. Modernisez vos interactions avec l'e-gouvernance : votre
          plateforme pour des services gouvernementaux en ligne simplifiés.
          Modernisez vos interactions avec l'e-gouvernance :
        </Text>
        <Button mt={10}>Plus de details</Button>
      </motion.h1>
    </Box>
  );
};

export default ServiceDescription;
