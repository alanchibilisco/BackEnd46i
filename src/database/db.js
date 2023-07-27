const mongoose = require("mongoose");

const uri = process.env.PORTDB;
const db = process.env.DB;

const conectDb = async () => {
  try {
    await mongoose.connect(`${uri}/${db}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = conectDb;
