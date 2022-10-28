import { Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

import logo from "../../../assets/finanzapp.svg";

export interface LogoInterface {}

const Logo: React.FC<LogoInterface> = () => {
  return (
    <>
      {" "}
      <Flex
        p="4"
        pt="10"
        direction="row"
        align="center"
        columnGap="4"
        justify="center"
      >
        <Image src={logo} alt="logo-app" w="30%" />
        <Heading as="h1" size="2xl" color="titleColor">
          FinanzApp
        </Heading>
      </Flex>
    </>
  );
};

export default Logo;
