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
    console.log("Error postActivity en controller " + error);
  }
});

router.get("/",async(req,res)=>{
  res.send(await Activity.findAll())
})