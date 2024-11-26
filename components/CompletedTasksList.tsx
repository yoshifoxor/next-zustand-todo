import { useState } from 'react';
import { MdClearAll } from 'react-icons/md';

import Modal from './modal/Modal';
import TaskItem from './TaskCard';
import useTasks from '@/hooks/useTasks';

export default function CompletedTasksList() {
  const { tasks, clearCompletedTasks } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalMessage = 'Clear all completed tasks?';

  return (
    <section className="flex flex-col gap-2">
      {isModalOpen && (
        <Modal
          message={modalMessage}
          confirmFn={clearCompletedTasks}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <div className="mb-1 flex items-center justify-between px-2 ">
        <h2 className="select-none text-lg font-medium">Completed Tasks</h2>
        <div className="flex items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            title="Clear Completed Tasks"
          >
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
}
