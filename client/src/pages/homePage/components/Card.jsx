import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Details = styled.div`
  width: 230px;
  height: 230px;
  position: relative;
  /* background-color: #1aec1a; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: solid;
  border-width: 4px;
  box-shadow: 6px 15px 10px black;
  margin-top: 20px;
  border-radius: 10px;
  z-index: 10;
  &:hover {
    cursor: pointer;
    /* box-shadow: 6px 15px 10px blue; */
    transform: perspective(2000px) rotateX(0deg) rotateY(10deg) rotateZ(0deg)
      translateX(-10px) translateY(0px) translateZ(80px);
  }
`;

const CountryName = styled.div`
  width: 220px;
  position: absolute;
  top: 0.2rem;
  right: 5px;
  font-size: 1.3rem;
  text-align: center;
`;

const FlagContainer = styled.div`
  width: 200px;
  position: absolute;
  top: 3.2rem;
  left: 15px;
  display: flex;
  justify-content: center;
  height: 100px;
`;
const Flag = styled.img`
  max-height: 100%;
`;

const DataContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: row;
`;

const DataTitles = styled.div`
  width: 110px;
  height: 20px;
  font-weight: 700;
  margin-top: 2px;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 155px;
  left: 5px;
  width: 220px;
`;

function Card({ id, name, flag, continents, population }) {
  let historyObj = useHistory();
  return (
    <Details onClick={() => historyObj.push("/countries/" + id)}>
      <CountryName>{name}</CountryName>

      <FlagContainer>
        <Flag src={flag} />
      </FlagContainer>
      <InfoContainer>
        <DataContainer>
          <DataTitles>Continente:</DataTitles>
          <div>{continents}</div>
        </DataContainer>
        <DataContainer>
          <DataTitles>Poblacion:</DataTitles>
          <div>{population.toLocaleString("es-MX")}</div>
        </DataContainer>
      </InfoContainer>
    </Details>
  );
}

export default Card;
