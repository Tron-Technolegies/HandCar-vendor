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
import ProfilePage from "./pages/profile/ProfilePage";
import NotificationPage from "./pages/notifications/NotificationPage";
import LoginPage from "./pages/login/LoginPage";
import UpdatePasswordPage from "./pages/updatePassword/UpdatePasswordPage";

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
        // {
        //   path: "services",
        //   element: <ServicePage />,
        // },
        // {
        //   path: "services/new",
        //   element: <AddNewServicePage />,
        // },
        // {
        //   path: "services/:id/edit",
        //   element: <EditService />,
        // },
        // {
        //   path: "requests",
        //   element: <RequestsPage />,
        // },
        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "update-password",
          element: <UpdatePasswordPage />,
        },
        // {
        //   path: "notification",
        //   element: <NotificationPage />,
        // },
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
