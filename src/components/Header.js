import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="./images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="search" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="watchlist" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="original" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="movie" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="series" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="/images/userImg.jpg" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  background-color: var(--bg-nav);
  height: 3.5rem;
  display: flex;
  align-items: center;
  padding: 0 2.2rem;
  overflow-x: hidden;
`;

const Logo = styled.img`
  height: 3rem;
  padding: 0.2rem 0;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 1.5rem;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    img {
      height: 1.3rem;
    }
    span {
      padding-top: 0.2rem;
      padding-left: 0.3rem;
      font-size: 0.8rem;
      letter-spacing: 0.1rem;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  cursor: pointer;
`;
