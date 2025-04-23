import React, { useState, useEffect } from 'react';

const RecipeForm = ({ initialData, onSubmit, isEditing }) => {
  const [form, setForm] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    cookingTime: '', 
    image: '',
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        ...initialData,
        ingredients: Array.isArray(initialData.ingredients)
          ? initialData.ingredients.join(', ')
          : initialData.ingredients,
        cookingTime: initialData.cookingTime || '', 
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      ...form,
      ingredients: Array.isArray(form.ingredients)
        ? form.ingredients
        : form.ingredients.split(',').map((i) => i.trim()),
      cookingTime: parseInt(form.cookingTime, 10),
    };

    onSubmit(formattedData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto">
      <input
        name="title"
        className="w-full p-2 border rounded"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />

      <input
        name="ingredients"
        className="w-full p-2 border rounded"
        placeholder="Ingredients (comma separated)"
        value={form.ingredients}
        onChange={handleChange}
        required
      />

      <textarea
        name="instructions"
        className="w-full p-2 border rounded"
        placeholder="Instructions"
        value={form.instructions}
        onChange={handleChange}
        required
        rows={3}
      />

      <input
        name="cookingTime"
        type="number" // Ensure the input is numeric
        className="w-full p-2 border rounded"
        placeholder="Cooking Time in Minutes"
        value={form.cookingTime}
        onChange={handleChange}
        required
      />

      <input
        name="image"
        className="w-full p-2 border rounded"
        placeholder="Image URL (optional)"
        value={form.image}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        {isEditing ? '🗘 Update' : '✎ Create'} Recipe
      </button>
    </form>
  );
};

export default RecipeForm;