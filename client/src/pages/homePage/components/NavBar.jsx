import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";



export default function NavBar() {
  const allCountries = useSelector((state) => state.countries);
  const [countrieSearch, setCountrieSearch] = useState("");
  const [search, setSearch] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const historyObj = useHistory();
  const isHomePage = useRouteMatch("/home");

  const handleInputChange = (e) => {
    setCountrieSearch(e.target.value);
  };
  useEffect(() => {
    handleSuggestion();
  }, [countrieSearch]);// eslint-disable-line

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
    <BarContainer>
      <Logo>Henry Countries</Logo>
      {isHomePage && (
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
              {search
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((ele) => (
                  <div
                    key={ele.id}
                    onMouseDown={() => historyObj.push("/countries/" + ele.id)}
                  >
                    <SuggestionItem key={ele.id}>
                      <img
                        alt={"flag"}
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
      )}
      <ButtonContainer>
        <LinksTo onClick={() => historyObj.push("/home")}>HOME</LinksTo>
        <LinksTo onClick={() => historyObj.push("/activities/createActivity")}>
          CREATE ACTIVITY
        </LinksTo>
      </ButtonContainer>
    </BarContainer>
  );
}

const SearchInput = styled.input`
  height: 2rem;
  background-color: white;
  width: calc(100% - 10px);
  border: none;
  padding: 0;
  padding-left: 10px;
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
`;
const SearchBar = styled.form`
  width: 50%;
  background-color: white;
  position: absolute;
  left: 25%;
  top: 10%;
  border-radius: 2px;
  z-index: 20;
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
`;
const BarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f0f012;
  position: relative;
`;

const Logo = styled.div`
  position: absolute;
  left: 0;
  top: 8%;
  width: 10%;
  height: 50%;
  margin-left: 10px;
  font-weight: 600;
  font-size: 1.4rem;
`;

const LinksTo = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    font-weight: 700;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  top: 25%;
  width: 20%;
  height: 50%;
  margin-right: 5px;
`;