const axios = require("axios");
const express = require("express");
const router = express.Router();
const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");
module.exports = router;

const initializedFunc = async ()=>{
  console.log("entro initializedFunc")
  let initial = []
  const response = await axios.get("https://restcountries.com/v3/all");
  initial = await response.data?.map((ele) => {
    return {
      id: ele.cca3,
      name: ele.name.common,
      flag: ele.flags[1],
      continents: ele.continents[0],
      capital: ele.capital != null ? ele.capital.join(", ") : "No data",
      subregion: ele.subregion,
      area: ele.area,
      population: ele.population,
    };
  });


  return initial
}

router.get("/:idPais", async (req, res) => {
  try {
    let dataCountry = await Country.findAll();
    if (!dataCountry.length > 0) {
      dataCountry = await initializedFunc()

    }
    respuesta = await Country.findOne({
      where: { id: req.params.idPais.toUpperCase() },
      include: [Activity],
    });
    respuesta
      ? res.send(respuesta)
      : res.status(404).send("Error 404, Pais no encontrado");
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

const nameFilter = async (nameQuery) => {
  try {
    return await Country.findAll({
      where: {
        name: { [Op.iLike]: `%${nameQuery}%` },
      },
      include: [Activity],
    });
  } catch (error) {
    console.log(error);
    return "No se encontro coincidencia " + nameQuery;
  }
};

router.get("/", async (req, res) => {
  let { name } = req.query;
  try {
    let dataCountry = await Country.findAll({include: [Activity]});
    if (!dataCountry.length > 0) {
      dataCountry = await initializedFunc()
    }
    

    res.send(name ? await nameFilter(name) : dataCountry);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
