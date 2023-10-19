import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import BrandDetailsProducts from "../pages/BrandDetailsProducts";
import AddProduct from "../pages/AddProduct";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../components/ProductDetails";
import Cart from "../pages/Cart";
import UpdateProduct from "../pages/UpdateProduct";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
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
          fetch(
            `https://nubis-server-832ynm1s6-tanzils-projects-637ef886.vercel.app/products-brand/${params.brand}`
          ),
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
        loader: ({ params }) =>
          fetch(
            `https://nubis-server-832ynm1s6-tanzils-projects-637ef886.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/update-products/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nubis-server-832ynm1s6-tanzils-projects-637ef886.vercel.app/products/${params.id}`
          ),
      },

      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://nubis-server-832ynm1s6-tanzils-projects-637ef886.vercel.app/cart"
          ),
      },
    ],
  },
]);

export default router;
