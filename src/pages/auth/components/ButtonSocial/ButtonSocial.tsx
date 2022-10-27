import { Button, Flex } from "@chakra-ui/react";
import React from "react";
export interface ButtonSocialInterface {}

const ButtonSocial: React.FC<ButtonSocialInterface> = () => {
  return (
    <div>
      <Flex mt="2rem" direction="column" rowGap="1rem">
        <Button colorScheme="red" variant="outline">
          {" "}
          Continúa con Google
        </Button>
        <Button colorScheme="facebook" variant="outline">
          Continúa con Facebook
        </Button>
      </Flex>
    </div>
  );
};

export default ButtonSocial;
