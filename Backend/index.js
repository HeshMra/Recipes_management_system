import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import Recipe from "./models/RecipesModel.js";
const app = express();

//Middleware for parsing request
app.use(express.json());

app.get('/', (request, response) => { //get request
    console.log(request);
    return response.status(234).send('Welcome to Mern Stack Tutorial')
});

//Route for save a new recipe
app.post('/recipes', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.description ||
            !request.body.ingrediants ||
            !request.body.category
        ) {
            return response.status(400).send({
                message: 'Send all required Fields: name, description,ingrediants,category',
            });
        }
        const newRecipe = {
            name: request.body.name,
            description: request.body.description,
            ingrediants: request.body.ingrediants,
            category: request.body.category,
        };
        const recipe = await Recipe.create(newRecipe);
        return response.status(201).send(recipe);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for GET all recipes from database
app.get('/recipes', async (request, response) => {
    try {
        const recipe = await Recipe.find({});
        return response.status(200).json({
            count: recipe.length,
            data: recipe
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

//Route for GET One recipe from database by ID
app.get('/recipes/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const recipe = await Recipe.findById(id);
        return response.status(200).json(recipe);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for Update a Recipe
app.put('/recipes/:id', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.description ||
            !request.body.ingrediants ||
            !request.body.category
        ) {
            return response.status(400).send({
                message: 'Send all required Fields: name, description,ingrediants,category',
            });
        }
        const { id } = request.params;
        const result = await Recipe.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: 'recipe Not Found' })
        }
        return response.status(200).json({
            message: 'recipe Updated Successfully'
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for Delete a Recipe
app.delete('/recipes/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Recipe.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Recipe Not Found' })
        }
        return response.status(200).json({
            message: 'Recipe Deleted Successfully'
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


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