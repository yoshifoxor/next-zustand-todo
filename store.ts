import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

type TaskState = {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (taskId: string) => void;
  toggleTaskDone: (taskId: string) => void;
};

const useStore = create<TaskState>((set) => ({
  tasks: [
    { id: uuidv4(), title: 'Task num 1', isCompleted: false },
    { id: uuidv4(), title: 'Task num 1', isCompleted: true },
  ],

  addTask: (title) =>
    set((state) => ({
      tasks: [...state.tasks, { id: uuidv4(), title, isCompleted: false }],
    })),

  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),

  toggleTaskDone: (taskId) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, isTaskDone: !task.isCompleted } : task,
      ),
    }));
  },
}));

export default useStore;
