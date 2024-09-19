import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import authRoute from "./routes/auth-route";

const PORT = process.env.PORT;

//express application oject uusgeh
const app = express();

//middleware
app.use("/api/v1/auth", authRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to com web");
});

//server  asaah
app.listen(PORT, () => {
  console.log(`сервер localhost: ${PORT} ажиллаж байнаn`);
});
