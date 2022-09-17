import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams } from 'react-router-dom';
import { getCountryDetails } from "../../redux/actions";

function CountryDetail(props) {
  const {id} = useParams()
  const dispatch = useDispatch()
  const countryDetail = useSelector((state) => state.countryDetail);

  useEffect(()=>dispatch(getCountryDetails(id)),[])

  
  return (
    <div>
      <img src={countryDetail.flag}/>
      <div>{countryDetail.name}</div>
      <div>capital {countryDetail.capital}</div>
      <div>continents {countryDetail.continents}</div>
     
    </div>
  );
}

export default CountryDetail;
