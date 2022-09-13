import React from "react";
import styled from "styled-components";

const FilterBar = styled.div`
  background-color: #1aec6a;
  flex: 2;
  height: 100%;
`;

export default function Filter({ handler, selected }) {
  const onCheckboxClick = (e) => {
    handler(e.target.name, e.target.checked);
  };

  return (
    <FilterBar>
      {Object.keys(selected).map((continent, index) => (
        <div key={index}>
          <input
            name={continent}
            type="checkbox"
            checked={selected[continent]}
            onChange={onCheckboxClick}
          />
          <label>{continent}</label>
        </div>
      ))}
    </FilterBar>
  );
}
