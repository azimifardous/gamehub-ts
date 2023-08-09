import { HStack, Image, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logoWhite from "../assets/logoWhite.webp";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack paddingX="30px" paddingY="10px">
      <Link to="/">
        <Image width="60px" src={colorMode === "dark" ? logoWhite : logo} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
