import TaskInput from '@/components/TaskInput';
import TaskItem from '@/components/TaskItem';
import useStore from '@/store';

export default function Home() {
  const { tasks } = useStore();

  return (
    <div className="relative mx-auto mt-10 flex w-11/12 max-w-md flex-col gap-10">
      <h1 className="text-center text-2xl font-semibold text-slate-900">
        Tasks
      </h1>
      <TaskInput />
      <section className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </section>
    </div>
  );
}
