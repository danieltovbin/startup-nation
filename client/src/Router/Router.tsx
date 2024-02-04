import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import HomePage from "../Pages/Home/HomePage";
import CreateProject from "../Pages/CreateProjectPage/CreateProjectPage";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/login", element: <LoginPage/> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/homePage", element: <HomePage /> },
    { path: "/createProject", element: <CreateProject /> },
    { path: "/", element: <LoginPage /> },
  ])

  return <RouterProvider router={router}/>
}

export default Router;
