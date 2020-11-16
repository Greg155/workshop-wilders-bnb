import React from "react";
import styled from "styled-components";

const Card = ({ name, desc, img }) => {
  const CardContainer = styled.div`
    width: 30%;
    margin: 20px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  `;

  const CardImg = styled.div`
    height: 40vh;
    width: 100%;
    border-radius: 10px 10px 0 0;
    background-size: cover;
    background-position: center;
    background-image: url(${img});
  `;

  const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 16px 16px;
  `;

  const CardButton = styled.div`
    border: none;
    border-radius: 16px;
    height: 50px;
    background-color: white;
    width: 60px;
    position: relative;
    bottom: 260px;
    left: 350px;
  `;

  return (
    <CardContainer>
      <CardImg />
      <CardBody>
        <h1>{name}</h1>
        <h2>{desc}</h2>
        <CardButton />
      </CardBody>
    </CardContainer>
  );
};

export default Card;
