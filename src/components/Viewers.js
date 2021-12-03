import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="images/viewers-disney.png" alt="disney"></img>
      </Wrap>
      <Wrap>
        <img src="images/viewers-pixar.png" alt="pixar"></img>
      </Wrap>
      <Wrap>
        <img src="images/viewers-marvel.png" alt="marvel"></img>
      </Wrap>
      <Wrap>
        <img src="images/viewers-starwars.png" alt="starwars"></img>
      </Wrap>
      <Wrap>
        <img src="images/viewers-national.png" alt="national"></img>
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 1.5rem;
  margin-top: 2rem;
`;

const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgba(0 0 0 / 69%) 0 26px 30px -10px,
    rgba(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0 0 0 / 80%) 0 40px 58px -16px,
      rgba(0 0 0 / 70%) 0 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
