import express from "express";
const port = process.env.PORT || 5000;
import mysql from "mysql";
import dotenv from "dotenv";
import cors from "cors";

export const app = express();

app.use(express.static("./client/build"));
app.use(express.json());
app.use(cors());
export const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "Hanoch-550",
  database: "sugerbit",
});

connection.connect((err: any) => {
  try {
    if (err) throw err;
    console.log("mysql connected!!");
  } catch (error) {
    console.error(error);
  }
});
import sugarRouter from "./API/router";
app.use("/api-sugar", sugarRouter);


app.listen(port, () => {
  return console.log(`Server is listening at port:${port} 🔥`);
});
