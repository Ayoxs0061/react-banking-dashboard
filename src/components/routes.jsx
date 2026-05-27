import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/dashboard.jsx";
import Layout from "./layout.jsx";
import Settings from "../pages/Settings/settings.jsx";
import Transfers from "../pages/Transfers/transfers.jsx";
import Activity from "../pages/Activity/activity.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="w-full h-screen flex justify-center items-center text-6xl">
        404: Not Found
      </div>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "transfers",
        element: <Transfers />,
      },
      {
        path: "activity",
        element: <Activity />,
      },
    ],
  },
]);

export default routes;
