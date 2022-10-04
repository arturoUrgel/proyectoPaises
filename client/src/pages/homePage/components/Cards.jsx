import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Data = styled.div`
  flex: 8;
  /* background-color: #ec8a1a; */
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function Cards({display}) {
  return (
    <Data>
      {display.length > 0 &&
        display.map((country) => (
          <Card
            key={country.id}
            id={country.id}
            name={country.name}
            continents={country.continents}
            flag={country.flag}
            population={country.population}
          />
        ))}
    </Data>
  );
}
