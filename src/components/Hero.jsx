import React from "react";
import { Avatar, Box, Button, Card, Flex, Heading } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import "./animations.css";

const Hero = ({ info }) => {
  const email = "yagocd10@hotmail.com";

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <Flex
      as={"aside"}
      role="complementary"
      direction={"column"}
      alignItems={"center"}
      justify={"start"}
      minH={{ base: 'fit-content', lg: "75vh"}}
      minW={{ base: 'xs', lg: 'md' }}
      p={{ base: 0, lg: 8 }}
      gap={{ base: 2, lg: 4 }}
      borderRight={{ base: "none", lg: "2px solid gray" }}
    >
      <Box display={"flex"} paddingBlock={"5px"} justifyContent={"center"}>
        <Box
          className={'name-animation'}
          textAlign={"center"}
          w={"100%"}
          overflow={'hidden'}
        >
          <Heading whiteSpace={"nowrap"} textTransform={'uppercase'} fontFamily={'Lekton'}>
            {info.name} {info.lastName}
          </Heading>
        </Box>
      </Box>
      <Avatar
        src={info.image}
        alt={info.name}
        rounded={"2xl"}
        minW={"2xs"}
        minH={"2xs"}
      />
      <Card
        gap={{ base: 2, lg: 4 }}
        display={"flex"}
        align={"center"}
        p={{ base: 2, lg: 8 }}
        bg={"transparent"}
      >
        <Heading fontSize={'xl'}>Full Stack Developer</Heading>
        <Heading fontSize={"xl"} fontWeight={"semibold"}>
          {info.city}
        </Heading>
        <Button
          colorScheme={"gray"}
          onClick={handleClick}
          rounded={"md"}
          cursor={"pointer"}
          p={4}
          leftIcon={<AiOutlineMail />}
          w={"full"}
        >
          Email
        </Button>
        <Heading fontSize={"2xl"} fontWeight={"semibold"}>
          {info.phone}
        </Heading>
      </Card>
    </Flex>
  );
};

export default Hero;
