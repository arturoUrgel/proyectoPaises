import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import NavBar from "../homePage/components/NavBar";
import { getAllActivities, getAllCountries } from "../../redux/actions";
import SearchCountries from "./components/SearchCountries";
import CardForm from "./components/CardForm";
import SearchInputBar from "./components/SearchInputBar";

const FormContainer = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: #1aec1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  width: 500px;
  height: 500px;
  background-color: #1aec1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid;
  border-width: 4px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 300px;
  height: 200px;
  overflow-y: auto;
  border: solid;
  border-width: 2px;
`;

export function validate(activity) {
  let errors = {};
  if (!activity.activityName) {
    errors.activityName = "activityName is required";
  } else if (!/\S+@\S+\.\S+/.test(activity.activityName)) {
    errors.activityName = "activityName is invalid";
  }

  if (activity.difficulty === "Seleccionar Dificultad") {
    errors.difficulty = "difficulty is required";
  } /* else if (!/(?=.*[0-9])/.test(activity.difficulty)) {
    errors.difficulty = "difficulty is invalid";
  } */
  if (!activity.duration) {
    errors.duration = "duration is required";
  } else if (!/(?=.*[0-9])/.test(activity.difficulty)) {
    errors.duration = "duration is invalid";
  }
  if (activity.season === "Seleccionar Temporada") {
    errors.season = "season is required";
  } /* else if (!/(?=.*[0-9])/.test(activity.difficulty)) {
    errors.season = "season is invalid";
  } */

  return errors;
}

export default function FormActivity() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllActivities());
    dispatch(getAllCountries());
  }, []);
  const allCountries = useSelector((state) => state.countries);
  const allActivities = useSelector((state) => state.activities);

  const [activity, setActivity] = useState({
    activityName: "",
    difficulty: "Seleccionar Dificultad",
    duration: "0",
    season: "Seleccionar Temporada",
    countries: [],
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = function (e) {
    if (e.target.name === "countries") {
      setActivity({
        ...activity,
        countries: [...activity.countries, e.target.value],
      });
    } else {
      setActivity({
        ...activity,
        [e.target.name]: e.target.value,
      });
    }
    setErrors(
      validate({
        ...activity,
        [e.target.name]: e.target.value,
      })
    );
  };
  const onClose = function (e) {
    e.preventDefault();
    console.log(e.target.name);
    setActivity({
      ...activity,
      countries: activity.countries.filter((ele) => ele !== e.target.name),
    });
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <FormContainer>
      <Form>
        <SearchInputBar
          zIndex={30}
          data={allCountries}
          charMin={0}
          handleSubmit={(e) => {
            if (activity.countries.find((ele) => ele === e)) return;
            setActivity({
              ...activity,
              countries: [...activity.countries, e],
            });
          }}
        />
        <SearchInputBar
        zIndex={20}
          data={allActivities}
          charMin={0}
          handleSubmit={(e) => {
            if (activity.countries.find((ele) => ele === e)) return;
            setActivity({
              ...activity,
              countries: [...activity.countries, e],
            });
          }}
        />

        <div class="caja">
          <select
            id="season"
            name="season"
            onChange={handleInputChange}
            value={activity.season}
          >
            <option>Seleccionar Temporada</option>
            <option>Verano</option>
            <option>Otoño</option>
            <option>Invierno</option>
            <option>Primavera</option>
          </select>
        </div>
        {errors.season && <p className="danger">{errors.season}</p>}
        <div class="caja">
          <select
            id="difficulty"
            name="difficulty"
            onChange={handleInputChange}
            value={activity.difficulty}
          >
            <option>Seleccionar Dificultad</option>
            <option value={1}>Muy Baja</option>
            <option value={2}>Baja</option>
            <option value={3}>Intermedia</option>
            <option value={4}>Alta</option>
            <option value={5}>Muy Alta</option>
          </select>
        </div>
        {errors.difficulty && <p className="danger">{errors.difficulty}</p>}
        <CardContainer>
          {activity.countries?.map((ele) => {
            let data = allCountries.filter((country) => country.id === ele)[0];
            return (
              <CardForm
                key={ele}
                id={ele}
                name={data.name}
                flag={data.flag}
                onClose={onClose}
              />
            );
          })}
        </CardContainer>
      </Form>
    </FormContainer>
  );
}
