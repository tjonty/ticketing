import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  console.log("Auth Service starting UP!!!!");

  if (!process.env.JWT_KEY) {
    throw new Error("JET_KEY must be defined.");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined.");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connect with mongodb.");
  } catch (err) {
    console.log(err);
  }
};

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});

start();
