import useStore from '@/store';

const TaskItem = ({ id, isCompleted, title }: Task) => {
  const { deleteTask, toggleTaskDone } = useStore();

  const toggleExpandedTaskCard = () => {};

  return (
    <div
      className={`flex cursor-pointer items-center gap-3 rounded-md border p-4 shadow-sm transition hover:shadow-md ${
        isCompleted ? 'opacity-60' : ''
      }`}
      onClick={toggleExpandedTaskCard}
    >
      <input
        type="checkbox"
        checked={isCompleted}
        className="checkbox"
        onClick={() => toggleTaskDone(id)}
        readOnly
        title={isCompleted ? 'Uncheck the task' : 'Check the task'}
      />

      <div>
        <h3
          className={`select-none text-lg ${isCompleted ? 'line-through' : ''}`}
        >
          {title}
        </h3>
      </div>
      <div></div>
    </div>
  );
};

export default TaskItem;
