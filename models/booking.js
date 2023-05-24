//jshint esversion:6
const mongoose = require("mongoose");
const BookingSchema = new mongoose.Schema({
    service:String,
    price:String,
    date: String,
    time: String
}) ;
module.exports = mongoose.model("booking",BookingSchema);
