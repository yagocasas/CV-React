import React from "react";
import ElementContainer from "./ElementContainer";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";

const Experience = ({ experience }) => {
  // console.log('RETAIL', experience.retail);
  // console.log('SPORTS', experience.sports);
  console.log("todoooo", experience);
  const Retail = experience.retail;
  console.log("retail", Retail);
  const Sport = experience.sport;
  console.log("sports", Sport);

  return (
    <ElementContainer>
      <Heading mb={8}>Experiencia</Heading>
      <div>
        <div>
          <Heading fontSize={"4xl"}>Retail</Heading>
          {Retail.map((element) => {
            return (
              <Flex direction={"column"} p={4} key={JSON.stringify(element)}>
                <Stack>
                  <Heading fontSize={"3xl"}>{element.name}</Heading>
                  <Text>{element.where}</Text>
                  <Text>{element.date}</Text>
                  <Text>{element.description}</Text>
                </Stack>
              </Flex>
            );
          })}
        </div>
        <div>
          <Heading fontSize={"4xl"}>Deporte</Heading>
          {Sport.map((element) => {
            return (
              <Flex direction={"column"} p={4} key={JSON.stringify(element)}>
                <Stack>
                  <Heading fontSize={"3xl"}>{element.name}</Heading>
                  <Text>{element.where}</Text>
                  <Text>{element.date}</Text>
                  <Text>{element.description}</Text>
                </Stack>
              </Flex>
            );
          })}
        </div>
      </div>
    </ElementContainer>
  );
};

export default Experience;
