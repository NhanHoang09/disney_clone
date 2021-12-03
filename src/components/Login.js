import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SigUp>GET ALL THERE</SigUp>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: calc(100vh - 3.5rem);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: top;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  width: 90%;
  padding: 6rem 2.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const CTALogoOne = styled.img``;
const SigUp = styled.a`
  width: 100%;
  background-color: var(--signup-bg);
  font-weight: bold;
  padding: 1rem 0;
  color: var(--bt-colorwhite);
  border-radius: 0.5rem;
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 0.1rem;
  margin: 0.6rem 0 0.9rem;
  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 0.7rem;
  letter-spacing: 0.1rem;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  margin-top: 1rem;
  width: 90%;
`;
