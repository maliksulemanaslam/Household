//jshint esversion:6
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = new mongoose.Schema({
    firstname:String,
    lastname: String,
    username: String,
    password:String,
    email:String,
    address: String,
    city: String,
    bookedService: Array,
    previouslyBooked: Array
});
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",UserSchema);
