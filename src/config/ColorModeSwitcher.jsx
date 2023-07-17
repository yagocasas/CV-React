import React from "react";
import { useColorMode, IconButton, Tooltip, Switch } from "@chakra-ui/react";
import useColor from "../hooks/useColor.hook";

const ColorModeSwitcher = (props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { darkLightText, SwitchIcon } = useColor();

  return (
    <Tooltip label={`Cambia al modo ${darkLightText}`} placement='bottom'>
      <IconButton
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${darkLightText} mode`}
        variant="ghost"
        colorScheme={"blue"}
        _hover={{ bg: "inherit" }}
        {...props}
      />
    </Tooltip>
  );
};

export default ColorModeSwitcher;
