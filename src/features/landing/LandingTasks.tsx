import TaskBox from './components/TaskBox';

const LandingTasks = () => {
  return (
    <div className="flex h-65 w-full flex-wrap items-center justify-between gap-2 border">
      <div className="w-full text-xl font-bold">Tasks</div>
      <TaskBox label="Todo" />
      <TaskBox label="In Progress" />
      <TaskBox label="Done" />
      <TaskBox label="Canceled" />
    </div>
  );
};

export default LandingTasks;
