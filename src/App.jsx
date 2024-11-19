import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import SubscriptionPage from "./pages/subscriptions/SubscriptionPage";
import ServicePage from "./pages/servicesPage/ServicePage";
import RequestsPage from "./pages/Requests/RequestsPage";
import AddNewServicePage from "./pages/servicesPage/AddNewServicePage";
import EditService from "./pages/servicesPage/EditService";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <DashboardPage /> },
        {
          path: "subscriptions",
          element: <SubscriptionPage />,
        },
        {
          path: "services",
          element: <ServicePage />,
        },
        {
          path: "services/new",
          element: <AddNewServicePage />,
        },
        {
          path: "services/:id/edit",
          element: <EditService />,
        },
        {
          path: "requests",
          element: <RequestsPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
