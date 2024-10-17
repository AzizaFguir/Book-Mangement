import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routerBook from "./routers/book.js"; 
const app = express();

mongoose
  .connect("mongodb://localhost:27017/Books ")
  .then(() => {
    console.log("connexion reussie ");
  })
  .catch((err) => {
    console.log("connexion echoué", err);
  });
app.use(cors());
app.use(express.json());
app.use("/api/book", routerBook);


export default app;
