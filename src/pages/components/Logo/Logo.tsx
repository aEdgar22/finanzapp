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
        direction={{base:"row", lg:'column'}}
        align="center"
        columnGap="4"
        justify="center"
        rowGap={{md:'2rem'}}
      >
        <Image src={logo} alt="logo-app" w={{base: '30%', lg: '100%'}} />
        <Heading as="h1" size={['xl', '2xl']} color="secondary">
          FinanzApp
        </Heading>
      </Flex>
    </>
  );
};

export default Logo;
