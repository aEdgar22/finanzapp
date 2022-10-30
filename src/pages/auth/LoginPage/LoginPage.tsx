import { Logo } from "@/pages/components/Logo";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Form } from "../styledComponents";

import { ButtonSocial } from "../components/ButtonSocial";
import { Link } from "react-router-dom";
import { useShowPassword } from "../hooks";

export interface LoginPageInterface {}

const LoginPage: React.FC<LoginPageInterface> = () => {
  /*   const [show, setShow] = React.useState<boolean>(false);

  const handleClick = ():void => {
    setShow(!show);
  };
 */
  const {show, handleClick} = useShowPassword(false);

  return (
    <>
      <Logo />

      <Box
        h={{ base: "100%", md: "fit-content" }}
        p="4"
        pb="8"
        w={{
          base: "100%",
          lg: "28rem",
        }}
      >
        <Form>
          <FormControl>
            <FormLabel htmlFor="email">Correo</FormLabel>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="email@mail.com"
              autoComplete="off"
            />
          </FormControl>

          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Button variant="primary">Ingresar</Button>

          <Center>
            <Text>
              Aún no tienes cuenta?{" "}
              <Link id="linkSignUp" to="/auth/signup">
                Registrate
              </Link>
            </Text>
          </Center>
        </Form>

        <ButtonSocial />
      </Box>
    </>
  );
};

export default LoginPage;
