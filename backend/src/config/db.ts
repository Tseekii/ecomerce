import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tseekii:ve3Du7rXlMfgCA0s@cluster0.vwfuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database connected");
  } catch (error) {
    console.log("err", error);
    console.log("Database cannot connected");
  }
};
