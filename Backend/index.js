import express from "express";
const app = express();
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";



app.get('/', (request, response) => { //get request
    console.log(request);
    return response.status(234).send('Welcome to Mern Stack Tutorial')
});






mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App Connected to Database');
        app.listen(PORT, () => {
            console.log(`App is listening to port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(error); // Use console.error to log the error
    });