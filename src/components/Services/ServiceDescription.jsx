import React from "react";
import { Text, Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Link } from "react-router-dom";
import { connectedUser } from "../../constant";

const ServiceDescription = ({ text, id }) => {
  const maxLength = 335; // Définir la longueur maximale du texte à afficher avant les points de suspension

  // Fonction pour tronquer le texte si nécessaire
  const truncateText = (text) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };

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
          {text}
        </Text>
        <Link to={connectedUser !== null ? `/services/${id}` : "/LoginForm"}>
          <Button bg="red" p={2} disabled={!connectedUser} mt={10}>
            Plus de détails
          </Button>
        </Link>
      </motion.h1>
    </Box>
  );
};

export default ServiceDescription;
