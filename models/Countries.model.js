const mongoose = require("mongoose")

const countrySchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    alpha3Code: {
        type: String,
        required:true
    },
    alpha2Code: {
        type: String,
        required:true
    },
    capital: {
        type: String,
        required:true
    },
    area: {
        type: Number,
        required:true
    },
    borders: [String],
    capital: {
        type: String,
        required:true
    },
    flag: {
        type: String,
        required:true
    }
})

const Country = mongoose.model("Country",countrySchema)

module.exports = Country
