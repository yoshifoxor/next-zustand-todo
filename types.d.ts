type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
  isCardExpanded: boolean;
  isImportant?: boolean;
  steps?: Step[];
  link?: string;
  note?: string;
  createdDate?: Date;
};

type Step = {
  id: string;
  title: string;
  isCompleted: boolean;
  isCardExpanded?: boolean;
  isImportant?: boolean;
  steps?: Step[];
};
