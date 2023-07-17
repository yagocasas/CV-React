import React from "react";
import { useContext } from "react";
import { MyContext } from "../../shared/Context";
import { Flex, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { NavbarLinks } from "../../utils/NavbarLinks";
import ColorModeSwitcher from "../../config/ColorModeSwitcher";
import useColor from "../../hooks/useColor.hook";

const Navbar = () => {
  const { setData } = useContext(MyContext);
  const { links } = NavbarLinks;
  const { blackWhite } = useColor();
  return (
    <Flex
      as={"nav"}
      justify={"space-between"}
      align={"center"}
      w={"full"}
      py={6}
      px={12}
      borderBottom={"2px solid gray"}
      mb={8}
      position={"fixed"}
      zIndex={99}
      bg={"bg-canvas"}
    >
      <Box w={"full"} display={"flex"} justifyContent={"space-around"} px={8}>
        {links.map((link) => {
          return (
            <Button
              key={link}
              bg={"transparent"}
              color={blackWhite}
              fontWeight={"semibold"}
              fontSize={"xl"}
              _hover={{
                bg: "transparent",
                borderBottom: `1px solid ${blackWhite}`,
                transform: "scale(1.2)",
              }}
              rounded={0}
              onClick={() => setData(link.data)}
            >
              {link.name}
            </Button>
          );
        })}
      </Box>
      <Box mr={4}>
          <ColorModeSwitcher color={"!bg-canvas"} />
      </Box>
    </Flex>
  );
};

export default Navbar;
