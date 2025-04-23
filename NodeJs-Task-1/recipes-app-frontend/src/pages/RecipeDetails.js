import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getRecipeById, deleteRecipe } from '../api';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data } = await getRecipeById(id);
      setRecipe(data);
    };
    fetchRecipe();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this recipe?');
    if (confirmDelete) {
      await deleteRecipe(id);
      navigate('/'); // Navigate back to the home page after deletion
    }
  };

  if (!recipe) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  return (
    <div className="relative p-5 flex justify-center items-center h-screen bg-yellow-400">
      {/* Back to Recipes Button in Top-Left Corner */}
      <Link
        to="/"
        className="absolute top-4 left-4 bg-gray-700 text-white px-4 py-2 rounded shadow hover:bg-gray-800 transition duration-300"
      >
        ❮❮ Back to Recipes
      </Link>

      <div className="bg-white max-w-4xl w-full p-6 rounded shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{recipe.title}</h1>
        {recipe.image && (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="my-4 w-full h-60 object-cover rounded shadow-md"
          />
        )}
        <div className="bg-gray-50 p-6 rounded shadow-md">
          <p className="text-lg mb-4">
            <strong className="font-semibold text-gray-700">Ingredients:</strong>{' '}
            <span className="text-gray-600">{recipe.ingredients.join(', ')}</span>
          </p>
          <p className="text-lg mb-4">
            <strong className="font-semibold text-gray-700">Instructions:</strong>{' '}
            <span className="text-gray-600">{recipe.instructions}</span>
          </p>
          <p className="text-lg">
            <strong className="font-semibold text-gray-700">Cook Time:</strong>{' '}
            <span className="text-gray-600">{recipe.cookingTime} Minutes</span>
          </p>
        </div>
        <div className="flex justify-evenly gap-4 mt-6">
          <Link
            to={`/edit/${id}`}
            className="bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-600 transition duration-300"
          >
            ✎ Edit
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-6 py-2 rounded shadow hover:bg-red-700 transition duration-300"
          >
            Delete ⛌
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;