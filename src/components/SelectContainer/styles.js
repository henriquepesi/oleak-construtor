import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2em;
`;

export const SelectContainerComponent = styled.div`
  display: grid;
  grid-template-columns:
    minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr)
    minmax(200px, 1fr) minmax(200px, 1fr);
  grid-gap: 1.5em;

  h3 {
    text-align: center;
    padding-bottom: 10px;
  }
`;

export const ToPrint = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4em 2em;
  background: #fff;
  border-radius: 5px;
  margin-top: 5em;
  text-align: center;
  color: #929292;

  h3 {
    font-weight: 600;
    font-size: 1rem;
  }

  span {
    font-size: 1.5rem;
  }
`;
