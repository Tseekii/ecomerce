import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import { Resend } from "resend";

import authRoute from "./routes/auth-route";
import { connectDB } from "./config/db";
import e from "express";
import { generateHtmlTemplate } from "./utils/generateHtmlTemplate";

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI || "";

//express application oject uusgeh
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

//middleware
app.use(express.json()); // parse gj json obekt bolgoj huvirgana. mon herehtei ogogdoloo avah
app.use("/api/v1/auth", authRoute);

app.get("/", async (req: Request, res: Response) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["tseekiibatanu@gmail.com"],
    subject: "hello",
    html: generateHtmlTemplate("9090"),
  });
  if (error) {
    console.log(error);
  }
  res.send("Welcome to com web");
});

connectDB(MONGO_URI);
//server  asaah
app.listen(PORT, () => {
  console.log(`сервер localhost: ${PORT} ажиллаж байна`);
});
