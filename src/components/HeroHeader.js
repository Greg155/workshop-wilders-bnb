import React from "react";
import styled from "styled-components";

const HeroHeader = () => {
  const HeaderBackground = styled.header`
    height: 90vh;
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.8)
      ),
      url("https://source.unsplash.com/random");
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
  `;

  return <HeaderBackground></HeaderBackground>;
};

export default HeroHeader;
