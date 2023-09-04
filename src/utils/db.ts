/**
 *
 * MongoDB connection
 *
 */

import mongoose from "mongoose";
import config from "../config";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error ? error : "Failed to connect to MongoDB");
    process.exit(1);
  }
};

export default connectDB;
