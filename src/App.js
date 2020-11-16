import HeroHeader from "./components/HeroHeader";
import NavBar from "./components/NavBar";
import FiltersBar from "./components/FiltersBar";
import CardContainer from "./components/CardContainer";
import styled from "styled-components";
import React, { useState } from "react";

function App() {
  const Body = styled.div`
    padding: 0;
    margin: 0;
    width: 100vw;
    font-family: roboto, sans-serif;
  `;
  const NavContainer = styled.nav`
    color: white;
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 60px;
    padding-right: 60px;
  `;

  const [location, setLocation] = useState("");
  const [type, setType] = useState("All");
  const [showFilter, setShowFilter] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [checked, setChecked] = useState(false);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSelectTypeLogement = (e) => {
    setType(e.target.value);
    if (e.target.value === "All") {
      setShowFilter(false);
    } else {
      setShowFilter(true);
    }
  };

  const handleOnCheck = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <Body>
      <NavContainer>
        <NavBar />
        <FiltersBar
          handleInputChange={handleInputChange}
          handleSelectTypeLogement={handleSelectTypeLogement}
          handleOnCheck={handleOnCheck}
          type={type}
          checked={checked}
          location={location}
        />
      </NavContainer>

      <HeroHeader />

      <CardContainer
        location={location}
        type={type}
        showFilter={showFilter}
        checked={checked}
      />
    </Body>
  );
}

export default App;
