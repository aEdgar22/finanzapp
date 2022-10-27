import { LoginPage } from "@/pages";
import { SignupPage } from "@/pages/auth/SignupPage";
import { Flex } from "@chakra-ui/react";
import { Routes, Route, Navigate } from "react-router-dom";

export interface AuthRouterInterface {}

const AuthRouter: React.FC<AuthRouterInterface> = () => {
  return (
    <Flex h="100vh" direction={{ base: "column", md: "row" }} >
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="*" element={<Navigate replace to="/auth/login" />} />
      </Routes>
    </Flex>
  );
};
export default AuthRouter;
