//jshint esversion:6
const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema({
    userid: String,
    username:String,
    email:String,
    review: String,
}) ;
module.exports = mongoose.model("review",ReviewSchema);
