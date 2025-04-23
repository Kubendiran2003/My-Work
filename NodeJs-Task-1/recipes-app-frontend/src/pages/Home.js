import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import V1 from '../V1.mp4';
import { getRecipes } from '../api';

import './CardFlip.css';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchData = async () => {
    const { data } = await getRecipes();
    const transformedData = data.map(recipe => ({
      ...recipe,
      ingredients: Array.isArray(recipe.ingredients)
        ? recipe.ingredients
        : recipe.ingredients.split(','),
    }));
    setRecipes(transformedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-5 bg-yellow-400 min-h-screen h-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6">🍟 Recipe App 🍔</h1>
      <Link
        to="/add"
        className="inline-block bg-orange-500 text-white px-4 py-2 rounded mb-2 mx-auto text-sm md:text-base text-center hover:bg-orange-600 transition duration-300 ease-in-out max-w-xs"
      >
        ✙ Add Recipe
      </Link>

      {/* 🎥 Video as GIF-like banner */}
      <div className="mt-4 mb-6">
        <video
          src={V1}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[200px] md:h-[300px] object-cover rounded-lg pointer-events-none"
        />
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <div
          key={recipe._id}
          className="flip-card rounded-lg border border-orange-400 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          <div className="flip-card-inner w-full h-full">
            {/* Front Side */}
            <div className="flip-card-front bg-yellow-400 p-4 flex flex-col justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{recipe.title}</h3>
              <p className="text-gray-600 text-md">
              <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
              </p>
            </div>
        
            {/* Back Side */}
            <div className="flip-card-back p-4 flex items-center justify-center">
              <Link
                to={`/recipe/${recipe._id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                View Recipe
              </Link>
            </div>
          </div>
        </div>        
        ))}
      </div>
    </div>
  );
};

export default Home;
