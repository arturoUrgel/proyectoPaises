import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getAllActivities,
  getAllCountries,
  postActivity,
} from "../../redux/actions";
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
  height: 600px;
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
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: top;
`;

const TextCointainer = styled.div`
  width: 70px;
  margin-left: 20px;
`;
const ErrorContainer = styled.div`
  height: 1.2rem;
  font-size: 0.9rem;
  color: red;
  margin-bottom: 0.6rem;
`;

const InputNumber = styled.input`
  text-align: center;
  margin-left: 70px;
  width: 4rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  margin-top: 0.8rem;
  gap: 50px;
`;

const InputName = styled.input`
  width: 316px;
  height: 30px;
  margin-left: 19px;
  margin-right: 60px;
  border: none;
  &:focus-visible {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-image: linear-gradient(#42a1ec, #0070c9);
  border: 1px solid #0077cc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  direction: ltr;
  display: block;
  font-family: "SF Pro Text", "SF Pro Icons", "AOS Icons", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.022em;
  line-height: 1.47059;
  min-width: 30px;
  overflow: visible;
  padding: 4px 15px;
  text-align: center;
  /* vertical-align: baseline; */
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;

  &:disabled {
    cursor: default;
    opacity: 0.3;
  }

  &:hover {
    background-image: linear-gradient(#51a9ee, #147bcd);
    border-color: #1482d0;
    text-decoration: none;
  }

  &:active {
    background-image: linear-gradient(#3d94d9, #0067b9);
    border-color: #006dbc;
    outline: none;
  }

  &:focus {
    box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;
    outline: none;
  }
`;

export function validate(activity) {
  let errors = {};
  if (!activity.name) {
    errors.name = "name is required";
  } else if /* (!/^[A-Z\s]{3,15}+$/i.test(activity.name)) */
  (!/^[a-zA-Z]{3,15}$/.test(activity.name))
   {
    errors.name = "Only letters 3 to 15 characters";
  }

  if (activity.countries.length === 0) errors.countries = "country is required";

  if (activity.difficulty === "Seleccionar Dificultad") {
    errors.difficulty = "difficulty is required";
  }
  if (!activity.duration) {
    errors.duration = "duration is required";
  } else if (0 >= activity.duration || activity.duration > 24) {
    errors.duration = "must be value between 1 and 24";
  }
  if (activity.season === "Seleccionar Temporada") {
    errors.season = "season is required";
  }

  return errors;
}

export default function FormActivity() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllActivities());
    dispatch(getAllCountries());
  }, [dispatch]);

  const allCountries = useSelector((state) => state.countries);
  /* const allActivities = useSelector((state) => state.activities); */

  const [disable, setDisable] = useState(true);

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "Seleccionar Dificultad",
    duration: "0",
    season: "Seleccionar Temporada",
    countries: [],
  });
  const [errors, setErrors] = useState({ name: "" });

  useEffect(() => setDisable(JSON.stringify(errors) !== "{}"), [errors]);

  const handleInputChange = function (e) {
    if (e.target.name === "countries") {
      setActivity({
        ...activity,
        countries: [...activity.countries, e.target.value],
      });
      setErrors(
        validate({
          ...activity,
          countries: [...activity.countries, e.target.value],
        })
      );
    } else {
      setActivity({
        ...activity,
        [e.target.name]: e.target.value,
      });

      setErrors(
        validate({
          ...activity,
          [e.target.name]: e.target.value,
        })
      );
    }
  };
  const onClose = function (e) {
    e.preventDefault();
    console.log(e.target.name);
    setActivity({
      ...activity,
      countries: activity.countries.filter((ele) => ele !== e.target.name),
    });
    setErrors(
      validate({
        ...activity,
        countries: activity.countries.filter((ele) => ele !== e.target.name),
      })
    );
  };

  const handleSubmit = (e) => {
    if (activity.countries.find((ele) => ele === e)) return;
    setActivity({
      ...activity,
      countries: [...activity.countries, e],
    });
    setErrors(
      validate({
        ...activity,
        countries: [...activity.countries, e],
      })
    );
  };
  return (
    <FormContainer>
      <Form>
        <h1>Crear Actividad</h1>
        <Container>
          <TextCointainer>Nombre: </TextCointainer>
          <InputName
            type="text"
            name="name"
            onChange={handleInputChange}
            value={activity.name}
          />
        </Container>
        <ErrorContainer>
          {errors.name && <div>{errors.name}</div>}
        </ErrorContainer>
        <Container>
          <TextCointainer>Paises: </TextCointainer>
          <SearchInputBar
            zIndex={20}
            data={allCountries}
            charMin={0}
            handleSubmit={handleSubmit}
          />
        </Container>
        <ErrorContainer>
          {errors.countries && <div>{errors.countries}</div>}
        </ErrorContainer>
        <InputContainer>
          <TextCointainer>Duracion en hs:</TextCointainer>
          <div>
            <InputNumber
              type="number"
              name="duration"
              onChange={handleInputChange}
              value={activity.duration}
            />
            <ErrorContainer>
              {errors.duration && <div>{errors.duration}</div>}
            </ErrorContainer>
          </div>
        </InputContainer>
        <div>
          <select
            id="season"
            name="season"
            onChange={handleInputChange}
            value={activity.season}
          >
            <option>Seleccionar Temporada</option>
            <option value={"Verano"}>Verano</option>
            <option value={"Otoño"}>Otoño</option>
            <option value={"Invierno"}>Invierno</option>
            <option value={"Primavera"}>Primavera</option>
          </select>
        </div>
        <ErrorContainer>
          {errors.season && <div>{errors.season}</div>}
        </ErrorContainer>
        <div>
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
        <ErrorContainer>
          {errors.difficulty && <div>{errors.difficulty}</div>}
        </ErrorContainer>

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
        <SubmitButton
          disabled={disable}
          onClick={() => {
            dispatch(postActivity(activity));
            setActivity({
              name: "",
              difficulty: "Seleccionar Dificultad",
              duration: "0",
              season: "Seleccionar Temporada",
              countries: [],
            });
          }}
        >
          Crear actividad
        </SubmitButton>
      </Form>
    </FormContainer>
  );
}
