import express from "express";
import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/doctor_appointment");
    console.log(`mongodb connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
