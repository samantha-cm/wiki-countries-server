const mongoose = require("mongoose")
const Country = require("../models/Countries.model")

// ℹ️ Connects to the database
require("../db");

const countriesArray = [
    {
        "name": "Finland",
        "alpha3Code": "FIN",
        "alpha2Code": "FI",
        "capital": "Helsinki",
        "area": 338424,
        "borders": ["NOR","SWE","RUS"],
        "flag": "https://flagpedia.net/data/flags/w702/fi.png"
    },
    {
        "name": "Switzerland",
        "alpha3Code": "CHE",
        "alpha2Code": "CH",
        "capital": "Bern",
        "area": 41284,
        "borders": ["AUT","FRA","ITA","LIE","DEU"],
        "flag": "https://flagpedia.net/data/flags/w702/ch.png"
    },
    {
        "name": "Netherlands",
        "alpha3Code": "NLD",
        "alpha2Code": "NL",
        "capital": "Amsterdam",
        "area": 41850,
        "borders": ["BEL","DEU"],
        "flag": "https://flagpedia.net/data/flags/w702/nl.png"
    },
    {
        "name": "Panama",
        "alpha3Code": "PAN",
        "alpha2Code": "PA",
        "capital": "Panama City",
        "area": 75417,
        "borders": ["COL","CRI"],
        "flag": "https://flagpedia.net/data/flags/w702/pa.png"
    },
    {
        "name": "China",
        "alpha3Code": "CHN",
        "alpha2Code": "CN",
        "capital": "Pekin",
        "area": 9706961,
        "borders": ["AFG","BTN","MMR","HKG","IND","KAZ","NPL","PRK","KGZ","LAO","MAC","MNG","PAK","RUS","TJK","VNM"],
        "flag": "https://flagpedia.net/data/flags/w702/cn.png"
    },
    {
        "name": "Italia",
        "alpha3Code": "ITA",
        "alpha2Code": "IT",
        "capital": "Roma",
        "area": 10991,
        "borders":["AUT", "FRA", "SMR", "SVN", "CHE", "VAT"],
        "flag": "https://flagpedia.net/data/flags/w702/it.png"
    },
    {
        "name": "Brasil",
        "alpha3Code": "BRA",
        "alpha2Code": "BR",    
        "capital": "Brasilia",
        "area": 8515767,
        "borders": ["ARG","BOL","COL","GUF","GUY","PRY","PER","SUR","URY","VEN"
        ],
        "flag": "https://flagpedia.net/data/flags/w702/br.png"
    },
    {
        "name": "Colombia",
        "alpha3Code": "COL",
        "alpha2Code": "CO", 
        "capital": "Bogota",
        "area": 1141748,
        "borders": ["BRA", "ECU", "PAN", "PER", "VEN"],
        "flag": "https://flagpedia.net/data/flags/w702/co.png"
    },
    {
        "name": "Philippines",
        "alpha3Code": "PHL",
        "alpha2Code": "PH",
        "capital": "Manila",
        "area": 342353,
        "borders": [],
        "flag": "https://flagpedia.net/data/flags/w702/ph.png"
    },
    {
        "name": "South Africa",
        "alpha3Code": "ZAF",
        "alpha2Code": "ZA",
        "capital": "Pretoria",
        "area": 1221037,
        "borders": ["BWA", "LSO", "MOZ", "NAM", "SWZ", "ZWE"],
        "flag": "https://flagpedia.net/data/flags/w702/za.png"
    },
    {
        "name": "Germany",
        "alpha3Code": "DEU",
        "alpha2Code": "DE",
        "capital": "Berlin",
        "area": 357114,
        "borders": ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
        "flag": "https://flagpedia.net/data/flags/w702/de.png"
    },
    {
        "name": "Mexico",
        "alpha3Code": "MEX",
        "alpha2Code": "MX",
        "capital": "Mexico City",
        "area": 1964375,
        "borders": ["BLZ", "GTM", "USA"],
        "flag": "https://flagpedia.net/data/flags/w702/mx.png"
    }
]

const createCountries = async(data) => {
    try {
        const createCountries = await Country.create(data)
        return mongoose.connection.close()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

createCountries(countriesArray);