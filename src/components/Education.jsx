import React from "react";
import ElementContainer from "./ElementContainer";
import { Flex, Heading, Text } from "@chakra-ui/react";

const Education = ({ education }) => {
  // console.log("edu", education);
  return (
    <ElementContainer>
      <Heading mb={8}>Educación</Heading>
      {education.map((element) => {
        // console.log(element);
        return (
          <Flex direction={"column"} p={4} key={JSON.stringify(element)}>
          <Heading fontSize={'xl'}>{element.name}</Heading>
            <Text>{element.date}</Text>
            <Text>{element.where}</Text>
          </Flex>
        );
      })}
    </ElementContainer>
  );
};

export default Education;
