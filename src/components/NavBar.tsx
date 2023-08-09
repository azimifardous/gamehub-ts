import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logoWhite from "../assets/logoWhite.webp";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack paddingX="30px" paddingY="10px">
      <Image src={colorMode === "dark" ? logoWhite : logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
