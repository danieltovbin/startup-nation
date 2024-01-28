import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/login", element: <LoginPage/> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/", element: <LoginPage /> },
  ])

  return <RouterProvider router={router}/>
}

export default Router;
