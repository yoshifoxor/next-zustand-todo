type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
  isCardExpanded?: boolean;
  note: string;
  link: string;
  isImportant?: boolean;
  steps: Step[];
  createdDate?: Date;
};

type Step = {
  id: string;
  title: string;
  isStepDone: boolean;
};

// Zustand useTasks types:
type TasksStore = {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (taskId: string) => void;
  toggleTaskDone: (taskId: string) => void;
  clearCompletedTasks: () => void;
  checkTasksDone: () => void;
  toggleImportance: (taskId: string) => void;
  toggleExpandCard: (taskId: string) => void;
  addLink: (taskId: string, link: string) => void;
  removeLink: (taskId: string) => void;
  addStep: (taskId: string, payload: string) => void;
  toggleStepDone: (taskId: string, stepId: string) => void;
  removeStep: (stepId: string, stepId: string) => void;
  addNote: (taskId: string, payload: string) => void;
};
