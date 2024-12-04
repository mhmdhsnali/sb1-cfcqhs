import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface Ingredient {
  name: string;
  caloriesPer100g: number;
  quantity: number;
}

const commonIngredients: Ingredient[] = [
  { name: 'صدر دجاج', caloriesPer100g: 165, quantity: 0 },
  { name: 'أرز بسمتي', caloriesPer100g: 130, quantity: 0 },
  { name: 'بروكلي', caloriesPer100g: 55, quantity: 0 },
  { name: 'زيت زيتون', caloriesPer100g: 884, quantity: 0 },
  { name: 'حمص', caloriesPer100g: 364, quantity: 0 },
];

export default function CalorieCalculator() {
  const [ingredients, setIngredients] = useState(commonIngredients);
  const [customIngredient, setCustomIngredient] = useState('');
  const [customCalories, setCustomCalories] = useState('');

  const updateQuantity = (index: number, change: number) => {
    const newIngredients = [...ingredients];
    const newQuantity = Math.max(0, newIngredients[index].quantity + change);
    newIngredients[index].quantity = newQuantity;
    setIngredients(newIngredients);
  };

  const addCustomIngredient = () => {
    if (customIngredient && customCalories) {
      setIngredients([
        ...ingredients,
        {
          name: customIngredient,
          caloriesPer100g: Number(customCalories),
          quantity: 0,
        },
      ]);
      setCustomIngredient('');
      setCustomCalories('');
    }
  };

  const totalCalories = ingredients.reduce(
    (sum, ing) => sum + (ing.caloriesPer100g * ing.quantity) / 100,
    0
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">حاسبة السعرات الحرارية</h2>

      <div className="mb-8">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            value={customIngredient}
            onChange={(e) => setCustomIngredient(e.target.value)}
            placeholder="اسم المكون"
            className="flex-1 p-2 border rounded-md"
          />
          <input
            type="number"
            value={customCalories}
            onChange={(e) => setCustomCalories(e.target.value)}
            placeholder="السعرات لكل 100 جرام"
            className="w-48 p-2 border rounded-md"
          />
          <button
            onClick={addCustomIngredient}
            className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600"
          >
            إضافة
          </button>
        </div>

        <div className="space-y-4">
          {ingredients.map((ingredient, index) => (
            <div
              key={ingredient.name}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
            >
              <div>
                <h3 className="font-medium">{ingredient.name}</h3>
                <p className="text-sm text-gray-500">
                  {ingredient.caloriesPer100g} سعرة/100جم
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => updateQuantity(index, -50)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Minus size={20} />
                </button>
                <span className="w-16 text-center">{ingredient.quantity}جم</span>
                <button
                  onClick={() => updateQuantity(index, 50)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-50 p-4 rounded-lg">
        <h3 className="text-xl font-bold text-emerald-800">
          إجمالي السعرات: {Math.round(totalCalories)} سعرة
        </h3>
      </div>
    </div>
  );
}