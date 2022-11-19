import React from "react";
import styled from "styled-components";
import backImage from "../../assets/IMG_20181129_154447.jpg";
import { useHistory } from "react-router-dom";

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




export default function LandingPage() {
  let historyObj = useHistory()
  return (
    <Image>
      {/* <BtnHome to="/home">Click me</BtnHome> */}
      <SubmitButton onClick={() => historyObj.push("/home")}>Welcome Countries!!</SubmitButton>
    </Image>
  );
}


const SubmitButton = styled.button`
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-image: linear-gradient(#42a1ec, #0070c9);
  border: 1px solid #0077cc;
  border-radius: 10px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  direction: ltr;
  display: block;
  font-family: "SF Pro Text", "SF Pro Icons", "AOS Icons", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.022em;
  line-height: 1.47059;
  min-width: 30px;
  overflow: visible;
  padding: 4px 15px;
  text-align: center;
  /* vertical-align: baseline; */
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;

  &:disabled {
    cursor: default;
    opacity: 0.3;
  }

  &:hover {
    background-image: linear-gradient(#51a9ee, #147bcd);
    border-color: #1482d0;
    text-decoration: none;
  }

  &:active {
    background-image: linear-gradient(#3d94d9, #0067b9);
    border-color: #006dbc;
    outline: none;
  }

  &:focus {
    box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;
    outline: none;
  }
`;