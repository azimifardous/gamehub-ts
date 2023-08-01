import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logoWhite from "../assets/logoWhite.webp";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack justifyContent="space-between" paddingX="30px" paddingY="10px">
      <Image src={colorMode === "dark" ? logoWhite : logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
