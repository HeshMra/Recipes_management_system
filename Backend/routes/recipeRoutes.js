import express from 'express';
import Recipe from '../models/RecipesModel.js';
const router=express.Router();

//Route for save a new recipe
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.description ||
            !request.body.ingrediants ||
            !request.body.category ||
            !request.body.image
        ) {
            return response.status(400).send({
                message: 'Send all required Fields: name, description,ingrediants,category,image',
            });
        }
        const newRecipe = {
            name: request.body.name,
            description: request.body.description,
            ingrediants: request.body.ingrediants,
            category: request.body.category,
            image: request.body.image,
        };
        const recipe = await Recipe.create(newRecipe);
        return response.status(201).send(recipe);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for GET all recipes from database
router.get('/', async (request, response) => {
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
router.get('/:id', async (request, response) => {
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
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.description ||
            !request.body.ingrediants ||
            !request.body.category ||
            !request.body.image
        ) {
            return response.status(400).send({
                message: 'Send all required Fields: name, description,ingrediants,category,image',
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
router.delete('/:id', async (request, response) => {
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






export default router;