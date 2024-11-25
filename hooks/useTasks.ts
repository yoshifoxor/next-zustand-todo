import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';

import initialTasks from './initialTasks';

const useTasks = create<TasksStore>((set) => ({
  tasks: initialTasks,

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
          note: '',
          link: '',
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
          ? { ...task, isCardExpanded: !task.isCardExpanded }
          : { ...task, isCardExpanded: false },
      ),
    })),

  addLink: (taskId, newLink) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              link: newLink,
            }
          : task,
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
                { id: uuidv4(), isStepDone: false, title: payload },
              ],
            }
          : task,
      ),
    })),

  toggleStepDone: (taskId, stepId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              steps: task.steps.map((step) =>
                step.id === stepId
                  ? { ...step, isStepDone: !step.isStepDone }
                  : step,
              ),
            }
          : task,
      ),
    })),

  removeStep: (taskId, stepId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? { ...task, steps: task.steps.filter((step) => step.id !== stepId) }
          : task,
      ),
    })),

  addNote: (taskId, payload) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              note: payload,
            }
          : task,
      ),
    })),
}));

export default useTasks;
