import { useEffect, useRef, useState } from 'react';

import { LuPlus } from 'react-icons/lu';

import useStore from '@/store';

const InputChild = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const addTaskInput = useRef<HTMLInputElement | null>(null);
  const { addTask } = useStore();

  useEffect(() => {
    addTaskInput.current?.focus();
  }, []);

  // TODO: listen to keydown to focus on `addTaskInput`

  return (
    <>
      <input
        type="text"
        className="w-full rounded-xl border px-6 py-3 text-lg shadow outline-none transition focus:shadow-lg"
        ref={addTaskInput}
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTask(taskTitle);
            setTaskTitle('');
          } else if (e.key === 'Escape') {
            if (document.activeElement === addTaskInput.current) {
              addTaskInput.current?.blur();
            }
          }
        }}
        placeholder="Add a Task"
      />
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer p-1 text-slate-700"
        onClick={() => addTask(taskTitle)}
        title="Add new task"
      >
        <LuPlus size={32} />
      </button>
    </>
  );
};

export default InputChild;
