import { v4 as uuidv4 } from 'uuid';

const initialTasks: Task[] = [
  {
    id: uuidv4(),
    title: 'Purchasing supplies for the kitchen',
    isCompleted: false,
    isImportant: true,
    steps: [
      { id: uuidv4(), title: 'Milk', isStepDone: true },
      { id: uuidv4(), title: 'Ketchup', isStepDone: true },
      { id: uuidv4(), title: 'Bread', isStepDone: false },
    ],
    isCardExpanded: false,
    link: '',
    note: 'Check the expiration date of the milk.',
  },
  {
    id: uuidv4(),
    title: 'Pay the bills',
    isCompleted: false,
    isImportant: false,
    isCardExpanded: false,
    link: '',
    steps: [
      { id: uuidv4(), title: 'Electricity', isStepDone: true },
      { id: uuidv4(), title: 'Phone', isStepDone: false },
      { id: uuidv4(), title: 'Water', isStepDone: false },
      { id: uuidv4(), title: 'Internet', isStepDone: false },
    ],
    note: '',
  },
  {
    id: uuidv4(),
    title: 'Update the resume',
    isCompleted: true,
    isImportant: true,
    steps: [
      { id: uuidv4(), title: "Add project's github repo", isStepDone: true },
      { id: uuidv4(), title: 'Update email', isStepDone: true },
      {
        id: uuidv4(),
        title: 'Put the resume in LinkedIn',
        isStepDone: true,
      },
    ],
    isCardExpanded: false,
    link: 'https://github.com/yoshifoxor',
    note: '',
  },
];

export default initialTasks;
