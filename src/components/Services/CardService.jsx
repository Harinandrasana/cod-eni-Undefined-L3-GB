import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Center,
  Heading,
  Stack,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

function CardService({ text, index, image_url }) {
  return (
    <Center>
      <motion.div
        className="card"
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: index % 2 === 0 ? 50 : -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
        <Center py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${image_url})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={image_url}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                {text}
              </Text>
              <Heading
                fontSize={"2xl"}
                fontFamily={"body"}
                fontWeight={500}
              ></Heading>
            </Stack>
          </Box>
        </Center>
      </motion.div>
    </Center>
  );
}

export default CardService;
