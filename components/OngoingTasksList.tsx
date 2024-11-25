import { useState } from 'react';
import { MdDoneAll } from 'react-icons/md';

import Modal from './modal/Modal';
import TaskCard from './TaskCard';
import useTasks from '@/hooks/useTasks';

export default function OngoingTasksList() {
  const { tasks, checkTasksDone } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const undoneTasksCount = tasks.filter((task) => !task.isCompleted).length;
  const modalMessage = 'Mark each task as completed?';

  return (
    <section className="flex flex-col gap-2">
      {isModalOpen && (
        <Modal
          message={modalMessage}
          confirmFn={checkTasksDone}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {undoneTasksCount === 0 && (
        <h2 className="mt-8 animate-fade-down select-none text-center text-lg font-medium capitalize animate-normal animate-duration-200 animate-fill-both animate-once animate-ease-out dark:text-white">
          😎 There is nothing to do!
        </h2>
      )}
      {undoneTasksCount !== 0 && (
        <article className="flex flex-col gap-2">
          <div className="mb-1 flex items-center justify-between px-2">
            <h2 className="text-lg font-medium dark:text-white">
              Ongoing Tasks
            </h2>
            <button
              title="Clear Completed Tasks"
              onClick={() => setIsModalOpen(true)}
              className="dark:text-white"
            >
              <MdDoneAll size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {tasks.map((task) => {
              if (!task.isCompleted && task.isImportant) {
                return <TaskCard key={task.id} {...task} />;
              }
            })}
            {tasks.map((task) => {
              if (!task.isCompleted && !task.isImportant) {
                return <TaskCard key={task.id} {...task} />;
              }
            })}
          </div>
        </article>
      )}
    </section>
  );
}
