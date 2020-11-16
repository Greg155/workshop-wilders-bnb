import HeroHeader from "./components/HeroHeader";
import NavBar from "./components/NavBar";
import FiltersBar from "./components/FiltersBar";
import CardContainer from "./components/CardContainer";
import styled from "styled-components";

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

  return (
    <Body>
      <NavContainer>
        <NavBar />
        <FiltersBar />
      </NavContainer>

      <HeroHeader />

      <CardContainer />
    </Body>
  );
}

export default App;
