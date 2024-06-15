import React from "react";
import {
  Stack,
  Center,
  Box,
  SimpleGrid,
  HStack,
  Text,
  colorScheme,
} from "@chakra-ui/react";
import { services } from "../data/serviceData";
import CardService from "../components/Services/CardService";
import ServiceDescription from "../components/Services/ServiceDescription";
import { Link, useParams } from "react-router-dom";
import {
  Heading,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import useNotification from "../hooks/useNotification";

const ServiceDetails = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de traitement du paiement ici
    console.log("Paiement soumis !");
  };
  const { id } = useParams(); // Utilisation correcte de useParams pour récupérer l'ID
  const { displayToast } = useNotification();

  // Trouver le service correspondant à l'ID dans le tableau services
  const service = services.find((service) => service.id === parseInt(id));

  if (!service) {
    return <div>Service non trouvé</div>; // Gestion du cas où aucun service ne correspond à l'ID
  }

  return (
    <Stack spacing={6} px={4} py={8} maxW="600px" mx="auto">
      <Heading as="h1" size="xl">
        {/* Paiement des impôts en ligne */}
        {service.name}
      </Heading>

      <Box>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormHelperText>Nombre de demande</FormHelperText>
              <Input type="number" placeholder="ajouter un nombre" />
            </FormControl>

            <FormControl isRequired>
              <FormHelperText>Email de reception</FormHelperText>
              <Input type="text" placeholder="example@example.com" />
            </FormControl>

            <Link to={"/"}>
              <Button type="submit" colorScheme="blue">
                Envoyer la demande
              </Button>
            </Link>
          </Stack>
        </form>
      </Box>

      <Box>
        <Divider />

        <Box>
          <Heading as="h2" size="md" mt={4}>
            Instructions et Aide
          </Heading>
          <Text>
            Pour toute assistance ou question sur le paiement des impôts en
            ligne, veuillez contacter notre service clientèle au 123-456-789 ou
            par email à support@exemple.com.
          </Text>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="md" mt={4}>
            Sécurité et Confidentialité
          </Heading>
          <Text>
            Vos informations personnelles et de paiement sont sécurisées et
            protégées. Nous utilisons des technologies de sécurité avancées pour
            garantir la confidentialité de vos données.
          </Text>
        </Box>

        <Divider />

        <Alert status="info" mt={4}>
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Message Important</AlertTitle>
            <AlertDescription>
              Veuillez vérifier les délais de paiement pour éviter toute
              pénalité. Pour plus d'informations, consultez notre site web.
            </AlertDescription>
          </Box>
        </Alert>

        <Divider />

        <Box>
          <Heading as="h2" size="md" mt={4}>
            Support Client
          </Heading>
          <Text>
            Notre équipe de support client est disponible pour répondre à vos
            questions et vous assister tout au long du processus de paiement.
            N'hésitez pas à nous contacter si vous avez besoin d'aide.
          </Text>
        </Box>
      </Box>
    </Stack>
  );
};

export default ServiceDetails;
