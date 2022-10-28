import { Button, Flex, Img } from "@chakra-ui/react";
import React from "react";
export interface ButtonSocialInterface {}
import logoGoogle from "../../../../assets/google-logo.svg";
import logoFacebook from "../../../../assets/facebook-logo.svg";

const ButtonSocial: React.FC<ButtonSocialInterface> = () => {
  return (
    <Flex mt="2rem" direction="column" rowGap="1rem">
      <Button colorScheme="red" variant="outline" >
        <Flex align="center">
          <Img width="1.8rem" src={logoGoogle} alt="logo google" mr="1rem" />
          Continúa con Google
        </Flex>
      </Button>

      <Button colorScheme="facebook" variant="outline" >
        <Flex align="center">
          <Img width="2rem" src={logoFacebook} alt="logo google" mr="0.5rem" />
          Continúa con Facebook
        </Flex>
      </Button>
    </Flex>
  );
};

export default ButtonSocial;
