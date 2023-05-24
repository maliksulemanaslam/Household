//jshint esversion:6
const mongoose = require("mongoose");
const ComplaintSchema = new mongoose.Schema({
    name:String,
    email:String,
    message: String,
}) ;
module.exports = mongoose.model("complaint",ComplaintSchema);
