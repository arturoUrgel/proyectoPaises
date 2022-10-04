import React from "react";
import styled from "styled-components";

const FilterBar = styled.div`
  /* background-color: #1aec6a; */
  margin-left: 10px;
  flex: 2;
  height: 100%;
`;
const FilterTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 8px;
  margin-bottom: 4px;
`;
const ContinentsFilter = styled.label`
  margin-left: 10px;
  font-size: 1rem;
`;

export default function Filter({ handler, selected }) {
  const onCheckboxClick = (e) => {
    handler(e.target.name, e.target.checked);
  };

  return (
    <FilterBar>
      <FilterTitle> Por Continentes</FilterTitle>
      {Object.keys(selected).map((continent, index) => (
        <div key={index}>
          <input
            name={continent}
            type="checkbox"
            checked={selected[continent]}
            onChange={onCheckboxClick}
          />
          <ContinentsFilter>{continent}</ContinentsFilter>
        </div>
      ))}
    </FilterBar>
  );
}
