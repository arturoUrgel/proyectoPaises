import React from "react";
import styled from "styled-components";



export default function Filter({
  handler,
  selected,
  handlerSelect,
  selectState,
  activityState,
  handlerActivity,
}) {
  const onCheckboxClick = (e) => {
    handler(e.target.name, e.target.checked);
  };

  return (
    <FilterBar>
      <FilterTitle>Continent Filter</FilterTitle>
      {Object.keys(selected).map((continent, index) => (
        <LabelContainer key={index}>
          <CheckBox
            name={continent}
            type="checkbox"
            checked={selected[continent]}
            onChange={onCheckboxClick}
          />
          <ContinentsFilter>{continent}</ContinentsFilter>
        </LabelContainer>
      ))}
      <FilterTitle>Order </FilterTitle>
      <LabelContainer>
        <Order>By</Order>
        <SelectStyle
          name="orderBy"
          value={selectState.orderBy}
          onChange={(e) => handlerSelect(e.target.name, e.target.value)}
        >
          <option value="poputation">Population</option>
          <option value="name">Name</option>
        </SelectStyle>
      </LabelContainer>
      <LabelContainer>
        <Order>Sort</Order>
        <SelectStyle
          name="az"
          value={selectState.az}
          onChange={(e) => handlerSelect(e.target.name, e.target.value)}
        >
          <option value="asc">ASC</option>
          <option value="des">DESC</option>
        </SelectStyle>
      </LabelContainer>

      <FilterTitle>Filter Activity </FilterTitle>

      <LabelContainer>
        <SelectStyle name="activityBy">
          <option value="All">All</option>
          {activityState?.map((activity, index) => (
            <option key={index} value="activity.name">
              {activity.name}
            </option>
          ))}
        </SelectStyle>
      </LabelContainer>
    </FilterBar>
  );
}


const Order = styled.div`
  width: 35px;
  display: flex;
  align-items: center;
`
const SelectStyle = styled.select`
  background: transparent;
  border-radius: 5px;
`

const FilterBar = styled.div`
  margin-left: 10px;
  flex: 2;
  height: 100%;
  min-height: calc(100vh-60px);
`;
const FilterTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 8px;
  margin-bottom: 4px;
`;
const ContinentsFilter = styled.div`
  margin-left: 10px;
  font-size: 0.8rem;
  font-weight: 400;
`;

const LabelContainer = styled.div`
  display: flex;
  margin-top: 2px;
  margin-bottom: 2px;
`;

const CheckBox = styled.input`
  -webkit-appearance: none;
  background-color: #fafafa;
  border: 1px solid #cacece;
  padding: 7px;
  border-radius: 50px;
  display: inline-block;
  position: relative;
  &&:checked {
    background-color: #2ee44c;
    border: 1px solid #adb8c0;
    color: #99a1a7;
  }
`;