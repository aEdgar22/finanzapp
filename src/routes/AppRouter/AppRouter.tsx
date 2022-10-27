import { HomePage } from "@/pages/HomePage";
import { Box } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthRouter } from "../AuthRouter";

export interface AppRouterInterface {}

const AppRouter: React.FC<AppRouterInterface> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AuthRouter />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate replace to="/auth/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
