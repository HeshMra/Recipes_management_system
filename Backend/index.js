import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import recipeRoutes from "./routes/recipeRoutes.js";
import { userRouter } from "./routes/userRoute.js";
const app = express();

//Middleware for parsing request
app.use(express.json());

//Middleware for handling CORS Plolicy
//Option 1: Allow origins default with cors(*)
// app.use(cors());
//Option 2: Allow Custom Origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// })
// );

app.get('/', (request, response) => { //get request
    console.log(request);
    return response.status(234).send('Welcome to Mern Stack Tutorial')
});

app.use('/recipes', recipeRoutes); //middleware
app.use("/auth",userRouter); //route for authentication


//DB Connection
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