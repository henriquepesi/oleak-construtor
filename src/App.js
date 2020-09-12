import React, { useRef } from "react";

import SelectContainer from "./components/SelectContainer";
import Header from "./components/Header";

import GlobalStyle from "./styles/global";
import ReactToPrint from "react-to-print";
import Modal from "./components/Modal";

const App = () => {
  const componentRef = useRef();

  return (
    <div ref={componentRef} className="App">
      <GlobalStyle />
      <Modal />
      {/* <Header /> */}
      {/* <SelectContainer />
      <ReactToPrint
        trigger={() => <button>Imprimir!</button>}
        content={() => componentRef.current}
      /> */}
    </div>
  );
};

export default App;
