import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetails } from "../../redux/actions";
import styled from "styled-components";

const DetailContainer = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: #1aec1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function CountryDetail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryDetail);

  useEffect(() => dispatch(getCountryDetails(id)), []);

  return (
    <DetailContainer>
      {countryDetail.name ? (
        <div>
          <img src={countryDetail.flag} />
          <div>{countryDetail.id}</div>
          <div>{countryDetail.name}</div>
          <div>capital {countryDetail.capital}</div>
          <div>continents {countryDetail.continents}</div>
          <div>Subregion {countryDetail.subregion}</div>
          <div>Area en km2 {countryDetail.area}</div>
          <div>Poblacion {countryDetail.population}</div>
          <div>actividades {countryDetail.population}</div>
          {countryDetail.activities?.map((ele) => (
            <div>
              <div>{ele.name}</div>
              <div>{ele.difficulty}</div>
              <div>{ele.duration}</div>
              <div>{ele.season}</div>
            </div>
          ))}

          {console.log("detalle pais", countryDetail)}
        </div>
      ) : (
        <div>Pais no existe</div>
      )}
    </DetailContainer>
  );
}

export default CountryDetail;
