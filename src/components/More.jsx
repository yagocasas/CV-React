import React from "react";
import Abilities from "./Skills/Abilities";
import Languages from "./Skills/Languages";
import ElementContainer from "./ElementContainer";
import { Flex, Heading } from "@chakra-ui/react";

const More = ({ abilities, languages }) => {
  console.log(abilities, languages);
  return (
    <ElementContainer minW={'full'} justify={'space-between'} alignSelf={'start'}>
      <Heading mb={8}>Más Info</Heading>
      <Flex justify={'space-between'}>
        <Languages languages={languages} />
        <Abilities abilities={abilities} />
      </Flex>
    </ElementContainer>
  );
};

export default More;
