import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetails } from "../../redux/actions";
import styled from "styled-components";
import ActivityCard from "./components/ActivityCard";

const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 60px);
  /* background-color: #fad7a0; */
  background-color: #CCD1D1 ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Details = styled.div`
  width: 700px;
  height: 500px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: solid;
  border-width: 4px;
`;

const CountryData = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: space-between;
`;

const IdContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0.5rem;
  font-size: 1.5rem;
`;

const CountryName = styled.div`
  margin-top: 2rem;
  font-size: 3rem;
  text-align: center;
`;

const FlagContainer = styled.div`
  width: 345px;

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
  width: 350px;
  height: 450px;
  position: absolute;
  bottom: 0;
  right: 5px;
  margin-bottom: 1rem;
`;
const ActTitle = styled.div`
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;

const ActCard = styled.div`
  display: flex;
  height: 400px;
  border: solid;
  border-width: 1px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: auto;
`;

const InfoContainer = styled.div`
  margin-bottom: 1rem;
`;

const Error = styled.div`
font-weight: 600;
  display: flex;
  height: 100%;
  font-size: 18px;
  align-items: center;
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
            <CountryData>
              <IdContainer>{countryDetail.id}</IdContainer>
              <CountryName>{countryDetail.name}</CountryName>
              <FlagContainer>
                <Flag src={countryDetail.flag} />
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
            </CountryData>
            <ActContainer>
              <ActTitle>Activities</ActTitle>
              <ActCard>
                {countryDetail.activities.length > 0 ? (
                  countryDetail.activities?.map((ele, id) => (
                    <ActivityCard
                      key={id}
                      name={ele.name}
                      difficulty={ele.difficulty}
                      season={ele.season}
                      duration={ele.duration}
                    />
                  ))
                ) : (
                  <Error>No activities to show</Error>
                )}
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
