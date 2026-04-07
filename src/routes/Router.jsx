import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/Layout";
import LazyComponent from "./LazyComponent";
import ErrorScreen from "../pages/error/ErrorScreen";
// import PrivateRoute from "./PrivateRoute";
// import PublicRoute from "./PublicRoute";
import Login from "../pages/auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <PrivateRoute>
        <AppLayout />
      // </PrivateRoute>
    ),
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "/",
        element: <LazyComponent path="/" />,
      },
      {
        path:"/demo",
        element:<LazyComponent path="/demo"/>,
      },
       {
        path:"/contact",
        element:<LazyComponent path="/contact"/>,
      },
      {
        path: "/about-us",
        element: <LazyComponent path="/about-us" />,
      },
      {
        path: "/roles",
        element: <LazyComponent path="/roles" />,
      },
      //  error page
      {
        path: "*",
        element: <ErrorScreen />,
      },
    ],
  },
  // auth route
  {
    path: "/login",
    element: (
      // <PublicRoute>
        <Login />
      // </PublicRoute>
    ),
  },
  {
    path: "*",
    element: <ErrorScreen />,
  },
]);
