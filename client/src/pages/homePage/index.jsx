import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import Pagination from "./components/Pagination";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: #1aec1a;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
`;

const SearchData = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: yellow;
  /*   flex: 8; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start
`;

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const [itemsPerPages, setItemsPerPages] = useState(9);
  const [initialItem, setInitialItem] = useState(9);
  const [continents, setContinents] = useState({
    Africa: true,
    Antarctica: true,
    Asia: true,
    Europe: true,
    North_America: true,
    Oceania: true,
    South_America: true,
  });

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);
  useEffect(() => {
    filterAll();
  }, [continents, allCountries]);

  const onCheckboxClick = (name, checked) => {
    setContinents({ ...continents, [name]: checked });
  };

  const handlerClick = (currentPage) => {
    setInitialItem(currentPage)
    /* window.scrollTo(0, 0) */
  };

  const filterAll = () => {
    let aux = [];

    for (const property in continents) {
      if (continents[property]) aux.push(property.split("_").join(" "));
    }
    setDisplayedCountries(
      allCountries
        .filter(
          (cont) => aux.filter((ele) => ele === cont.continents).length > 0
        )
        .sort((a, b) => a.name.localeCompare(b.name)) /* .reverse() */
    );
  };

  return (
    <HomeContainer>
      <NavBar />
      <SearchData>
        <Filter selected={continents} handler={onCheckboxClick} />
        <Cards
          display={displayedCountries.slice(
            (initialItem - itemsPerPages),
            initialItem
          )}
        />
      </SearchData>
      <Pagination
        items={displayedCountries.length}
        itemsPerPages={itemsPerPages}
        handlerClick={handlerClick}
      />
    </HomeContainer>
  );
}
