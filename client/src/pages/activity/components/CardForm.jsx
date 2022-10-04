import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #b4ec1a;
  height: 65px;
  width: 70px;
  margin: 2px;
  border-style: solid;
  border-width: 1px;
  align-items:  center;
  z-index: 10;
`;

const CountryName = styled.span`
  margin-top: 12px;
  text-align: center;
`;
const FlagImage = styled.img`
  /* flex: 5; */
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 65%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export default function CardForm({ id, name, flag, onClose }) {

  return (
    <CardContainer>
      <CountryName>{id}</CountryName>
      <FlagImage src={flag} alt={name} />
      <CloseButton onClick={onClose} name={id}>x</CloseButton>
    </CardContainer>
  );
}
