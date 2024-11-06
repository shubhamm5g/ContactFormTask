const mongoose = require("mongoose");
const connectDB = async () => {
  const mongo_url = process.env.MONGO_URL;

  try {
    const conn = await mongoose.connect(mongo_url);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};
module.exports = connectDB;
