import React from 'react'
import ElementContainer from '../ElementContainer';
import { Flex, Heading, Text } from '@chakra-ui/react';

const Languages = ({languages}) => {
    console.log(languages);
  return (
    <ElementContainer>
        <Heading mb={8}>Idiomas</Heading>
    {languages.map((language) => {
        return (
            <Flex direction={'column'} key={JSON.stringify(language)}>
                <Heading fontSize={'xl'} mb={4}>{language.language}</Heading>
                <Text><strong>Escrito: </strong>{language.wrlevel}</Text>
                <Text><strong>Hablado: </strong>{language.splevel}</Text>
            </Flex>
        )
    })}
    </ElementContainer>
  )
};

export default Languages;