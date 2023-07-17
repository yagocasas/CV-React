import React from "react";
import ElementContainer from "./ElementContainer";
import { Heading, Text } from "@chakra-ui/react";

const About = ({ metadata }) => {

  return (
    <ElementContainer>
      <Heading mb={8}>Sobre mí!</Heading>
      {metadata.map((element) => {
        return <Text fontWeight={'semibold'} key={JSON.stringify(element.info)}>{element.info}</Text>;
      })}
    </ElementContainer>
  );
};

export default About;
