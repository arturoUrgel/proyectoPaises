import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllActivities,
  getAllCountries,
  updateContFilter,
  updateOrder,
} from "../../redux/actions";
import Pagination from "./components/Pagination";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 60px);
  background-color: #ccd1d1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SearchData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const continents = useSelector((state) => state.contFilter);
  const orderFilter = useSelector((state) => state.orderFilter);
  const activities = useSelector((state) => state.activities);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const [itemsPerPages, setItemsPerPages] = useState(8);
  const [initialItem, setInitialItem] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllActivities());
    dispatch(getAllCountries());
  }, []);
  useEffect(() => {
    filterAll();
    handlerClick(itemsPerPages, 1);
  }, [continents, allCountries, orderFilter]);

  const onCheckboxClick = (name, checked) => {
    dispatch(updateContFilter({ name, checked }));
  };
  const onOrderSelect = (name, value) => {
    dispatch(updateOrder({ name, value }));
  };

  const handlerClick = (currentItems, currentPage) => {
    setInitialItem(currentItems);
    setCurrentPage(currentPage);
    /* window.scrollTo(0, 0) */
  };

  const filterAll = () => {
    let aux = [];
    let filtered = [];

    for (const property in continents) {
      if (continents[property]) aux.push(property.split("_").join(" "));
    }
    if (orderFilter.orderBy === "name") {
      filtered = allCountries
        .filter(
          (cont) => aux.filter((ele) => ele === cont.continents).length > 0
        )
        .sort((a, b) => a.name.localeCompare(b.name));
      if (orderFilter.az === "des") filtered = filtered.reverse();
    } else {
      filtered = allCountries.filter(
        (cont) => aux.filter((ele) => ele === cont.continents).length > 0
      );
      if (orderFilter.az === "asc") {
        filtered = filtered.sort((a, b) => a.population - b.population);
      } else {
        filtered = filtered.sort((a, b) => b.population - a.population);
      }
    }

    /* if (orderFilter.az === "des") filtered = filtered.reverse(); */
    setDisplayedCountries(filtered);
  };

  return (
    <HomeContainer>{console.log("activities",activities)}
      <SearchData>
        <Filter
          selected={continents}
          handler={onCheckboxClick}
          handlerSelect={onOrderSelect}
          selectState={orderFilter}
          activityState={activities}
          /* handlerActivity={onActivitySelect} */
        />
        <Cards
          display={displayedCountries.slice(
            initialItem - itemsPerPages,
            initialItem
          )}
        />
      </SearchData>
      <Pagination
        items={displayedCountries.length}
        itemsPerPages={itemsPerPages}
        handlerClick={handlerClick}
        currentPage={currentPage}
      />
    </HomeContainer>
  );
}
