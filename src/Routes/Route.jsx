import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/Home";
import axios from "axios";
import AllAppsPage from "../Pages/AllApps";
import AppsDetailsPage from "../Pages/Details";
import InstalledAppListPage from "../Pages/InstalledList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <span class="loading loading-dots loading-lg min-h-screen flex items-center justify-center"></span>,
    children:[
        {
            index:true,
            loader: () => axios('/appData.json'),
            Component: HomePage
        },
        {
            path: '/allapps',
            loader: () => axios('/appData.json'),
            Component: AllAppsPage
        },
        {
            path: '/installedlist',
            loader: () => axios('/appData.json'),
            Component: InstalledAppListPage
        },
        {
            path: '/details/:id',
            loader: () => axios('/appData.json'),
            Component: AppsDetailsPage
        },
        {
            path: '*',
            Component: ErrorPage
        }
    ]
  },
]);