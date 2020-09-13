import React from "react";

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

      <InputFile class="btn-file" for="upload">
        Logo Cliente
      </InputFile>

      <InputFile class="btn-file" for="upload">
        Logo Cliente
      </InputFile>

      <div>
        <label for="phone">
          <InputElement
            type="tel"
            id="phone"
            name="phone"
            placeholder="Telefone"
          />
        </label>
        <label for="email">
          <InputElement
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
        </label>
      </div>
    </Container>
  );
}

export default Header;
