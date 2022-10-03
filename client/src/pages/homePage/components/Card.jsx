import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #b4ec1a;
  height: 300px;
  width: 300px;
  border-style: solid;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 6px 15px 10px black;
  &:hover {
    cursor: pointer;
    /* box-shadow: 6px 15px 10px blue; */
    transform: perspective(2000px) rotateX(0deg) rotateY(10deg) rotateZ(0deg) translateX(-10px) translateY(0px) translateZ(80px);
  }
`;

const CountryName = styled.h3`
  flex: 2;
  text-align: center;
`;
const FlagImage = styled.img`
  flex: 5;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border-style: solid;
`;
const Continents = styled.p`
  flex: 1;
`;


const Id = styled.span`
  
`

export default function Card({ id, name, flag, continents }) {
  const dispatch = useDispatch();
  let historyObj = useHistory();
  return (
    <CardContainer onClick={()=>historyObj.push("/countries/" + id)}>
      <Id>{id}</Id>
      <CountryName>{name}</CountryName>
      <FlagImage src={flag} alt={name} />
      <p>{`Continente: ${continents}`}</p>
    </CardContainer>
  );
}
