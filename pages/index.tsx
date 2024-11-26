import AddTaskInput from '@/components/AddTaskInput';
import CompletedTasksList from '@/components/CompletedTasksList';
import Navbar from '@/components/Navbar';
import OngoingTasksList from '@/components/OngoingTasksList';
import useTasks from '@/hooks/useTasks';

export default function Home() {
  const { tasks } = useTasks();
  const isAnyCompletedTask =
    tasks.filter((task) => task.isCompleted).length !== 0;

  return (
    <div className="relative mx-auto my-10 flex w-11/12 max-w-lg flex-col gap-14">
      <Navbar />
      <AddTaskInput />
      <OngoingTasksList />
      {isAnyCompletedTask && <CompletedTasksList />}
    </div>
  );
}
