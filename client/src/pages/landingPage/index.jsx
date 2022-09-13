import React from "react";
import styled from "styled-components";
import backImage from "../../assets/IMG_20181129_154447.jpg";
import { Link } from "react-router-dom";

const Image = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const BtnHome = styled(Link)`
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
`;

export default function LandingPage() {
  return (
    <Image>
      <BtnHome to="/home">Click me</BtnHome>
    </Image>
  );
}
