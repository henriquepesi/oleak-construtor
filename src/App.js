import React from "react";

import SelectContainer from "./components/SelectContainer";
import Header from "./components/Header";

import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <SelectContainer />
    </div>
  );
};

export default App;
