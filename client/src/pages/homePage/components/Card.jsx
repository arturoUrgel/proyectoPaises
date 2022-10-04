// import React from "react";
// /* import { useDispatch } from "react-redux"; */
// import styled from "styled-components";
// import { useHistory } from "react-router-dom";

// const CardContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: #b4ec1a;
//   height: 300px;
//   width: 300px;
//   border-style: solid;
//   margin-top: 20px;
//   border-radius: 10px;
//   box-shadow: 6px 15px 10px black;
//   &:hover {
//     cursor: pointer;
//     /* box-shadow: 6px 15px 10px blue; */
//     transform: perspective(2000px) rotateX(0deg) rotateY(10deg) rotateZ(0deg)
//       translateX(-10px) translateY(0px) translateZ(80px);
//   }
// `;

// const CountryName = styled.h3`
//   flex: 2;
//   text-align: center;
// `;
// const FlagImage = styled.img`
//   flex: 5;
//   display: block;
//   margin-left: auto;
//   margin-right: auto;
//   width: 50%;
//   border-style: solid;
// `;
// const Continents = styled.p`
//   flex: 1;
// `;

// const Id = styled.span``;

// export default function Card({ id, name, flag, continents, population }) {
//   /* const dispatch = useDispatch(); */
//   let historyObj = useHistory();
//   return (
//     <CardContainer onClick={() => historyObj.push("/countries/" + id)}>
//       <Id>{id}</Id>
//       <CountryName>{name}</CountryName>
//       <FlagImage src={flag} alt={name} />
//       <p>{`Continente: ${continents}`}</p>
//       <div>Poblacion: {population}</div>
//     </CardContainer>
//   );
// }
//export default CountryDetail;
import React, { useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";

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
`;

const CountryName = styled.div`
  width: 240px;
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
    <Details>
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
