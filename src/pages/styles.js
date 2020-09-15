import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1200px;
  margin: 50px auto;
  justify-content: center;
  > div {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    & + div {
      margin-left: 15px;
    }
  }
`;
