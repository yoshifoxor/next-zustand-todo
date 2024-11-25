import useTasks from '@/hooks/useTasks';

const TaskItem = ({ id, isCompleted, title }: Task) => {
  const { toggleTaskDone } = useTasks();

  const toggleExpandedTaskCard = () => {};

  return (
    <div
      className={`flex cursor-pointer items-center gap-3 rounded-md border p-4 shadow-sm transition hover:shadow-md dark:border-slate-600 ${
        isCompleted ? 'opacity-60' : ''
      }`}
      onClick={toggleExpandedTaskCard}
    >
      <input
        type='checkbox'
        checked={isCompleted}
        className='checkbox'
        onClick={() => toggleTaskDone(id)}
        readOnly
        title={isCompleted ? 'Uncheck the task' : 'Check the task'}
      />

      <div>
        <h3
          className={`select-none text-lg dark:text-white ${
            isCompleted ? 'line-through' : ''
          }`}
        >
          {title}
        </h3>
      </div>
      <div></div>
    </div>
  );
};

export default TaskItem;
