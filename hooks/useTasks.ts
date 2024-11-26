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
};

const useTasks = create<TaskState>(set => ({
  tasks: [
    {
      id: uuidv4(),
      title: 'Task num 1',
      isCompleted: false,
      isImportant: false,
      steps: [
        { id: uuidv4(), title: 'step 1.1', isCompleted: false },
        { id: uuidv4(), title: 'step 1.2', isCompleted: true },
        { id: uuidv4(), title: 'step 1.3', isCompleted: false },
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
    },
    {
      id: uuidv4(),
      title: 'Task num 3',
      isCompleted: false,
      isImportant: true,
      steps: [
        { id: uuidv4(), title: 'step 2.1', isCompleted: true },
        { id: uuidv4(), title: 'step 2.2', isCompleted: false },
      ],
      isCardExpanded: false,
    },
    {
      id: uuidv4(),
      title: 'Task num 4',
      isCompleted: true,
      isCardExpanded: false,
    },
  ],

  addTask: title =>
    set(state => ({
      tasks: [
        ...state.tasks,
        { id: uuidv4(), title, isCompleted: false, isCardExpanded: false },
      ],
    })),

  deleteTask: taskId =>
    set(state => ({
      tasks: state.tasks.filter(task => task.id !== taskId),
    })),

  toggleTaskDone: taskId => {
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      ),
    }));
  },

  clearCompletedTasks: () =>
    set(state => ({
      tasks: state.tasks.filter(task => !task.isCompleted),
    })),

  checkTasksDone: () =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.isCompleted ? task : { ...task, isCompleted: true }
      ),
    })),

  toggleImportance: taskId =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === taskId ? { ...task, isImportant: !task.isImportant } : task
      ),
    })),

  toggleExpandCard: taskId =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === taskId
          ? { ...task, isCardExpanded: !task.isCardExpanded }
          : { ...task, isCardExpanded: false }
      ),
    })),

  removeLink: taskId =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === taskId ? { ...task, link: '' } : task
      ),
    })),
}));

export default useTasks;
