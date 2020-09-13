import React from "react";

import Ambiente from "../components/Ambiente";
import Produto from "../components/Produto";
import Preparo from "../components/Preparo";
import Procedimento from "../components/Procedimento";
import Frequencia from "../components/Frequencia";

import { Container } from "./styles";

function pages() {
  return (
    <Container>
      <Ambiente />
      <Produto />
      <Preparo />
      <Procedimento />
      <Frequencia />
    </Container>
  );
}

export default pages;
