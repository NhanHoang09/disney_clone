import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img
            src="https://whatsondisneyplus.com/wp-content/uploads/2020/07/Cars-2-Prix-scaled.jpg"
            alt="movies"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://whatsondisneyplus.com/wp-content/uploads/2020/07/Cars-2-Prix-scaled.jpg"
            alt="movies"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://whatsondisneyplus.com/wp-content/uploads/2020/07/Cars-2-Prix-scaled.jpg"
            alt="movies"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://whatsondisneyplus.com/wp-content/uploads/2020/07/Cars-2-Prix-scaled.jpg"
            alt="movies"
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  h4 {
    margin: 4rem 0 1.8rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgba(0 0 0 / 69%) 0 26px 30px -10px,
    rgba(0 0 0 / 73%) 0 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0 0 0 / 80%) 0 40px 58px -16px,
      rgba(0 0 0 / 70%) 0 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
