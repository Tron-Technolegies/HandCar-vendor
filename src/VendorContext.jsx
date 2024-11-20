import React, { createContext, useState } from "react";

export const VendorContext = createContext();

export default function VendorContextProvider({ children }) {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showSmallBar, setShowSmallBar] = useState(false);

  return (
    <VendorContext.Provider
      value={{
        showDeletePopup,
        setShowDeletePopup,
        showSmallBar,
        setShowSmallBar,
      }}
    >
      {children}
    </VendorContext.Provider>
  );
}
