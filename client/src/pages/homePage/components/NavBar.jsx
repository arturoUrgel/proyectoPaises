import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const SearchInput = styled.input`
  height: 2rem;
  background-color: white;
  width: calc(100% - 10px);
  border: none;
  padding: 0;
  padding-left: 10px;
  /* position: relative; */
  &:focus-visible {
    outline: none;
  }
`;
const SearchButton = styled.button`
  width: 10%;
  height: 2rem;
  border: none;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  
  /* &:hover {
    cursor: pointer;
    background-color: blue;
  } */
`;

const Header = styled.div`
  width: 90%;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #F0F012;
  flex: 2;
`;
const SearchBar = styled.form`
  width: 50%;
  background-color: white;
  position: absolute;
  left: 25%;
  border-radius: 2px;
  z-index: 20;
  /* position: relative; */
`;
const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #F0F012;
  
`;
const SuggestionList = styled.ul`
  background-color: lightcyan;
  list-style-type: none;
  padding: 0;
`;

const SuggestionItem = styled.li`
  list-style: none;
  padding: 10px 5px 10px 10px;
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: blue;
  }
  /* &::before {
    position: absolute;
    top: calc(50% + 0.5em);
    left: 0.5em;
    content: "◀";
  } */
`;

export default function NavBar() {
  const allCountries = useSelector((state) => state.countries);
  const [countrieSearch, setCountrieSearch] = useState("");
  const [search, setSearch] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  let historyObj = useHistory();

  const handleInputChange = (e) => {
    setCountrieSearch(e.target.value);
  };
  useEffect(() => {
    handleSuggestion();
  }, [countrieSearch]);

  const handleSuggestion = () => {
    if (countrieSearch.length >= 3) {
      setSearch(
        allCountries.filter((ele) =>
          ele.name.toLowerCase().includes(countrieSearch.toLowerCase())
        )
      );
    } else {
      setSearch("");
    }
  };

  return (
    <HeaderContainer>
      <Header>Listado Paises</Header>
      <SearchBar
        onFocus={(e) => setInputFocus(true)}
        onBlur={(e) => setInputFocus(false)}
        autocomplete="nope"
        onSubmit={(e) => {
          e.preventDefault();
          search
            ? historyObj.push("/countries/" + search[0].id)
            : setCountrieSearch("");
        }}
      >
        <div>
          <SearchButton>
            <ion-icon name="Search-sharp"></ion-icon>
          </SearchButton>
          <SearchInput
            type="text"
            name="searchCountries"
            placeholder="Buscar Paises..."
            onChange={handleInputChange}
            value={countrieSearch}
            autocapitalize="off"
            autocorrect="off"
            spellcheck="false"
            autoComplete="off"
            tabindex="2"
          />
        </div>

        {search.length > 0 && inputFocus && (
          <SuggestionList>
            {search.sort((a, b) => a.name.localeCompare(b.name)).map((ele) => (
              <div
                key={ele.id}
                onMouseDown={() => historyObj.push("/countries/" + ele.id)}
              >
                <SuggestionItem key={ele.id}>
                  <img
                    src={ele.flag}
                    style={{
                      height: "2rem",
                      paddingRight: "1rem",
                      width: "3rem",
                    }}
                  />
                  <span>{ele.name}</span>
                </SuggestionItem>
              </div>
            ))}
          </SuggestionList>
        )}
      </SearchBar>
      <div onClick={()=>historyObj.push("activities/createActivity")}>Agregar Actividades</div>
    </HeaderContainer>
  );
}
