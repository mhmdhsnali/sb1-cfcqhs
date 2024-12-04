import React from 'react';
import { useStore } from '../lib/store';
import { Calendar } from 'lucide-react';

export default function MealScheduler() {
  const { user, meals, schedule, scheduleMeal } = useStore();

  if (!user) {
    return (
      <div className="text-center py-12">
        <p>يرجى تسجيل الدخول لجدولة وجباتك</p>
      </div>
    );
  }

  const handleScheduleMeal = (mealId: string, date: string, time: string) => {
    scheduleMeal({
      id: Math.random().toString(),
      userId: user.id,
      mealId,
      date,
      time,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">جدولة الوجبات</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">الوجبات المتاحة</h3>
          <div className="space-y-4">
            {meals.map((meal) => (
              <div key={meal.id} className="border rounded-lg p-4">
                <h4 className="font-medium">{meal.name}</h4>
                <p className="text-sm text-gray-500">
                  {meal.calories} سعرة حرارية
                </p>
                <div className="mt-4">
                  <input
                    type="date"
                    className="block w-full mb-2 p-2 border rounded"
                    onChange={(e) =>
                      handleScheduleMeal(meal.id, e.target.value, '12:00')
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">جدولك الأسبوعي</h3>
          <div className="space-y-4">
            {schedule
              .filter((s) => s.userId === user.id)
              .map((s) => {
                const meal = meals.find((m) => m.id === s.mealId);
                return (
                  <div key={s.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded">
                    <Calendar className="text-emerald-500" size={20} />
                    <div>
                      <p className="font-medium">{meal?.name}</p>
                      <p className="text-sm text-gray-500">{s.date}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}