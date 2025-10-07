import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children:[
        {
            index:true,
            Component: HomePage
        }
    ]
  },
]);