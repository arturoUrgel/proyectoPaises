const axios = require("axios");
const express = require("express");
const router = express.Router();
const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");
module.exports = router;

router.get("/:idPais", async (req, res) => {
  try {
    let dataCountry = await Country.findAll();
    console.log("PASO1");
    console.log(dataCountry.length);
    if (!dataCountry.length > 0) {
      console.log("PASO2");
      const response = await axios.get("https://restcountries.com/v3/all");
      dataCountry = await response.data?.map((ele) => {
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
      dataCountry = await Country.bulkCreate(dataCountry);
    }
    console.log("PASO3");
    respuesta = await Country.findOne({
      where: { id: req.params.idPais.toUpperCase() },
    });
    console.log(respuesta);
    res.send(respuesta ? respuesta : "Pais no disponible");
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
    let dataCountry = await Country.findAll();
    console.log("PASO1");
    if (!dataCountry.length > 0) {
      console.log("PASO2");
      const response = await axios.get("https://restcountries.com/v3/all");
      dataCountry = await response.data?.map((ele) => {
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
      dataCountry = await Country.bulkCreate(dataCountry);
    }
    console.log("PASO3");
    res.send(
      name
        ? await nameFilter(name)
        : dataCountry
          
    );
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

