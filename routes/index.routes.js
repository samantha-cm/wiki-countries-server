const router = require("express").Router();
const Country = require("../models/Countries.model");
const authRoutes = require("./auth.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

/* GET countries */
router.get("/countries", async (req, res, next) => {

  try {

    const allCountries = await Country.find({})
    console.log(allCountries)
  
    res.json({
      message: "Succesfully obtained list of countries",
      data: allCountries
    });

  } catch (error) {
    console.log(error)
  }



});

/* GET country detail */
router.get("/countries/:id", async (req, res, next) => {
  
  try {

    const {id} = req.params

    const selectedCountry = await Country.find({ alpha3Code: id.toUpperCase() })
  
    if (selectedCountry.length === 0) {
      res.json({
        message: "Country not found"
      });
    } else {
      res.json({
        message: "Succesfully obtained detail of selected country",
        data: selectedCountry
      });
    }

  } catch (error) {
    console.log(error)
  }
  
});

router.use("/auth", authRoutes);

module.exports = router;
