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

import { Form } from "../styledComponents";

import { ButtonSocial } from "../components/ButtonSocial";
import { Link } from "react-router-dom";
import { useShowPassword } from "../hooks";

export interface SignupPageInterface {}

const SignupPage: React.FC<SignupPageInterface> = () => {
  const { show, handleClick } = useShowPassword(false);

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
            <FormLabel htmlFor="email">Nombre</FormLabel>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Jhon"
              autoComplete="off"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Apellidos</FormLabel>
            <Input
              id="fullname"
              type="text"
              name="fullname"
              placeholder="Milton"
              autoComplete="off"
            />
          </FormControl>

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

          {
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
          }

          <Button variant="primary">Registrarme</Button>

          <Center>
            <Text>
              Ya estás registrado?{" "}
              <Link id="linkSignUp" to="/auth/login">
                Ingresa
              </Link>
            </Text>
          </Center>
        </Form>
      </Box>
    </>
  );
};

export default SignupPage;
