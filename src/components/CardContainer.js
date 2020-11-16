import React, { useState, useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";
import cardList from "./houseToRent";
import axios from "axios";

const CardContainer = ({ location, type, showFilter, checked }) => {
  const CardsContainer = styled.div`
    padding-top: 20px 66px 20px 66px;
  `;
  const CardsListStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 60px;
  `;

  const [fetchedList, setFetchedList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    axios
      .get("http://localhost:3000/houseList.json", config)
      .then((res) => {
        const data = res.data;
        setFetchedList(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <CardsContainer>
      <CardsListStyle>
        {fetchedList.length ? (
          fetchedList
            .filter((card) => card.name.includes(location))
            .filter((card) => !showFilter || card.type.includes(type))
            .filter((card) => (checked ? card.available : true))
            .map((card, index) => {
              return <Card {...card} key={index} />;
            })
        ) : (
          <div>No places to sleep </div>
        )}

        {/* with import
        {cardList
          .filter((card) => card.name.includes(props.location))
          .map((card, index) => {
            return <Card {...card} key={index} />;
          })} */}
      </CardsListStyle>
    </CardsContainer>
  );
};

export default CardContainer;
