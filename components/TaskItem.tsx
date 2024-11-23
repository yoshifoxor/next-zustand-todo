import useStore from '@/store';

const TaskItem = ({ id, isCompleted, title }: Task) => {
  const { deleteTask, toggleTaskDone } = useStore();

  return (
    <div
      key={id}
      onClick={() => toggleTaskDone(id)}
      className="cursor-pointer rounded-md border p-4 shadow-sm transition hover:scale-[1.01] hover:shadow-md"
    >
      <p>
        {title}...{isCompleted ? 'Done' : 'Not Yet!'}
      </p>
      <button onClick={() => deleteTask(id)}>DELETE</button>
    </div>
  );
};

export default TaskItem;
