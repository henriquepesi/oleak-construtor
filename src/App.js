import React, { useRef } from "react";

import GlobalStyle from "./styles/global";
import ReactToPrint from "react-to-print";
import Modal from "./components/Modal";
import Box from "./components/Box";

import Pages from "./pages";
import ModalProvider from "./hooks/Modal";

const App = () => {
  const componentRef = useRef();

  return (
    <ModalProvider>
      <div ref={componentRef} className="App">
        <GlobalStyle />
        <Pages />
      </div>
    </ModalProvider>
  );
};

export default App;
