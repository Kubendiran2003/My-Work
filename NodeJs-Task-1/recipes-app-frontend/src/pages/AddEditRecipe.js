import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RecipeForm from '../components/RecipeForm';
import { getRecipeById, createRecipe, updateRecipe } from '../api';

const AddEditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (id) {
      getRecipeById(id).then(({ data }) => {
        const transformedData = {
          ...data,
          ingredients: Array.isArray(data.ingredients)
            ? data.ingredients
            : data.ingredients.split(','),
        };
        setInitialData(transformedData);
      });
    }
  }, [id]);

  const handleSubmit = async (data) => {
    const transformedData = {
      ...data,
      ingredients: Array.isArray(data.ingredients)
        ? data.ingredients
        : data.ingredients.split(','),
      cookingTime: parseInt(data.cookingTime, 10), // Ensure cookingTime is a number
    };

    if (id) {
      await updateRecipe(id, transformedData);
    } else {
      await createRecipe(transformedData);
    }
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="relative p-5 bg-yellow-400 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
      >
        ❮❮ Back
      </button>

      <h1 className="text-3xl mt-10 font-bold flex justify-center items-center py-6">
        {id ? '✎ Edit' : '✙ Add'} Recipe
      </h1>
      <RecipeForm initialData={initialData} onSubmit={handleSubmit} isEditing={!!id} />
    </div>
  );
};

export default AddEditRecipe;