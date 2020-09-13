import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [selectProduct, setSelectProduct] = useState("");

  return (
    <ModalContext.Provider
      value={{ showModal, setShowModal, selectProduct, setSelectProduct }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  const { showModal, setShowModal, selectProduct, setSelectProduct } = context;

  return { showModal, setShowModal, selectProduct, setSelectProduct };
}
