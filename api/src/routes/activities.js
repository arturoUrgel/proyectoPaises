const axios = require("axios");
const express = require("express");
const router = express.Router();
const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");
module.exports = router;

router.post("/", async (req, res) => {
  let { name, difficulty, duration, season, countries } = req.body;
  try {
    let newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    let selectCountries = await Country.findAll({
      where: {
        name: countries,
      },
    });

    res.send(await newActivity.addCountry(selectCountries));
  } catch (error) {
    res.status(400).json({ error: error })
  }
});

router.get("/", async (req, res) => {
  try {
    const respuesta = await Activity.findAll({
      include: [Country],
    });
    res.send(respuesta);
  } catch (error) {console.log("Error postActivity en controller " + error)}
});


// Change everyone without a last name to "Doe"
// await User.update({ lastName: "Doe" }, {
//   where: {
//     lastName: null
//   }
// });