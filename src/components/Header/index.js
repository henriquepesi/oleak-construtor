import React from "react";
import UploadLane from "../UploadLane";

import Logo from "../../assets/logo-oleak.svg";

import { HeaderComponente, InputGroup, ImageContainer } from "./styles";

const Header = () => {
  return (
    <HeaderComponente>
      <UploadLane />
      <InputGroup>
        <input placeholder="Nome" />
        <input placeholder="Tel" />
        <input placeholder="Empresa" />
      </InputGroup>
      <ImageContainer>
        <img src={Logo} width="200" alt="Oleak" />
      </ImageContainer>
      <UploadLane />
    </HeaderComponente>
  );
};

export default Header;
