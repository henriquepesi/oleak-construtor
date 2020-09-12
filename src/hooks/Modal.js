import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  const { showModal, setShowModal } = context;

  return { showModal, setShowModal };
}
