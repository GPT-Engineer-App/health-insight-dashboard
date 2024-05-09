import { Box, Button, Container, Flex, Grid, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaHeartbeat, FaUserFriends, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </Container>
  );
};

const Navbar = () => {
  return (
    <Flex as="nav" w="full" bg="gray.100" p={4} justifyContent="space-between" alignItems="center" position="fixed" top={0} zIndex={1}>
      <Heading as="h1" size="md">
        HealthFocus
      </Heading>
      <Stack direction="row" spacing={4}>
        <Link href="#services">Services</Link>
        <Link href="#about">About Us</Link>
        <Link href="#contact">Contact</Link>
      </Stack>
    </Flex>
  );
};

const HeroSection = () => {
  return (
    <Flex align="center" justify="center" bgImage="https://images.unsplash.com/photo-1459664018906-085c36f472af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBpbnNwaXJhdGlvbnxlbnwwfHx8fDE3MTUyODU1Njd8MA&ixlib=rb-4.0.3&q=80&w=1080" bgPos="center" bgSize="cover" h="100vh" color="white">
      <VStack spacing={4} p={8} bg="blackAlpha.600">
        <Heading as="h2" size="2xl">
          Empowering Your Health Journey
        </Heading>
        <Text fontSize="xl">Join us and revolutionize your wellness routine.</Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Flex>
  );
};

const FeatureSection = () => {
  return (
    <Box py={10} px={5}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <FeatureCard icon={FaHeartbeat} title="Health Tracking" description="Monitor and analyze your health data to stay on top of your wellness." />
        <FeatureCard icon={FaUserFriends} title="Personalized Coaching" description="Get custom advice from certified health coaches tailored to your needs." />
        <FeatureCard icon={FaChartLine} title="Community Support" description="Connect with a supportive community that motivates and inspires." />
      </Grid>
    </Box>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  const IconComponent = icon;
  return (
    <VStack bg="white" boxShadow="md" p={5} rounded="md" align="center">
      <IconComponent size="3em" />
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text textAlign="center">{description}</Text>
    </VStack>
  );
};

const Footer = () => {
  return (
    <Flex as="footer" py={5} px={10} justifyContent="space-between" alignItems="center" bg="gray.200">
      <Text>© 2023 HealthFocus. All rights reserved.</Text>
      <Stack direction="row" spacing={4}>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms of Service</Link>
      </Stack>
    </Flex>
  );
};

export default Index;
