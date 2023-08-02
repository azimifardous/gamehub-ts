import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logoWhite from "../assets/logoWhite.webp";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <HStack paddingX="30px" paddingY="10px">
      <Image src={colorMode === "dark" ? logoWhite : logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
