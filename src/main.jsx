import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import VendorContextProvider from "./VendorContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VendorContextProvider>
      <App />
    </VendorContextProvider>
  </StrictMode>
);
