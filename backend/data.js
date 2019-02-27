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
    RatingPayOnTime: Number,
    RatingNubsli: Number,
    RatingCommunication: Number,
    RatingOrganisation: Number,
    RatingWorkAgain: Number,
    RatingRecommend: Number
  },

);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);
//export default mongoose.model("Data", DataSchema);
