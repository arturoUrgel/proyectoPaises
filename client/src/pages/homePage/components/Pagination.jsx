import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 1.5rem;
  margin-left: 20%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-weight: 500;
  font-size: 20px;
`;
const ButtonGo = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 500;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    font-weight: 700;
  }
`


let maxPage;

export default function Pagination({
  items,
  itemsPerPages,
  handlerClick,
  currentPage,
}) {
  maxPage = Math.ceil(items / itemsPerPages);
  const handlerLocal = (e) => {
    e.target.name === "next"
      ? handlerClick(++currentPage * itemsPerPages, currentPage)
      : handlerClick(--currentPage * itemsPerPages, currentPage);
  };

  return (
    <Container>
      {currentPage !== 1 ? (
        <ButtonGo name="prev" onClick={handlerLocal}>
          PREV
        </ButtonGo>
      ) : (
        false
      )}
      {currentPage <= maxPage ? (
        <div>
          {" "}
          {currentPage} of {maxPage}
        </div>
      ) : (
        false
      )}

      {currentPage < maxPage ? (
        <ButtonGo name="next" onClick={handlerLocal}>
          NEXT
        </ButtonGo>
      ) : (
        false
      )}
    </Container>
  );
}
