import React, {useState} from "react";
import { Box, Heading, Text, Container, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const ContactPage = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour traiter l'envoi du formulaire
    console.log('Form data:', formData);
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={6}>Contactez-nous</Heading>
      <Text mb={4}>
        Si vous avez des questions ou des demandes d'information, n'hésitez pas à nous contacter en remplissant le formulaire ci-dessous.
      </Text>
      <Box as="form" onSubmit={handleSubmit}>
        <FormControl id="name" mb={4}>
          <FormLabel>Nom</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl id="message" mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={4}>Envoyer</Button>
      </Box>
    </Container>
  );
};



export default ContactPage;
