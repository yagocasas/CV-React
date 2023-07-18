import {
    Box,
    Flex,
    Heading,
    Icon,
    Link,
    List,
    ListItem,
    Text,
} from "@chakra-ui/react";
import React from "react";
import {
    RiFacebookFill,
    RiGithubFill,
    RiInstagramFill,
    RiLinkedinBoxFill,
    RiTwitterFill,
} from "react-icons/ri";
import useColor from "../hooks/useColor.hook";

const Footer = () => {
    const { gradientWhiteBlack } = useColor();
    return (
        <Flex
            as={"footer"}
            direction={{ base: "column", lg: "row" }}
            justify={"space-between"}
            align={"center"}
            w={"full"}
            maxH={"fit-content"}
            py={4}
            px={12}
            borderTop={"2px solid gray"}
            bg={gradientWhiteBlack}
        >
            <Box
                w={"full"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-evenly"}
                p={4}
            >
                <Text fontWeight={"semibold"}>Hecho con REACT</Text>
                {/* <Text fontWeight={"semibold"}>Disponible para FreeLance</Text> */}
                <Text fontWeight={"semibold"}>by YagoCD</Text>
            </Box>
            <Box
                w={"full"}
                display={"flex"}
                align={"center"}
                justifyContent={{ base: 'center', lg: "end"}}
                gap={6}
            >
                <Heading fontSize={"xl"}>#RRSS</Heading>
                <List
                    display={"flex"}
                    justifyContent={"space-between"}
                    gap={8}
                    alignItems={"center"}
                >
                    <ListItem>
                        <Link
                            href="https://www.linkedin.com/in/yago-casas-d%C3%ADaz/"
                            target="_blank"
                        >
                            <Icon
                                as={RiLinkedinBoxFill}
                                boxSize={6}
                                _hover={{ transform: "scale(1.2)" }}
                            />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="https://github.com/yagocasas"
                            target="_blank"
                        >
                            <Icon
                                as={RiGithubFill}
                                boxSize={6}
                                _hover={{ transform: "scale(1.2)" }}
                            />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="https://www.instagram.com/yago_houses/"
                            target="_blank"
                        >
                            <Icon
                                as={RiInstagramFill}
                                boxSize={6}
                                _hover={{ transform: "scale(1.2)" }}
                            />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link
                            href="https://www.facebook.com/John.Kuki/"
                            target="_blank"
                        >
                            <Icon
                                as={RiFacebookFill}
                                boxSize={6}
                                _hover={{ transform: "scale(1.2)" }}
                            />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="https://twitter.com/maestro_miyagui"
                            target="_blank"
                        >
                            <Icon
                                as={RiTwitterFill}
                                boxSize={6}
                                _hover={{ transform: "scale(1.2)" }}
                            />
                        </Link>
                    </ListItem>
                </List>
            </Box>
        </Flex>
    );
};

export default Footer;
