'use client';

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const WithSpeechBubbles = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Partager votre Opinion </Heading>
          <Text>participer au communauter Citizen Workflow.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Claire Marie</TestimonialHeading>
              <TestimonialText>
              Citizen Connect a vraiment amélioré la façon dont je m'engage avec ma communauté locale. C'est génial de voir autant d'initiatives citoyennes rassemblées au même endroit!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://img.freepik.com/photos-gratuite/photo-portrait_144627-46580.jpg?t=st=1718425963~exp=1718429563~hmac=dd50c075e688a669f449a12a59ebd9d207157663ce3971af3d14a71a22f6ccc1&w=740'
              }
              name={'Marseille'}
              title={'Femme aux foyer'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Clementine</TestimonialHeading>
              <TestimonialText>
              Le service client de Citezen Connect est exceptionnel! J'ai reçu une réponse rapide à ma question et une assistance personnalisée.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Paris'}
              title={'Avocat'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Manon Stray</TestimonialHeading>
              <TestimonialText>
              Je recommande vivement Citezen Connect à tous ceux qui veulent avoir un impact positif dans leur quartier. C'est une plateforme facile à utiliser et très enrichissante.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://img.freepik.com/photos-gratuite/homme-dans-verres-transparents-prenant-selfie-isole-mur-blanc_231208-2306.jpg?t=st=1718426069~exp=1718429669~hmac=15eaf602ef2ae42f43a3d060edfe1d992ff99e3d4c674cf6bcd1c4b254e1acbc&w=1380'
              }
              name={'Dijon'}
              title={'Etudiant'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
};

export default WithSpeechBubbles;
