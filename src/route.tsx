import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
import Main from "./pages/Main";
import Login from "./pages/Login";
import RegisterOrgination from "./pages/RegisterOrgination";
import RegisterUser from "./pages/RegisterUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register-org",
    element: <RegisterOrgination />,
  },
  {
    path: "/register-user",
    element: <RegisterUser />,
  },
]);

export default router;