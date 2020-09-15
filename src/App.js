import React, { useRef, useState } from "react";

import GlobalStyle from "./styles/global";
import ReactToPrint from "react-to-print";
// import Modal from "./components/Modal";
// import Box from "./components/Box";

import Pages from "./pages";
import ModalProvider from "./hooks/Modal";

import Header from "./components/Header";

const App = () => {
  const componentRef = useRef();
  const [showElement, setShowElement] = useState(false);

  const handleShowElement = () => {
    setShowElement(true);
  };

  const handleRemoveElement = () => {
    setShowElement(false);
  };

  return (
    <ModalProvider>
      <div ref={componentRef} className="App">
        <GlobalStyle />
        <Header />
        <div pageStyle={"width: 20px"}></div>
        <Pages />
        <button onClick={() => handleShowElement()}> add </button>
        {showElement && <Pages />}
        {showElement && (
          <button onClick={() => handleRemoveElement()}> remove </button>
        )}
      </div>
      <ReactToPrint
        trigger={() => <button>Imprimir!</button>}
        content={() => componentRef.current}
      />
    </ModalProvider>
  );
};

export default App;
