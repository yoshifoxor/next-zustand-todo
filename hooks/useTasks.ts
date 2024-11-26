import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';

type TaskState = {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (taskId: string) => void;
  toggleTaskDone: (taskId: string) => void;
  clearCompletedTasks: () => void;
  checkTasksDone: () => void;
  toggleImportance: (taskId: string) => void;
  toggleExpandCard: (taskId: string) => void;
  removeLink: (taskId: string) => void;
  addStep: (taskId: string, payload: string) => void;
};

const useTasks = create<TaskState>((set) => ({
  tasks: [
    {
      id: uuidv4(),
      title: 'Task num 1',
      isCompleted: false,
      isImportant: false,
      steps: [
        { id: uuidv4(), title: 'step 1.1', isCompleted: false, steps: [] },
        { id: uuidv4(), title: 'step 1.2', isCompleted: true, steps: [] },
        { id: uuidv4(), title: 'step 1.3', isCompleted: false, steps: [] },
      ],
      isCardExpanded: true,
      link: 'https://jsonplaceholder.typicode.com/posts/',
    },
    {
      id: uuidv4(),
      title: 'Task num 2',
      isCompleted: true,
      isImportant: false,
      isCardExpanded: false,
      link: 'https://www.google.com/',
      steps: [],
    },
    {
      id: uuidv4(),
      title: 'Task num 3',
      isCompleted: false,
      isImportant: true,
      steps: [
        { id: uuidv4(), title: 'step 2.1', isCompleted: true, steps: [] },
        { id: uuidv4(), title: 'step 2.2', isCompleted: false, steps: [] },
      ],
      isCardExpanded: false,
    },
    {
      id: uuidv4(),
      title: 'Task num 4',
      isCompleted: true,
      isCardExpanded: false,
      steps: [],
    },
  ],

  addTask: (title) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: uuidv4(),
          title,
          isCompleted: false,
          isCardExpanded: false,
          steps: [],
        },
      ],
    })),

  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),

  toggleTaskDone: (taskId) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    }));
  },

  clearCompletedTasks: () =>
    set((state) => ({
      tasks: state.tasks.filter((task) => !task.isCompleted),
    })),

  checkTasksDone: () =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.isCompleted ? task : { ...task, isCompleted: true },
      ),
    })),

  toggleImportance: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, isImportant: !task.isImportant } : task,
      ),
    })),

  toggleExpandCard: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? { ...task, isCardExpanded: true }
          : { ...task, isCardExpanded: false },
      ),
    })),

  removeLink: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, link: '' } : task,
      ),
    })),

  addStep: (taskId, payload) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              steps: [
                ...task.steps,
                { id: uuidv4(), isCompleted: false, steps: [], title: payload },
              ],
            }
          : task,
      ),
    })),
}));

export default useTasks;
