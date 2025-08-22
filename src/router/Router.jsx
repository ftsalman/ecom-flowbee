import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { Homepage } from "../pages/Homepage";
import { HomeLayout } from "../layouts/HomeLayout";
import { LoginPage } from "../pages/auth/LoginPage";
import { SignupPage } from "../pages/auth/SignupPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CategoriesPage } from "../pages/CategoriesPage";

 export const  router  =  createBrowserRouter([
    
//    {
//      path: "/",
//      element: <Navigate to="/home" replace={true} />,
//    },
//    {
//      path: "auth",
//      children: [
//        {
//          path: "login",
//          element: (
//            <AuthLayout>
//              <LoginPage />
//            </AuthLayout>
//          ),
//        },
//        {
//          path: "signup",
//          element: (
//            <AuthLayout>
//              <SignupPage />
//            </AuthLayout>
//          ),
//        },
//      ],
//    },


  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path:"products",
        element:<ProductsPage/>

      },
      {
          path: "products",
        element: <CategoriesPage />,

      },
    //   {
    //     path: "products/:productId",
    //     element: <ProductViewPage />,
    //   },
    //   {
    //     path: "settings",
    //     element: <SettingsPage />,
    //   },
    //   {
    //     path: "orders",
    //     element: <OrdersHistoryPage />,
    //   },
    //   {
    //     path: "cart",
    //     element: <CartPage />,
    //   },
    //   {
    //     path:"/favorite",
    //     element:<FavoritePage/>
    //   },
    //   { path: "category/:categorySlug", element: <ProductsPage /> },
    ],
  },
 ])