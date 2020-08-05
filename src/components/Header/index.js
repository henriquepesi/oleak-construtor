import React from "react";
import UploadLane from "../UploadLane";

import Logo from "../../assets/logo-oleak.svg";

import { HeaderComponente, InputGroup, ImageContainer } from "./styles";

const Header = () => {
  return (
    <HeaderComponente>
      <UploadLane userText="Logo distribuidor" />
      <InputGroup>
        <input placeholder="Nome" />
        <input placeholder="Tel" />
        <input placeholder="Empresa" />
      </InputGroup>
      <ImageContainer>
        <img src={Logo} width="200" alt="Oleak" />
      </ImageContainer>
      <UploadLane userText="Logo cliente" />
    </HeaderComponente>
  );
};

export default Header;
