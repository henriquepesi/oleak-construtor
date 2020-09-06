import React from "react";
import DragDrop from "../DragDrop";

import Logo from "../../assets/logo-oleak.svg";

import {
  HeaderComponente,
  HeaderContainerEnd,
  InputGroup,
  ImageContainer,
} from "./styles";

const Header = () => {
  return (
    <HeaderComponente>
      <ImageContainer>
        <img src={Logo} width="200" alt="Oleak" />
      </ImageContainer>
      <HeaderContainerEnd>
        <DragDrop width="150px" height="150px" message="Logo do cliente" />
        <DragDrop width="150px" height="150px" message="Seu logo" />
        <InputGroup>
          <input placeholder="Telefone" />
          <input placeholder="Email" />
        </InputGroup>
      </HeaderContainerEnd>
    </HeaderComponente>
  );
};

export default Header;
