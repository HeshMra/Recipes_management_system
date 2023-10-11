import mongoose from "mongoose";
const recipeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true, 
        },
        ingrediants: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
         image: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
const Recipe = mongoose.model('Recipe', recipeSchema); // Use 'Recipe' as the model name
export default Recipe; // Export the Recipe model