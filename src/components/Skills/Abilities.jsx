import React from 'react'
import ElementContainer from '../ElementContainer';
import { Heading, Text } from '@chakra-ui/react';

const Abilities = ({abilities}) => {
  console.log(abilities);
  return (
    <ElementContainer>
        <Heading mb={8}>Habilidades</Heading>
        {abilities.map((ability) => {
          return (
            <Text fontWeight={'semibold'} key={ability}>{ability}</Text>
            )
        })}
        </ElementContainer>
  );
};

export default Abilities;