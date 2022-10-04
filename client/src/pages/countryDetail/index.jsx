import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetails } from "../../redux/actions";
import styled from "styled-components";
import ActivityCard from "./components/ActivityCard";

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
const Details = styled.div`
  width: 500px;
  height: 600px;
  position: relative;
  background-color: #1aec1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: solid;
  border-width: 4px;
`;

const IdContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0.5rem;
  font-size: 2rem;
`;

const CountryName = styled.div`
  width: 450px;
  position: absolute;
  top: 2rem;
  right: 25px;
  font-size: 3rem;
  text-align: center;
`;

const FlagContainer = styled.div`
  width: 450px;
  position: absolute;
  top: 6rem;
  left: 25px;
  display: flex;
  justify-content: center;
  height: 150px;
`;
const Flag = styled.img`
  max-height: 100%;
`;

const DataContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: row;
`;

const DataTitles = styled.div`
  width: 110px;
  height: 20px;
  font-weight: 700;
  margin-top: 2px;
`;

const ActContainer = styled.div`
  width: 450px;
  height: 200px;
  background-color: #fcf1f1;
  position: absolute;
  bottom: 0;
  left: 25px;
  margin-bottom: 1rem;
  overflow-y: auto;
`;
const ActTitle = styled.div`
  font-size: 1.5rem;
  width: 450px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 0.5rem;

`

const ActCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 260px;
  left: 25px;
  width: 450px;
`;

function CountryDetail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryDetail);

  useEffect(() => dispatch(getCountryDetails(id)), []);

  return (
    <DetailContainer>
      <Details>
        {countryDetail.name ? (
          <div>
            <IdContainer>{countryDetail.id}</IdContainer>
            <CountryName>{countryDetail.name}</CountryName>
            <FlagContainer>
              <img src={countryDetail.flag} />
            </FlagContainer>
            <InfoContainer>
              <DataContainer>
                <DataTitles>Capital:</DataTitles>
                <div>{countryDetail.capital}</div>
              </DataContainer>
              <DataContainer>
                <DataTitles>Continents:</DataTitles>
                <div>{countryDetail.continents}</div>
              </DataContainer>
              <DataContainer>
                <DataTitles>Subregion:</DataTitles>
                <div>{countryDetail.subregion}</div>
              </DataContainer>
              <DataContainer>
                <DataTitles>Area en km2:</DataTitles>
                <div>{countryDetail.area.toLocaleString("es-MX")}</div>
              </DataContainer>
              <DataContainer>
                <DataTitles>Poblacion:</DataTitles>
                <div>{countryDetail.population.toLocaleString("es-MX")}</div>
              </DataContainer>
            </InfoContainer>
            <ActContainer>
              <ActTitle>Actividades</ActTitle>
              <ActCard>
                {countryDetail.activities?.map((ele) => (
                  <ActivityCard
                    name={ele.name}
                    difficulty={ele.difficulty}
                    season={ele.season}
                    duration={ele.duration}
                  />
                ))}
              </ActCard>
            </ActContainer>
          </div>
        ) : (
          <div>Pais no existe</div>
        )}
      </Details>
    </DetailContainer>
  );
}

export default CountryDetail;
