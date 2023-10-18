import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import BrandDetailsProducts from "../pages/BrandDetailsProducts";
import AddProduct from "../pages/AddProduct";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brand/:brand/details",
        element: <BrandDetailsProducts></BrandDetailsProducts>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;