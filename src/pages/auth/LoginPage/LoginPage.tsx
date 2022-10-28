import { Logo } from "@/pages/components/Logo";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { Form } from "../styledComponents";

import { ButtonSocial } from "../components/ButtonSocial";

export interface LoginPageInterface {}

const LoginPage: React.FC<LoginPageInterface> = () => {
  return (
    <>
      <Logo />

      <Box h="100%" p="4" pb="8">
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

          <Button variant="primary">
            Ingresar
          </Button>
        </Form>

        <ButtonSocial />
      </Box>
    </>
  );
};

export default LoginPage;
