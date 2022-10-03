import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
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

const SearchBar = styled.div`
  width: 80%;
  background-color: white;
  position: absolute;
  left: 10%;
  border-radius: 2px;
  z-index: ${(props) => props.zIndex};

  /* position: relative; */
`;
const HeaderContainer = styled.div`
  width: 400px;
  height: 40px;
  position: relative;
`;
const SuggestionList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-height: 150px;
  overflow-y: scroll;
  position: relative;
`;

const SuggestionItem = styled.li`
  list-style: none;
  padding: 10px 5px 10px 10px;

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

export default function SearchInputBar({
  handleSubmit,
  charMin,
  data,
  ph,
  zIndex,
}) {
  const [dataSearch, setDataSearch] = useState("");
  const [search, setSearch] = useState("");
  const [inputFocus, setInputFocus] = useState(false);

  const handleInputChange = (e) => {
    setDataSearch(e.target.value);
  };
  useEffect(() => {
    handleSuggestion();
  }, [dataSearch]);

  const handleSuggestion = () => {
    if (dataSearch.length >= charMin) {
      setSearch(
        data
          .sort((a, b) => a.name.localeCompare(b.name))
          .filter((ele) =>
            ele.name.toLowerCase().includes(dataSearch.toLowerCase())
          )
      );
    } else {
      setSearch("");
    }
  };

  return (
    <HeaderContainer>
      <SearchBar
        zIndex={zIndex}
        onFocus={(e) => setInputFocus(true)}
        onBlur={(e) => setInputFocus(false)}
        autocomplete="nope"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <SearchButton>
            <ion-icon name="Search-sharp"></ion-icon>
          </SearchButton>
          <SearchInput
            type="text"
            name="searchCountries"
            placeholder={ph}
            onChange={handleInputChange}
            value={dataSearch}
            autocapitalize="off"
            autocorrect="off"
            spellcheck="false"
            autoComplete="off"
            tabindex="2"
          />
        </div>

        {search.length > 0 && inputFocus && (
          <SuggestionList>
            {search.map((ele) => (
              <div
                key={ele.id}
                onMouseDown={() => {
                  handleSubmit(ele.id);
                  setDataSearch("");
                }}
              >
                <SuggestionItem key={ele.id}>
                  <img
                    src={ele.flag}
                    style={{
                      height: "1rem",
                      paddingRight: "1rem",
                      width: "1.5rem",
                    }}
                  />
                  <span>{ele.name}</span>
                </SuggestionItem>
              </div>
            ))}
          </SuggestionList>
        )}
      </SearchBar>
    </HeaderContainer>
  );
}
