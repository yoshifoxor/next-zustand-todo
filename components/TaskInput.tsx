import Input from './Input';
import useTasks from '@/hooks/useTasks';

const TaskInput = () => {
  const { addTask } = useTasks();

  return (
    <Input callbackFn={addTask} placeholder="Add a task" title="Add new task" />
  );
};

export default TaskInput;
