// /backend/data.js
const mongoose = require("mongoose");
//import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    AgencyName: String,
    AgencyLocationTown: String,
    AgencyLocationRegion: String,
    AgencyEmail: String,
    RatingAverage: Number,
    RatingSatisfaction: Number,
    RatingService: Number,
    RatingPayOnTime: Number,
    RatingNUBSLI: Number,
    RatingWorkAgain: Number,
    RatingRecommend: Number
  },
  { collection : 'agencies' }   // collection name
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);

