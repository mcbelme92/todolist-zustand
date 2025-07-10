import { create } from 'zustand';


// store.jsx
export const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({
    tasks: [...state.tasks, task],
  })),
  toggleTask: (id) => set((state) => ({
    tasks: state.tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ),
  })),
}));
