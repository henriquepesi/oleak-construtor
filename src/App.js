import React, { useRef } from "react";

import SelectContainer from "./components/SelectContainer";
import Header from "./components/Header";

import GlobalStyle from "./styles/global";
import ReactToPrint from "react-to-print";
import Modal from "./components/Modal";
import Box from "./components/Box";

import ModalProvider from "./hooks/Modal";

const App = () => {
  const componentRef = useRef();

  return (
    <ModalProvider>
      <div ref={componentRef} className="App">
        <GlobalStyle />
        <Modal />
        <Box />
        <Box />
        {/* <Header /> */}
        {/* <SelectContainer />
      <ReactToPrint
        trigger={() => <button>Imprimir!</button>}
        content={() => componentRef.current}
      /> */}
      </div>
    </ModalProvider>
  );
};

export default App;
