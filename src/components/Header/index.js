import React, { useState } from "react";
import DragDrop from "../DragDrop";

import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  HeaderItemOne,
  Slogan,
  InputElement,
  InputMessage,
  InputContainer,
  InputIcon,
} from "./styles";

function Header() {
  const [tel, setTel] = useState("");
  const [closeTel, setCloseTel] = useState(false);
  const [email, setEmail] = useState("");
  const [closeEmail, setCloseEmail] = useState(false);
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
        {!closeTel ? (
          <InputContainer>
            <InputElement
              type="tel"
              name="phone"
              placeholder="Telefone"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
            {tel !== "" && (
              <InputIcon
                onClick={() => setCloseTel(!closeTel)}
                icon={faCheckCircle}
                color="#19db79"
              />
            )}
          </InputContainer>
        ) : (
          <InputContainer>
            <InputMessage>
              {tel}
              <InputIcon
                onClick={() => setCloseTel(!closeTel)}
                icon={faTimesCircle}
                color="#db1943"
              />
            </InputMessage>
          </InputContainer>
        )}

        {!closeEmail ? (
          <InputContainer>
            <InputElement
              type="tel"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {email !== "" && (
              <InputIcon
                onClick={() => setCloseEmail(!closeEmail)}
                icon={faCheckCircle}
                color="#19db79"
              />
            )}
          </InputContainer>
        ) : (
          <InputContainer>
            <InputMessage>
              {email}
              <InputIcon
                onClick={() => setCloseEmail(!closeEmail)}
                icon={faTimesCircle}
                color="#db1943"
              />
            </InputMessage>
          </InputContainer>
        )}
      </div>
    </Container>
  );
}

export default Header;
