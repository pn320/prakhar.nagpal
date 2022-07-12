import { Container, Heading, Link, Text } from "@chakra-ui/react";

const Index = () => (
  <Container as="main" maxW={"container.xl"} pt={16} textAlign={"center"}>
      <Heading size={"md"} fontSize={"2xl"} lineHeight={2.5}>Hi, I'm Prakhar Nagpal.</Heading>
      <Text lineHeight={1.3}>
        I'm a second year computing student at Imperial College London pursuing a Masters in Computer Science with a specification in Machine Learnig and Artificial  Intelligence. I currently work as a software engineering intern at&nbsp;
        <Link
          href={"https://www.five.ai/"}
          color={"purple.400"} _hover={{
            textDecoration: "none",
            color: "purple.500"
          }}
          target={"_blank"}
        >
          FiveAI@London</Link>.
      </Text>
  </Container>
);

export default Index
