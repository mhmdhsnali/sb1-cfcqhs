import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  subscription?: string;
}

interface Meal {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  ingredients: string[];
}

interface Schedule {
  id: string;
  userId: string;
  mealId: string;
  date: string;
  time: string;
}

interface AppState {
  user: User | null;
  meals: Meal[];
  schedule: Schedule[];
  setUser: (user: User | null) => void;
  addMeal: (meal: Meal) => void;
  scheduleMeal: (schedule: Schedule) => void;
  logout: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      meals: [],
      schedule: [],
      setUser: (user) => set({ user }),
      addMeal: (meal) =>
        set((state) => ({ meals: [...state.meals, meal] })),
      scheduleMeal: (schedule) =>
        set((state) => ({ schedule: [...state.schedule, schedule] })),
      logout: () => set({ user: null, schedule: [] }),
    }),
    {
      name: 'healthy-meals-storage',
    }
  )
);