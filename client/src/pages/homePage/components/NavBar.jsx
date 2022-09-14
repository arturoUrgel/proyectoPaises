import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const SearchInput = styled.input`
  height: 2rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: white;
  flex: 10;
  margin-bottom: 10px;
`;
const SearchButton = styled.button`
  width: 10%;
  height: 2.4rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: white;
  flex: 1;
  margin-bottom: 10px;
`;

const Header = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #eafa11;
  flex: 2;
`;
const SearchBar = styled.div`
  width: 40%;
  height: 2rem;
  background-color: white;
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  position: relative;
`;
const HeaderContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: #eafa11;
  /* flex: 2; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: fixed;
  top:0;
  left:0; */
`;

/* const Prueba = styled.div`
  width: 100px;
  height: 100px;
  background-color: #1163fa;
  position: absolute;
  top: 50%;
`; */

export default function NavBar() {
  const allCountries = useSelector((state) => state.countries);
  const [countrieSearch, setCountrieSearch] = useState("");

  const handleInputChange = (e) => {
    setCountrieSearch(e.target.value);
  };

  return (
    <HeaderContainer>
      <Header>Listado Paises</Header>
      <SearchBar>
        <SearchInput
          type="text"
          name="searchCountries"
          placeholder="Buscar Paises..."
          onChange={handleInputChange}
          value={countrieSearch}
        />

        <SearchButton>PRESS</SearchButton>
        {/* <Prueba>hola vieja</Prueba> */}
      </SearchBar>
    </HeaderContainer>
  );
}
