import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import BrandDetailsProducts from "../pages/BrandDetailsProducts";
import AddProduct from "../pages/AddProduct";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../components/ProductDetails";

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
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products-brand/${params.brand}`),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`),
      },
    ],
  },
]);

export default router;
