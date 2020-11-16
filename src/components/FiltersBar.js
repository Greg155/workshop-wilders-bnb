import React from "react";
import styled from "styled-components";

const FiltersBar = () => {
  const FiltersBarStyle = styled.div`
    display: flex;
    margin: 0 auto;
    width: 60%;
    height: 66px;
    align-items: center;
    justify-content: space-around;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 32px;
    background-color: rgb(247, 247, 247);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px,
      rgba(0, 0, 0, 0.1) 0px 3px 8px;
  `;

  const CustomInput = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Label = styled.label`
    color: black;
    font-weight: 800;
    letter-spacing: 0.04em;
    font-size: 12px;
    line-height: 16px;
    padding-bottom: 4px;
  `;

  const Input = styled.input`
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
  `;

  const InputCheckbox = styled.input`
    height: 20px;
  `;
  const Select = styled.select`
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
  `;

  return (
    <FiltersBarStyle>
      <CustomInput>
        <Label for="name">Lieux</Label>
        <Input
          class="search-input"
          type="text"
          name="name"
          placeholder="Ou voyagez-vous ?"
        />
      </CustomInput>
      <CustomInput>
        <Label for="type">Type de logement</Label>
        <Select class="select">
          <option value="All">All</option>
          <option value="Flat">Flat</option>
          <option value="House">House</option>
        </Select>
      </CustomInput>
      <CustomInput>
        <Label for="available">Dispo ce soir</Label>
        <InputCheckbox
          type="checkbox"
          name="available-checkbox"
          class="available-checkbox"
          id=""
        />
      </CustomInput>
    </FiltersBarStyle>
  );
};

export default FiltersBar;
