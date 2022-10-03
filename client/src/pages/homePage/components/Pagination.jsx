import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 1rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
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
        <button name="prev" onClick={handlerLocal}>
          Prev
        </button>
      ) : (
        false
      )}
      {currentPage <= maxPage ? (
        <div>
          {" "}
          {currentPage} de {maxPage} paginas{" "}
        </div>
      ) : (
        false
      )}

      {currentPage < maxPage ? (
        <button name="next" onClick={handlerLocal}>
          next
        </button>
      ) : (
        false
      )}
    </Container>
  );
}
