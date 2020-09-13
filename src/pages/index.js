import React from "react";

import Ambiente from "../components/Boxes/Ambiente";
import Produto from "../components/Boxes/Produto";
import Preparo from "../components/Boxes/Preparo";
import Procedimento from "../components/Boxes/Procedimento";
import Frequencia from "../components/Boxes/Frequencia";

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
