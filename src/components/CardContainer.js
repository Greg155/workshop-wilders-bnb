import React, { useState, useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";
import cardList from "./houseToRent";

const CardContainer = () => {
  const CardsContainer = styled.div`
    padding-top: 20px 66px 20px 66px;
  `;

  const CardsListStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 60px;
  `;

  return (
    <CardsContainer>
      <CardsListStyle>
        {cardList.map((card, index) => {
          return <Card {...card} key={index} />;
        })}
      </CardsListStyle>
    </CardsContainer>
  );
};

export default CardContainer;
