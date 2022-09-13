import React from "react";
import styled from "styled-components";

  const pages = [];
  let currentPage = 0;

export default function Pagination({
  items,
  itemsPerPages,
  setInitialItem,
  setLastItem,
}) {

  for (let i = 0; i < Math.ceil(items / itemsPerPages); i++) {
    pages.push(i);
  }
  const handlerClick = () => {
    console.log("PREV",currentPage)
    --currentPage
    setInitialItem(currentPage * itemsPerPages);
    setLastItem((currentPage+1) * itemsPerPages);
    console.log("PREV",currentPage)
  };
  const handlerClickNext = () => {
    console.log("NEXT",currentPage)
    ++currentPage
    setInitialItem(currentPage * itemsPerPages);
    setLastItem((currentPage+1) * itemsPerPages);
    console.log("NEXT",currentPage)
    window.scrollTo(0, 0)
  };

  return (
    <div>
      <button onClick={handlerClick}>prev</button>
      <button onClick={handlerClickNext}>next</button>
      <div>{currentPage}</div>
    </div>
  );
}
