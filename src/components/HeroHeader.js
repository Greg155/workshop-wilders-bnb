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

  const HeaderTitleWrapper = styled.div`
    width: 400px;
    padding: 60px;
    margin-top: 21vh;
  `;

  const HeaderTitleH1 = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 52px;
    line-height: 52px;
    font-weight: 800;
  `;

  const HeaderTitleH2 = styled.h1`
    width: 360px;
    padding: 0;
    margin: 0;
    font-size: 18px;
    margin-top: 31px;
  `;

  return (
    <HeaderBackground>
      <HeaderTitleWrapper>
        <HeaderTitleH1>Des</HeaderTitleH1>
        <HeaderTitleH1>Logements</HeaderTitleH1>
        <HeaderTitleH1>Souciales</HeaderTitleH1>
        <HeaderTitleH2>
          Trouvez votre nouveau chez-vous. Découvrez des logements à proximité
          pour vous installer, travailler, ou tout simplement vous détendre.
        </HeaderTitleH2>
      </HeaderTitleWrapper>
    </HeaderBackground>
  );
};

export default HeroHeader;
