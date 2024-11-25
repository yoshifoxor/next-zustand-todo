import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';

type TaskState = {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (taskId: string) => void;
  toggleTaskDone: (taskId: string) => void;
  clearCompletedTasks: () => void;
  checkTasksDone: () => void;
};

const useTasks = create<TaskState>((set) => ({
  tasks: [
    { id: uuidv4(), title: 'Task num 1', isCompleted: false },
    { id: uuidv4(), title: 'Task num 2', isCompleted: true },
    { id: uuidv4(), title: 'Task num 3', isCompleted: false },
    { id: uuidv4(), title: 'Task num 4', isCompleted: true },
    { id: uuidv4(), title: 'Task num 5', isCompleted: false },
    { id: uuidv4(), title: 'Task num 6', isCompleted: true },
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
      tasks: state.tasks.map((task) => (task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task)),
    }));
  },

  clearCompletedTasks: () =>
    set((state) => ({
      tasks: state.tasks.filter((task) => !task.isCompleted),
    })),

  checkTasksDone: () =>
    set((state) => ({
      tasks: state.tasks.map((task) => (task.isCompleted ? task : { ...task, isCompleted: true })),
    })),
}));

export default useTasks;
