const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.DB_URL;

if (!DB_URL) throw new Error("URL Not Found");

const connectDb = async () => {
  try {
    const db = await mongoose.connect(DB_URL);
    const { name, host } = db.connection;
    console.log(`Successfully connected to: ${name} in ${host}`);
  } catch (error) {
    console.log("Error connecting to Database");
  }
};

module.exports = connectDb;
