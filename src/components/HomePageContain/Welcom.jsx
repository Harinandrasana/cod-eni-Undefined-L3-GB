import { Text, Center, Box, Button } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeIn } from "../../variants";

const Welcom = () => {
  const text = "Bienvenue sur CitizenConnect".split("");

  const durationPerChar = 1.5;
  const charCount = text.length;
  const totalDelay = (charCount * durationPerChar) / 10;
  return (
    <div className="my-4">
      <Center mt={10}>
        <Box textAlign="center">
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: durationPerChar,
                delay: i * (durationPerChar / 10),
              }}
              key={i}
            >
              <Text fontSize={40} color="#00024d" display="inline">
                {el}
              </Text>
            </motion.span>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: durationPerChar,
              delay: totalDelay,
            }}
            className="w-10"
          >
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1 mb-4"
            >
              <Text mb={2}>
                votre plateforme pour des services gouvernementaux en ligne
                simplifiés. Modernisez vos interactions avec l'e-gouvernance :
              </Text>
              <Text>
                accès facile aux impôts, actes d'état civil, permis, et plus,
                avec une authentification unique pour une expérience sécurisée
                et efficace.
              </Text>
              <br />
              <Link to="/help">
                <Text color="blue.200">Besoin d'aide ?</Text>
              </Link>
              <br />
              <Link to={"/services"}>
                <Button py={5} color="white" colorScheme="green">
                  <Text fontSize={20}>Consulter nos services</Text>
                </Button>
              </Link>
            </motion.h1>
          </motion.div>
        </Box>
      </Center>
    </div>
  );
};

export default Welcom;
