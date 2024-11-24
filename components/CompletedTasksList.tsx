import { MdClearAll } from 'react-icons/md';

import TaskItem from './TaskItem';
import useStore from '@/store';

const CompletedTasksList = () => {
  const { tasks, clearCompeletedTasks } = useStore();

  return (
    <section className="flex flex-col gap-2">
      <div className="mb-1 flex items-center justify-between px-2">
        <h2 className="text-lg font-medium">Completed Tasks</h2>
        <div className="flex items-center">
          <button onClick={() => clearCompeletedTasks()} title="Clear Completed Tasks">
            <MdClearAll size={24} />
          </button>
        </div>
      </div>
      {tasks.map((task) => {
        if (task.isCompleted) {
          return <TaskItem key={task.id} {...task} />;
        }
      })}
    </section>
  );
};

export default CompletedTasksList;
