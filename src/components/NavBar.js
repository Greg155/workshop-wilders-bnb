import React from "react";
import styled from "styled-components";
import logoImg from "./assets/logo.png";

const NavBar = () => {
  const logoImage = logoImg;

  const NavBarStyle = styled.div`
    background: transparent;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const Logo = styled.div`
    width: 160px;
    height: 130px;
    background-image: url(${logoImage});
    background-size: cover;
  `;
  const Host = styled.div``;

  return (
    <NavBarStyle>
      <Logo />
      <Host>Devenez Hôte</Host>
    </NavBarStyle>
  );
};

export default NavBar;
