import express from "express";
const app = express();
import {PORT} from "./config.js";

app.listen(PORT,()=>{
    console.log(`App is listening to port ${PORT}`); //PORT
    });