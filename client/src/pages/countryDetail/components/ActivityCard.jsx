import React from "react";
import styled from "styled-components";

const CardContaines = styled.div`
  border: solid;
  border-width: 2px;
  width: 180px;
  height: 100px;
  margin: 2px;
`;
const Name = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  width: 100%;
  text-align: center;
  margin-bottom: 7px;
`;
const Info = styled.div`
  font-size: 1rem;
  width: 100%;
  text-align: start;
`;

function ActivityCard({ name, difficulty, season, duration }) {
  return (
    <CardContaines>
      <Name>{name}</Name>
      <Info>Dificultad: {difficulty}</Info>
      <Info>Temporada: {season}</Info>
      <Info>Duracion: {duration}hs</Info>
    </CardContaines>
  );
}

export default ActivityCard;
