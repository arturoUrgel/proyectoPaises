import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  border-style:solid;
`;
const Continents = styled.p`
  flex: 1;
`;

const DetailLink = styled(Link)`
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  flex: 2;
  &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
`;

export default function Card({ id, name, flag, continents }) {
  const dispatch = useDispatch();
  return (
    <CardContainer>
      <CountryName>{name}</CountryName>
      <FlagImage src={flag} alt={name} />
      <p>{`Continente: ${continents}`}</p>
      <DetailLink to={`/product/${id}`}>{name}</DetailLink>
    </CardContainer>
  );
}
