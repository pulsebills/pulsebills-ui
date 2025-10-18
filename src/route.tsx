import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
import Main from "./pages/Main";
import Login from "./pages/Login";
import RegisterOrgination from "./pages/RegisterOrgination";
import RegisterUser from "./pages/RegisterUser";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Services from "./pages/Services";
import Invoices from "./pages/Invoices";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

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
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/patients",
    element: <Patients />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/invoices",
    element: <Invoices />,
  },
  {
    path: "/payments",
    element: <Payments />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/settings",
    element: <Settings />,
  }
]);

export default router;