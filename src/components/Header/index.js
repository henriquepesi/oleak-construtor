import React from "react";
import DragDrop from "../DragDrop";

import {
  Container,
  HeaderItemOne,
  Slogan,
  InputElement,
  InputFile,
} from "./styles";

function Header() {
  return (
    <Container>
      <div>
        <HeaderItemOne>
          <img
            src="https://oleak.com.br/wp-content/uploads/2020/04/logo-oleak.svg"
            alt="Oleak"
            class="logo "
          />
        </HeaderItemOne>
      </div>

      <Slogan>
        <img
          src="https://oleak.com.br/wp-content/themes/oleak/assets/images/persona.svg"
          alt="logo"
        />
        <p>Monte Instruções de Limpeza e Higiene Profissional</p>
      </Slogan>

      <DragDrop> Logo CLiente </DragDrop>

      <DragDrop> Logo CLiente </DragDrop>

      <div>
        <InputElement
          type="tel"
          id="phone"
          name="phone"
          placeholder="Telefone"
        />

        <InputElement
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
      </div>
    </Container>
  );
}

export default Header;
