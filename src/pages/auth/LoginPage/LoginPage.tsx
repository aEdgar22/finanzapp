import { Logo } from "@/pages/components/Logo";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Form } from "../styledComponents";

import { ButtonSocial } from "../components/ButtonSocial";
import { Link } from "react-router-dom";

export interface LoginPageInterface {}

const LoginPage: React.FC<LoginPageInterface> = () => {
  return (
    <>
      <Logo />

      <Box
        h={{ base: "100%", md: "fit-content" }}
        p="4"
        pb="8"
        w={{ lg: "25%" }}
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

          <FormControl>
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="**********"
            />
          </FormControl>

          <Button variant="primary">Ingresar</Button>

          <Center>
            <Text>
              Aún no tienes cuenta? {" "} {" "}
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
