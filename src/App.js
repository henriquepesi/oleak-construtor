import React, { useRef, useState } from "react";

import GlobalStyle from "./styles/global";
import ReactToPrint from "react-to-print";
// import Modal from "./components/Modal";
// import Box from "./components/Box";

import Pages from "./pages";
import ModalProvider from "./hooks/Modal";

import Header from "./components/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

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
        <Pages />
        {showElement && <Pages />}
      </div>
      <div
        style={{
          display: "flex",
          width: 1060,
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "space-between",
        }}
      >
        {showElement && (
          <button
            className="transparentButton"
            onClick={() => handleRemoveElement()}
          >
            <FontAwesomeIcon icon={faMinusCircle} color="rgb(219,25,67)" />
            Remover
          </button>
        )}
        {!showElement && (
          <button
            className="transparentButton"
            onClick={() => handleShowElement()}
          >
            <FontAwesomeIcon icon={faPlusCircle} color="#333" /> Adicionar
          </button>
        )}
        <ReactToPrint
          trigger={() => (
            <button className="mainButton">
              <FontAwesomeIcon icon={faPrint} color="#fff" /> Imprimir!
            </button>
          )}
          content={() => componentRef.current}
        />
      </div>
    </ModalProvider>
  );
};

export default App;
