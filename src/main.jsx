import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App.jsx";
import VendorContextProvider from "./VendorContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VendorContextProvider>
      <ToastContainer position="top-center" />
      <App />
    </VendorContextProvider>
  </StrictMode>
);
