import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import HomePage from "../Pages/Home/HomePage";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/login", element: <LoginPage/> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/homePage", element: <HomePage /> },
    { path: "/", element: <LoginPage /> },
  ])

  return <RouterProvider router={router}/>
}

export default Router;
